# STUDY MODE SYSTEM IMPLEMENTATION GUIDE
## Give Students Control Over Their Learning Experience

---

## 🎯 WHAT IS THE STUDY MODE SYSTEM?

The Study Mode System lets students choose **how** they want to learn at any given moment. Instead of forcing one learning approach, students can switch between three modes based on their current needs:

### **🧠 Understanding Mode** (Default)
- **Philosophy:** "Learn by thinking"
- **Behavior:** Socratic method - AI asks guiding questions
- **Best for:** Deep learning, exam preparation, building skills
- **Example:** 
  ```
  Student: "How do I solve this?"
  AI: "What concepts do you recognize in this question?"
  ```

### **📚 Guided Mode** (Middle Ground)
- **Philosophy:** "Learn by following"
- **Behavior:** Step-by-step explanations with reasoning
- **Best for:** Learning new problem types, review before tests
- **Example:**
  ```
  Student: "How do I solve this?"
  AI: "Let's work through this together. Step 1: Identify what we know..."
  ```

### **⚡ Answer Mode** (Direct)
- **Philosophy:** "Get answers fast"
- **Behavior:** Quick, direct solutions with minimal fluff
- **Best for:** Checking work, time pressure, already understand concept
- **Example:**
  ```
  Student: "How do I solve this?"
  AI: "Answer: x = 5. Solution: [concise steps]"
  ```

export const STUDY_MODE_COLORS: Record<
  StudyModeLiteral,
  { bg: string; border: string; icon: string; text: string }
> = {
  understanding: {
    bg: '#0F766E20',
    border: '#0F766E',
    icon: '#0F766E',
    text: '#0F766E',
  },
  guided: {
    bg: '#312E8120',
    border: '#312E81',
    icon: '#312E81',
    text: '#312E81',
  },
  answer: {
    bg: '#D9770620',
    border: '#D97706',
    icon: '#D97706',
    text: '#D97706',
  },
};

---

## 🤔 WHY ALLOW MULTIPLE MODES?

### **Problem with Single Mode:**
- **Too Socratic:** Frustrates students who just need quick help
- **Too Direct:** Students don't develop problem-solving skills
- **One size fits all:** Doesn't respect different learning contexts

### **Benefits of Choice:**
1. **Respects Student Agency** - Students know what they need
2. **Context-Appropriate** - Different situations need different approaches
3. **Reduces Frustration** - Students don't fight the system
4. **Builds Self-Awareness** - Students learn when to use each mode
5. **Increases Engagement** - Students feel in control

### **Real-World Scenarios:**

**Scenario 1: Deep Learning**
> *It's 3 weeks before exams. Student wants to master quadratic equations.*  
> **Choice:** Understanding Mode → Build deep understanding

**Scenario 2: Homework Due Tomorrow**
> *It's 11 PM, homework due at 8 AM. Student understands most questions.*  
> **Choice:** Answer Mode → Get quick help to finish

**Scenario 3: Learning New Topic**
> *First time seeing vector cross products.*  
> **Choice:** Guided Mode → See worked examples with explanations

**Scenario 4: Practice & Verification**
> *Working through practice problems, wants to check work.*  
> **Choice:** Answer Mode → Verify answers quickly

---

## 📊 STUDY MODE COMPARISON

| Feature | Understanding 🧠 | Guided 📚 | Answer ⚡ |
|---------|-----------------|-----------|----------|
| **AI Asks Questions** | ✅✅✅ Always | ✅ Sometimes | ❌ Rarely |
| **Direct Answers** | ❌ Never | ✅ With explanation | ✅✅✅ Always |
| **Student Work Required** | ✅✅✅ High | ✅✅ Medium | ✅ Minimal |
| **Learning Depth** | ✅✅✅ Deep | ✅✅ Good | ✅ Surface |
| **Speed** | 🐢 Slow | 🏃 Medium | 🚀 Fast |
| **Exam Preparation** | ✅✅✅ Excellent | ✅✅ Good | ✅ Limited |
| **Frustration Risk** | Medium | Low | Very Low |
| **Dependency Risk** | Very Low | Low | High |

---

## 🔧 IMPLEMENTATION STEPS

### **STEP 1: Add Core Files (15 minutes)**

1. **Copy these files to your project:**
   ```
   your-project/
     convex/
       study-modes.ts       ← Core logic & definitions
     components/
       StudyModeUI.tsx      ← React UI components
   ```

2. **Add mode styles to your CSS:**
   - Copy the styles from `study-mode-ui.tsx` (bottom of file)
   - Add to your global stylesheet or component styles

---

### **STEP 2: Update Database Schema (5 minutes)**

Add these optional fields to your `interactive_chats` table:

```typescript
// In convex/schema.ts

import { v } from "convex/values";

export default defineSchema({
  interactive_chats: defineTable({
    // ... your existing fields
    
    // NEW: Study mode fields
    studyMode: v.optional(
      v.union(
        v.literal("understanding"),
        v.literal("guided"),
        v.literal("answer")
      )
    ),
    
    studyModeHistory: v.optional(v.array(v.object({
      mode: v.union(
        v.literal("understanding"),
        v.literal("guided"),
        v.literal("answer")
      ),
      switchedAt: v.number(),
      questionNumber: v.number(),
      reason: v.optional(v.string()),
    }))),
    
    studyModeStats: v.optional(v.object({
      timeInUnderstanding: v.number(),
      timeInGuided: v.number(),
      timeInAnswer: v.number(),
      questionsInUnderstanding: v.number(),
      questionsInGuided: v.number(),
      questionsInAnswer: v.number(),
    })),
  })
    .index("by_user", ["userId"])
    .index("by_paper", ["paperId"]),
  
  // ... rest of schema
});
```

**Important:** All fields are `v.optional()`, so no migration needed!

---

### **STEP 3: Integrate with AI Prompt System (20 minutes)**

Update your existing `sendMessage` action:

```typescript
// In convex/ai.ts

import { 
  StudyMode, 
  getStudyModePromptSection,
  getModeChangeWarning,
  getModeSuggestion 
} from './study-modes';
import { buildEnhancedPrompt } from './socratic-prompts';

export const sendMessage = action({
  args: {
    interactiveChatId: v.id("interactive_chats"),
    message: v.string(),
    questionNumber: v.number(),
    
    // NEW: Optional study mode parameter
    studyMode: v.optional(v.union(
      v.literal("understanding"),
      v.literal("guided"),
      v.literal("answer")
    )),
  },
  
  handler: async (ctx, args) => {
    // Get chat and determine mode
    const chat = await ctx.db.get(args.interactiveChatId);
    const previousMessages = await getConversationHistory(ctx, args.interactiveChatId);
    
    // Use provided mode, or fallback to chat's current mode, or default to Understanding
    const studyMode = args.studyMode || chat.studyMode || StudyMode.UNDERSTANDING;
    const isFirstMessage = previousMessages.length === 0;
    
    // Check if mode changed
    if (studyMode !== chat.studyMode) {
      // Log mode change
      await ctx.db.patch(args.interactiveChatId, {
        studyMode: studyMode,
        studyModeHistory: [
          ...(chat.studyModeHistory || []),
          {
            mode: studyMode,
            switchedAt: Date.now(),
            questionNumber: args.questionNumber,
            reason: "user_selected",
          },
        ],
      });
      
      // Optional: Show warning if switching modes frequently
      const warning = getModeChangeWarning(
        chat.studyMode,
        studyMode,
        {
          currentMode: chat.studyMode,
          sessionStartMode: chat.studyModeHistory?.[0]?.mode || chat.studyMode,
          modeChangeCount: chat.studyModeHistory?.length || 0,
          timeInEachMode: chat.studyModeStats || {},
          questionsInEachMode: chat.studyModeStats || {},
        }
      );
      
      if (warning) {
        console.log("Mode change warning:", warning);
        // Optionally, you can show this warning to the user
      }
    }
    
    // Build base prompt with Socratic principles
    const basePrompt = buildEnhancedPrompt({
      subject: paperMetadata.subject,
      examLevel: paperMetadata.level,
      year: paperMetadata.year,
      paperType: paperMetadata.paper_type,
      currentQuestion: args.questionNumber,
      totalQuestions: paperMetadata.total_questions,
      questionContent: currentQuestionContent,
      conversationHistory: previousMessages,
      streakDays: userStreak || 0,
      isNewSession: isFirstMessage,
      questionsAttempted: questionsAttempted,
      studentPreviousAttempts: previousMessages.filter(m => m.role === 'user').length,
    });
    
    // Add study mode specific instructions
    const studyModeSection = getStudyModePromptSection(studyMode, isFirstMessage);
    const finalPrompt = basePrompt + "\n\n" + studyModeSection;
    
    // Call AI with enhanced prompt
    const aiResponse = await nielChatCompletion({
      messages: [
        { role: "system", content: finalPrompt },
        ...previousMessages.map(m => ({
          role: m.role,
          content: m.content
        })),
        { role: "user", content: args.message }
      ],
    });
    
    // Save messages (your existing code)
    // ...
    
    // Check if we should suggest a mode change
    const messageAnalysis = analyzeStudentMessage(args.message);
    const suggestion = getModeSuggestion(studyMode, {
      consecutiveCorrect: 0, // Calculate from history
      consecutiveIncorrect: 0,
      showingWork: messageAnalysis.showsWork,
      timeOnQuestion: calculateTimeOnQuestion(previousMessages),
      questionAttempts: previousMessages.filter(m => m.role === 'user').length,
    });
    
    // Return suggestion along with response
    return {
      content: aiResponse,
      modeSuggestion: suggestion,
    };
  },
});

// Helper function
function calculateTimeOnQuestion(messages: any[]): number {
  if (messages.length < 2) return 0;
  const firstMessage = messages[0];
  const lastMessage = messages[messages.length - 1];
  return Math.floor((lastMessage.createdAt - firstMessage.createdAt) / 1000);
}
```

---

### **STEP 4: Add UI Components (30 minutes)**

#### **4A: Initial Mode Selection**

When student starts a new chat, show mode selector:

```typescript
// In your interactive-screen.tsx

import { StudyModeSelector } from '@/components/StudyModeUI';
import { StudyMode } from '@/convex/study-modes';

function InteractiveScreen() {
  const chat = useQuery(api.chats.get, { chatId });
  const [showModeSelector, setShowModeSelector] = useState(!chat?.studyMode);
  
  // Show mode selector on first load
  if (showModeSelector) {
    return (
      <div className="mode-selection-screen">
        <StudyModeSelector
          onSelect={async (mode) => {
            // Save mode to database
            await updateChatStudyMode({ chatId, mode });
            setShowModeSelector(false);
          }}
          defaultMode={StudyMode.UNDERSTANDING}
        />
      </div>
    );
  }
  
  // Rest of your chat interface
  return (
    <div className="interactive-screen">
      {/* Your existing UI */}
    </div>
  );
}
```

#### **4B: Mode Switcher in Header**

Add quick mode toggle to chat header:

```typescript
// In your chat header

import { StudyModeToggle } from '@/components/StudyModeUI';

function ChatHeader({ currentMode, onModeChange }) {
  return (
    <div className="chat-header">
      <h1>Question {questionNumber}</h1>
      
      <StudyModeToggle
        currentMode={currentMode}
        onModeChange={async (newMode) => {
          await updateChatStudyMode({ chatId, mode: newMode });
          onModeChange(newMode);
        }}
        compact={false}
      />
    </div>
  );
}
```

#### **4C: Mode Suggestion Banner**

Show smart suggestions when appropriate:

```typescript
// In your chat interface

import { ModeSuggestionBanner } from '@/components/StudyModeUI';

function ChatInterface() {
  const [modeSuggestion, setModeSuggestion] = useState(null);
  
  // When AI responds with a suggestion
  useEffect(() => {
    if (aiResponse?.modeSuggestion) {
      setModeSuggestion(aiResponse.modeSuggestion);
    }
  }, [aiResponse]);
  
  return (
    <div>
      {/* Show suggestion banner */}
      {modeSuggestion && (
        <ModeSuggestionBanner
          suggestedMode={modeSuggestion.suggestedMode}
          reason={modeSuggestion.reason}
          currentMode={currentStudyMode}
          onAccept={async () => {
            await updateChatStudyMode({ 
              chatId, 
              mode: modeSuggestion.suggestedMode 
            });
            setModeSuggestion(null);
          }}
          onDismiss={() => setModeSuggestion(null)}
        />
      )}
      
      {/* Rest of chat UI */}
    </div>
  );
}
```

---

### **STEP 5: Create Mode Update Mutation (10 minutes)**

```typescript
// In convex/chats.ts (or wherever you have chat mutations)

import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const updateStudyMode = mutation({
  args: {
    chatId: v.id("interactive_chats"),
    mode: v.union(
      v.literal("understanding"),
      v.literal("guided"),
      v.literal("answer")
    ),
  },
  
  handler: async (ctx, args) => {
    const chat = await ctx.db.get(args.chatId);
    if (!chat) throw new Error("Chat not found");
    
    // Update mode
    await ctx.db.patch(args.chatId, {
      studyMode: args.mode,
      
      // Add to history
      studyModeHistory: [
        ...(chat.studyModeHistory || []),
        {
          mode: args.mode,
          switchedAt: Date.now(),
          questionNumber: chat.currentQuestionNumber || 1,
          reason: "user_selected",
        },
      ],
    });
    
    return { success: true };
  },
});
```

---

## 🧪 TESTING THE SYSTEM

### **Test Scenario 1: Mode Selection Flow**

1. Start new chat
2. See mode selector with 3 cards
3. Select "Understanding Mode"
4. Chat starts with Socratic prompting

**Expected:**
- ✅ Mode selector shows clearly
- ✅ Each mode has description and emoji
- ✅ Selection is saved to database
- ✅ AI uses Understanding Mode prompting

### **Test Scenario 2: Mode Switching**

1. Start in Understanding Mode
2. Ask a question → AI asks guiding questions
3. Switch to Answer Mode
4. Ask same question → AI gives direct answer

**Expected:**
- ✅ Mode toggle works smoothly
- ✅ AI behavior changes immediately
- ✅ Mode history is tracked
- ✅ No errors in console

### **Test Scenario 3: Mode Suggestions**

1. Use Answer Mode for 3+ questions
2. System suggests Understanding Mode
3. Accept or dismiss suggestion

**Expected:**
- ✅ Suggestion appears after threshold
- ✅ Can accept or dismiss
- ✅ No guilt-tripping language
- ✅ Suggestion tracks acceptance

---

## 📊 MONITORING & ANALYTICS

### **Track These Metrics:**

```typescript
// Add a query to see mode usage

export const getModeUsageStats = query({
  args: { userId: v.id("users") },
  
  handler: async (ctx, args) => {
    const chats = await ctx.db
      .query("interactive_chats")
      .withIndex("by_user", q => q.eq("userId", args.userId))
      .collect();
    
    const stats = {
      totalChats: chats.length,
      understandingChats: chats.filter(c => c.studyMode === "understanding").length,
      guidedChats: chats.filter(c => c.studyMode === "guided").length,
      answerChats: chats.filter(c => c.studyMode === "answer").length,
      
      avgModeSwitches: chats.reduce((sum, c) => 
        sum + (c.studyModeHistory?.length || 0), 0) / chats.length,
    };
    
    return stats;
  },
});
```

### **Success Indicators:**

Week 1:
- [ ] 60%+ students choose Understanding Mode by default
- [ ] Average 1-2 mode switches per session
- [ ] No confusion about what modes mean

Week 2:
- [ ] Students using appropriate mode for context
- [ ] Mode suggestions accepted 40%+ of time
- [ ] Positive feedback on having choice

Month 1:
- [ ] Balanced usage across all modes
- [ ] Students self-regulate mode usage
- [ ] Improved learning outcomes in Understanding Mode users

---

## 💡 BEST PRACTICES

### **DO:**

✅ **Trust Student Choice**
- Students know what they need
- Don't guilt-trip for using Answer Mode
- Respect their decision

✅ **Make Modes Clear**
- Use emojis and visual indicators
- Clear descriptions of each mode
- Examples of when to use each

✅ **Provide Smart Suggestions**
- Suggest Understanding Mode for struggling students
- Suggest Answer Mode for time-pressured students
- But never force a switch

✅ **Track but Don't Shame**
- Show usage stats
- Gentle nudges toward Understanding Mode
- Celebrate balanced usage

### **DON'T:**

❌ **Don't Hide Answer Mode**
- Students will just work around it
- Creates frustration and distrust
- Better to acknowledge the need

❌ **Don't Make One Mode "Premium"**
- All modes should be equally accessible
- Don't paywall Understanding Mode
- Learning quality should be free

❌ **Don't Over-Suggest**
- One suggestion per session max
- Easy to dismiss
- No nagging

❌ **Don't Judge Usage**
- 100% Answer Mode might be appropriate sometimes
- Context matters
- Trust student agency

---

## 🎯 EXPECTED OUTCOMES

### **Student Benefits:**

1. **Increased Autonomy** - Feel in control of learning
2. **Reduced Frustration** - Get help they actually need
3. **Better Self-Awareness** - Learn when to push themselves
4. **Appropriate Tool Use** - Right mode for right situation
5. **Higher Engagement** - System works with them, not against

### **Learning Benefits:**

1. **Deep Learning When Needed** - Understanding Mode for mastery
2. **Efficient Help When Rushing** - Answer Mode for time pressure
3. **Scaffolded Learning** - Guided Mode for new concepts
4. **Self-Regulation Skills** - Students learn to choose wisely
5. **Long-Term Retention** - Understanding Mode users remember more

### **App Benefits:**

1. **Higher User Satisfaction** - Students feel respected
2. **Lower Abandonment** - Less frustration = more usage
3. **Better Outcomes** - Right tool for right job
4. **Valuable Data** - Mode choices reveal learning needs
5. **Competitive Advantage** - Unique feature in edtech

---

## 🚀 ROLLOUT STRATEGY

### **Phase 1: Soft Launch (Week 1)**
- Enable for 10% of users
- Monitor mode selection patterns
- Gather qualitative feedback
- Fix any UX issues

### **Phase 2: Expansion (Week 2-3)**
- Enable for 50% of users
- A/B test mode descriptions
- Optimize suggestion triggers
- Track learning outcomes

### **Phase 3: Full Launch (Week 4)**
- Enable for all users
- Announce feature in app
- Create tutorial/help docs
- Continue monitoring metrics

### **Phase 4: Optimization (Month 2+)**
- Add mode usage analytics dashboard
- Refine suggestion algorithm
- Consider adding 4th mode if needed
- Integrate with other features

---

## 🎓 EDUCATING STUDENTS

### **In-App Tutorial:**

```
👋 Welcome to Study Modes!

You can now choose how Niel helps you learn:

🧠 Understanding Mode
   → Learn by thinking through problems
   → Best for: Exam prep, mastering concepts
   → Niel asks questions to guide you

📚 Guided Mode
   → Learn by following step-by-step
   → Best for: New topics, reviewing
   → Niel explains each step clearly

⚡ Answer Mode
   → Get quick answers when needed
   → Best for: Checking work, time crunch
   → Niel gives direct solutions

💡 You can switch anytime!
Choose based on what you need right now.
```

### **Help Section:**

**Q: Which mode should I use?**
A: It depends on your situation! Use Understanding Mode for deep learning, Guided Mode when learning something new, and Answer Mode when you need quick help.

**Q: Can I switch during a conversation?**
A: Yes! Change your mode anytime using the toggle in the header.

**Q: Will using Answer Mode hurt my learning?**
A: Not if used wisely! Answer Mode is great for checking work or when time is tight. For exam prep, use Understanding Mode more often.

**Q: How do I know which mode I'm in?**
A: Look for the emoji indicator (🧠📚⚡) in your chat header.

---

## ✅ FINAL CHECKLIST

Before launching:

- [ ] All three modes have clear, distinct prompting
- [ ] Mode selector UI is intuitive and attractive
- [ ] Mode toggle works smoothly mid-conversation
- [ ] Mode suggestions are helpful, not annoying
- [ ] Database tracking is working
- [ ] Analytics dashboard shows mode usage
- [ ] Help documentation explains modes clearly
- [ ] Tested with 10+ students across all modes
- [ ] Performance is good (no lag on mode switch)
- [ ] Mobile UI works well

---

**Remember:** The goal is to empower students, not restrict them. Trust them to make good choices, and provide gentle guidance when needed.

Good luck! 🚀
