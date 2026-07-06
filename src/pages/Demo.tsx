import { Play, Brain, FileCheck, Target, LineChart } from 'lucide-react';

export function Demo() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-neutral-900 tracking-tight">
              See Niel Academy in action
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-neutral-700 leading-relaxed">
              Watch how our curriculum-aligned AI tutoring system helps students master GCE concepts through Understanding Mode, Guided Mode, and personalized feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Videos Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Video 1: AI Tutoring Overview */}
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 overflow-hidden">
            <div className="aspect-video bg-neutral-100 flex items-center justify-center">
              <div className="text-center">
                <div className="size-16 rounded-full bg-brand-card flex items-center justify-center mx-auto mb-4">
                  <Play className="size-8 text-neutral-700" />
                </div>
                <p className="text-neutral-600 text-sm">YouTube Video Embed</p>
                <p className="text-neutral-500 text-xs mt-1">AI Tutoring Overview</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Brain className="size-5 text-neutral-900" />
                <h3 className="text-xl font-semibold text-neutral-900">AI Tutoring System</h3>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                See how Niel Academy's AI tutor guides students through complex GCE questions, providing curriculum-aligned explanations that build understanding rather than just giving answers.
              </p>
            </div>
          </div>

          {/* Video 2: Understanding Mode */}
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 overflow-hidden">
            <div className="aspect-video bg-neutral-100 flex items-center justify-center">
              <div className="text-center">
                <div className="size-16 rounded-full bg-brand-card flex items-center justify-center mx-auto mb-4">
                  <Play className="size-8 text-neutral-700" />
                </div>
                <p className="text-neutral-600 text-sm">YouTube Video Embed</p>
                <p className="text-neutral-500 text-xs mt-1">Understanding Mode Demo</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Target className="size-5 text-neutral-900" />
                <h3 className="text-xl font-semibold text-neutral-900">Understanding Mode</h3>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                Watch a student work through a problem in Understanding Mode, where Niel asks strategic questions to guide thinking and build problem-solving skills.
              </p>
            </div>
          </div>

          {/* Video 3: Guided Mode */}
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 overflow-hidden">
            <div className="aspect-video bg-neutral-100 flex items-center justify-center">
              <div className="text-center">
                <div className="size-16 rounded-full bg-brand-card flex items-center justify-center mx-auto mb-4">
                  <Play className="size-8 text-neutral-700" />
                </div>
                <p className="text-neutral-600 text-sm">YouTube Video Embed</p>
                <p className="text-neutral-500 text-xs mt-1">Guided Mode Walkthrough</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <LineChart className="size-5 text-neutral-900" />
                <h3 className="text-xl font-semibold text-neutral-900">Guided Learning</h3>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                Experience how Guided Mode breaks complex questions into manageable steps, with clear explanations that help students learn the methodology.
              </p>
            </div>
          </div>

          {/* Video 4: Automated Grading */}
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 overflow-hidden">
            <div className="aspect-video bg-neutral-100 flex items-center justify-center">
              <div className="text-center">
                <div className="size-16 rounded-full bg-brand-card flex items-center justify-center mx-auto mb-4">
                  <Play className="size-8 text-neutral-700" />
                </div>
                <p className="text-neutral-600 text-sm">YouTube Video Embed</p>
                <p className="text-neutral-500 text-xs mt-1">Grading Engine Demo</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <FileCheck className="size-5 text-neutral-900" />
                <h3 className="text-xl font-semibold text-neutral-900">Mark Scheme Grading</h3>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                See how our grading engine evaluates student answers against official GCE mark schemes, providing detailed feedback and personalized recommendations.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Features highlight */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        <div className="rounded-3xl bg-brand-background/60 p-8 lg:p-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl text-neutral-900 mb-6">
              What makes Niel Academy different
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="size-10 rounded-xl bg-white/80 border border-neutral-200 grid place-items-center shrink-0">
                  <Brain className="size-5 text-neutral-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Curriculum Alignment</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    Every explanation and question is mapped to the official GCE syllabus and examination requirements.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="size-10 rounded-xl bg-white/80 border border-neutral-200 grid place-items-center shrink-0">
                  <FileCheck className="size-5 text-neutral-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Official Mark Schemes</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    Grading and feedback based on actual GCE examination mark schemes, not generic rubrics.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="size-10 rounded-xl bg-white/80 border border-neutral-200 grid place-items-center shrink-0">
                  <Target className="size-5 text-neutral-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Adaptive Learning</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    AI that adjusts to your learning style and provides the right level of support for each question.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="size-10 rounded-xl bg-white/80 border border-neutral-200 grid place-items-center shrink-0">
                  <LineChart className="size-5 text-neutral-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Progress Tracking</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    Detailed analytics on your performance with personalized recommendations for improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-3xl bg-neutral-950 text-white overflow-hidden relative">
          <div className="relative p-10 lg:p-14 text-center">
            <h2 className="text-3xl sm:text-4xl">Experience curriculum-aligned tutoring</h2>
            <p className="mt-4 text-white/80 leading-relaxed max-w-2xl mx-auto">
              Download Niel Academy and start studying with AI tutoring designed specifically for GCE preparation.
            </p>
            <div className="mt-8">
              <a 
                href="https://play.google.com/store/apps/details?id=com.nielacademy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex"
              >
                <img src="/images/getOnPlayStore.svg" alt="Get it on Google Play" className="h-20" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}