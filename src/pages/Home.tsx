import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Feature } from "@/components/ui/feature-with-advantages";
import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns";
import { BookOpen, Brain, CheckCircle2, MapPin, MessageSquare, Smartphone, Sparkles, Zap } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const whatsNewAdvantages = [
  { title: "Three study modes", description: "Understanding, Guided, or Answer; pick what fits." },
  { title: "Past papers library", description: "GCE O-Level, A-Level, and TVEE exams in one place." },
  { title: "AI tutoring", description: "Explanations and help when you&apos;re stuck." },
  { title: "Free to use", description: "Core content and past papers at no cost." },
  { title: "Offline access", description: "Study without internet when you need to." },
  { title: "Built for your curriculum", description: "Content that matches your syllabus and exam board." },
];

const whyStudentsUse = [
  "Think through questions instead of memorizing",
  "Thousands of past exam questions",
  "Study online or offline",
  "Modes that match how you learn",
  "Made for Cameroonian students",
];

// From docs/play-store-reviews.md; keep in sync with source
const playStoreTestimonials: Testimonial[] = [
  { name: "Brian Wirngo", text: "very very good but Not all subject like Religious studies is not there both for O-level and A-level", role: "Play Store · 4 stars" },
  { name: "Mesue Mark", text: "i love 😘 the app just that is limited to 2020 past questions", role: "Play Store · 5 stars" },
  { name: "NANGWE DAVID", text: "THE BEST SO FAR IN CAMEROON🇨🇲", role: "Play Store · 5 stars" },
  { name: "Tanto Carine", text: "you are the best", role: "Play Store · 5 stars" },
  { name: "forgwei g", text: "Wonderful 😊", role: "Play Store · 5 stars" },
  { name: "EFUETNJI MERCY", text: "best", role: "Play Store · 5 stars" },
];

export function Home() {
  return (
    <div className="flex-1 w-full h-full">
      {/* Hero Section - flat, two-column */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-20 pt-12">
        <div className="grid  gap-8 items-center">
          <div>
            <h1 className="lg:text-8xl md:text-7xl sm:text-6xl text-neutral-900 mb-6 leading-tight text-center font-roboto-bold">
              Built for <span className="underline decoration-brand-primary decoration-5 underline-offset-8 font-light font-serif">African students.</span> <span className="underline decoration-brand-primary decoration-5 underline-offset-8 font-light font-serif">Deeper understanding</span>, not shortcuts.
            </h1>
            <p className="text-neutral-700 text-lg mb-8 leading-relaxed text-center font-serif font-stretch-condensed font-light max-w-2xl mx-auto">
              A mobile app for exam prep. Think through problems instead of copying answers. Study at your own pace with modes that match your curriculum.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="https://play.google.com/store/apps/details?id=com.nielacademy" target="_blank" rel="noopener noreferrer">
                <img src="/images/getOnPlayStore.svg" alt="Download on Play Store" />
              </Link>
              <Link to="#study-modes" className="text-brand-primary font-medium underline underline-offset-4 hover:no-underline">
                Try Understanding Mode →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why students use Niel Academy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-6 text-center font-roboto-semibold">
          Why students use Niel Academy
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {whyStudentsUse.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-neutral-700 font-serif">
              <CheckCircle2 className="size-5 text-brand-primary shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Interactive Chat: Your personal study partner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 text-neutral-600 mb-2">
              <MessageSquare className="size-5 text-brand-primary" />
              <span className="text-sm font-medium">Interactive Learning</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-2 font-roboto-semibold">
              Your personal study partner
            </h3>
            <p className="text-neutral-600 font-serif leading-relaxed mb-4">
              Stuck on a topic? Ask questions or work through problems with a tutor that knows your syllabus.
            </p>
            <Link to="https://play.google.com/store/apps/details?id=com.nielacademy" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-medium underline underline-offset-4 hover:no-underline inline-flex items-center gap-1">
              Start chatting now →
            </Link>
          </div>
          <div className="md:w-1/2">
            <img src="/images/interactive-chat-screenshot3.png" alt="Interactive Chat" className="object-contain rounded-4xl w-full" />
          </div>
        </div>
      </section>

      {/* Free Past Papers & Content Library */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center md:flex-row lg:flex-row flex-col mb-12 min-h-[400px] flex rounded-4xl bg-brand-background justify-center">
          <div className="text-neutral-700 text-lg max-w-3xl mx-auto font-serif lg:w-1/2 w-full flex p-6">
            <div>
              <h3 className="lg:text-5xl text-3xl font-bold text-neutral-900 mb-4 text-left font-roboto-semibold">Free Past Papers & Content Library</h3>
              <p className="text-neutral-600 lg:text-2xl text-lg leading-relaxed text-left font-serif font-regular mb-4">
                Official exam questions. Practice that matches test day.
              </p>
              <p className="text-neutral-600 lg:text-lg text-base leading-relaxed text-left font-serif">
                Thousands of past papers and notes, grouped by exam type and year. Practice with the same kind of questions you&apos;ll see on test day.
              </p>
              <ul className="mt-4 space-y-2 text-neutral-600 font-serif text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-brand-primary shrink-0" /> Past papers and notes, free</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-brand-primary shrink-0" /> Sorted by exam type and year</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-brand-primary shrink-0" /> Questions that match your syllabus</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-brand-primary shrink-0" /> Core content available offline</li>
              </ul>
            </div>
          </div>
          <div className="font-bold text-neutral-900 mb-4 lg:w-1/2 w-full min-h-[400px] flex flex-col justify-center p-6">
            <p className="text-sm text-neutral-600 font-serif mb-4">Exams we support</p>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-neutral-600 cursor-pointer transition-colors">
                <div>
                  <h5 className="font-medium text-black font-roboto-bold">GCE Ordinary Level (O-Level)</h5>
                  <p className="text-sm text-neutral-600 font-serif font-light text-left">Form 5 completion examination</p>
                </div>
              </div>
              <div className="flex justify-between py-3 border-b border-neutral-600 cursor-pointer transition-colors">
                <div>
                  <h5 className="font-medium text-black font-roboto-bold">GCE Advanced Level (A-Level)</h5>
                  <p className="text-sm text-neutral-600 font-serif font-light text-left">Upper Sixth Form examination</p>
                </div>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-neutral-600 cursor-pointer transition-colors">
                <div>
                  <h5 className="font-medium text-black font-roboto-bold">TVEE Intermediate Level</h5>
                  <p className="text-sm text-neutral-600 font-serif font-light text-left">Technical & Vocational Education</p>
                </div>
              </div>
              <div className="flex justify-between items-center py-3 cursor-pointer transition-colors">
                <div>
                  <h5 className="font-medium text-black font-roboto-bold">TVEE Advanced Level</h5>
                  <p className="text-sm text-neutral-600 font-serif font-light text-left">Advanced Technical & Vocational</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's New: Feature with advantages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Feature
          badge="What's New"
          title="Something new!"
          description="Past papers, tutoring, and study modes that adapt to how you learn. Focus on what matters: passing your exams."
          advantages={whatsNewAdvantages}
        />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* What Makes Niel Academy Different */}
        <h2 className="md:text-5xl md:w-2/3 font-semibold text-neutral-900 mb-3 mt-8 font-roboto-semibold">
          What Makes <span className="font-light font-serif">Niel Academy</span> Different
        </h2>
        <p className="text-neutral-600 text-lg font-serif mb-8 max-w-xl">
          Most study apps give answers. We focus on understanding.
        </p>
        <p className="text-sm font-medium text-neutral-500 mb-4">A few ways we stand out:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-brand-card border-brand-card">
            <CardHeader>
              <div className="w-10 h-10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-neutral-800" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-800 text-lg font-serif font-light leading-relaxed">
                Made for African students, not adapted from foreign syllabuses.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-brand-card border-brand-card">
            <CardHeader>
              <div className="w-10 h-10 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-neutral-800" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-800 text-lg font-serif font-light leading-relaxed">
                A growing library focused on African exams. We started with GCE.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-brand-card border-brand-card">
            <CardHeader>
              <div className="w-10 h-10 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-neutral-800" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-800 text-lg font-serif font-light leading-relaxed">
                With Understanding Mode, you think before solutions appear.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-brand-card border-brand-card">
            <CardHeader>
              <div className="w-10 h-10 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-neutral-800" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-800 text-lg font-serif font-light leading-relaxed">
                Guided Mode walks you through when you need help.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-brand-card border-brand-card">
            <CardHeader>
              <div className="w-10 h-10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-neutral-800" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-800 text-lg font-serif font-light leading-relaxed">
                When you need the answer fast, Answer Mode is there.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-brand-card border-brand-card">
            <CardHeader>
              <div className="w-10 h-10 flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-neutral-800" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-800 text-lg font-serif font-light leading-relaxed">
                Offline access when internet is spotty.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-brand-card border-brand-card md:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="w-10 h-10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-neutral-800" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-800 text-lg font-serif font-light leading-relaxed">
                Simple design that runs on low-end phones.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="md:text-5xl font-semibold text-neutral-900 mb-6 font-roboto-semibold">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-brand-primary font-roboto-bold mb-2">1</span>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2 font-roboto-semibold">Choose your subject and exam</h3>
            <p className="text-neutral-600 font-serif leading-relaxed">GCE, TVEE, or another supported exam.</p>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-brand-primary font-roboto-bold mb-2">2</span>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2 font-roboto-semibold">Pick your study mode</h3>
            <p className="text-neutral-600 font-serif leading-relaxed">Understanding, Guided, or Answer; whatever fits.</p>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-brand-primary font-roboto-bold mb-2">3</span>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2 font-roboto-semibold">Practice until it clicks</h3>
            <p className="text-neutral-600 font-serif leading-relaxed">Build reasoning skills, not just memory.</p>
          </div>
        </div>
      </section>

      {/* Study Modes: choose how you learn */}
      {/* <section id="study-modes" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="mb-12">
          <h2 className="md:text-5xl md:w-2/3 font-semibold text-neutral-900 mb-4 font-roboto-semibold">
            Study Modes: Learn <span className="font-light font-serif">Your</span> Way
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl font-serif font-light leading-relaxed">
            Switch between three learning modes based on what you need: deep understanding with the Socratic method, step-by-step guidance for new topics, or fast direct answers when you&apos;re short on time.
          </p>
        </div>
        <div className="flex min-h-[400px] w-full items-center justify-center py-8">
          <div className="w-full max-w-3xl">
            <DisplayCards cards={studyModeCards} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
          <div>
            <p className="font-medium text-teal-700 font-roboto-semibold mb-1">Understanding</p>
            <p className="text-sm text-neutral-600 font-serif font-light">Best for exam prep and building lasting skills</p>
          </div>
          <div>
            <p className="font-medium text-indigo-700 font-roboto-semibold mb-1">Guided</p>
            <p className="text-sm text-neutral-600 font-serif font-light">Best for new problem types and review</p>
          </div>
          <div>
            <p className="font-medium text-amber-700 font-roboto-semibold mb-1">Answer</p>
            <p className="text-sm text-neutral-600 font-serif font-light">Best for checking work and time pressure</p>
          </div>
        </div>
      </section> */}

      {/* Testimonials: What our users say */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-brand-background/50 rounded-3xl my-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 font-roboto-semibold mb-3">
            What our users say
          </h2>
          <p className="text-neutral-600 font-serif">
            What students say on the Play Store.
          </p>
        </motion.div>
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[640px] overflow-hidden">
          <TestimonialsColumn testimonials={playStoreTestimonials.slice(0, 2)} duration={18} />
          <TestimonialsColumn testimonials={playStoreTestimonials.slice(2, 4)} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={playStoreTestimonials.slice(4, 6)} className="hidden lg:block" duration={20} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4 font-roboto-semibold">
          Ready to study better?
        </h2>
        <p className="text-neutral-600 text-lg font-serif mb-8 max-w-xl mx-auto">
          Download Niel Academy. Start learning with understanding.
        </p>
        <Link to="https://play.google.com/store/apps/details?id=com.nielacademy" target="_blank" rel="noopener noreferrer">
          <img src="/images/getOnPlayStore.svg" alt="Get it on Google Play" className="mx-auto" />
        </Link>
      </section>
    </div>
  );
}
