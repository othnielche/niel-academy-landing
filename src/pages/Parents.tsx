import { Link } from "react-router-dom";
import { CheckCircle2, Brain, BookOpen, FileQuestion, WifiOff } from "lucide-react";

export function Parents() {
  return (
    <div className="flex-1 w-full h-full">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Header */}
          <h1 className="text-4xl font-bold text-neutral-900 mb-2 font-roboto-bold text-center">
            For <span className="font-light font-serif">Parents</span>
          </h1>
          <p className="text-2xl font-semibold text-neutral-900 mb-6 font-roboto-semibold text-center">
            Help your child understand, not just memorize
          </p>

          <p className="text-neutral-700 text-lg leading-relaxed mb-4 font-serif font-light text-center max-w-3xl mx-auto">
            Passing one exam matters. So does whether your child can think through problems and solve them on their own. Niel Academy helps students build deeper understanding and confidence for exams like the GCE and TVEE.
          </p>

          {/* The Problem */}
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4 mt-12 font-roboto-semibold">
            What many parents see
          </h2>
          <p className="text-neutral-700 text-lg leading-relaxed mb-4 font-serif font-light">
            You might notice your child:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-neutral-700 font-serif font-light">
              <span className="text-neutral-400 mt-1">•</span>
              <span>Studies for long hours but still struggles in exams</span>
            </li>
            <li className="flex items-start gap-3 text-neutral-700 font-serif font-light">
              <span className="text-neutral-400 mt-1">•</span>
              <span>Memorizes solutions without getting why they work</span>
            </li>
            <li className="flex items-start gap-3 text-neutral-700 font-serif font-light">
              <span className="text-neutral-400 mt-1">•</span>
              <span>Gets stuck when questions are phrased differently</span>
            </li>
            <li className="flex items-start gap-3 text-neutral-700 font-serif font-light">
              <span className="text-neutral-400 mt-1">•</span>
              <span>Relies heavily on teachers or tutors to move forward</span>
            </li>
          </ul>
          <p className="text-neutral-700 text-lg leading-relaxed mb-12 font-serif font-light">
            That doesn&apos;t mean your child is lazy or incapable. Often it means they were never shown how to think through problems.
          </p>

          {/* How Niel Academy Helps */}
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4 mt-8 font-roboto-semibold">
            How Niel Academy helps
          </h2>
          <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-serif font-light">
            Most learning tools give answers. We help students learn how to get there.
          </p>

          <div className="space-y-8 mb-12">
            <div className="rounded-2xl p-6 border border-border bg-brand-background/30">
              <div className="flex items-center gap-2 mb-3">
                <Brain className="size-5 text-brand-primary" />
                <h3 className="text-lg font-semibold text-neutral-900 font-roboto-semibold">Understanding Mode</h3>
              </div>
              <p className="text-neutral-700 font-serif font-light mb-3">Our main approach: they try to solve a problem first. The app asks guiding questions to build reasoning. Answers show up only after genuine effort. That can build critical thinking and independence.</p>
              <ul className="space-y-2 text-neutral-600 font-serif text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-brand-primary shrink-0" /> Child attempts the problem first</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-brand-primary shrink-0" /> Guiding questions develop reasoning</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-brand-primary shrink-0" /> Answers appear only after effort</li>
              </ul>
            </div>

            <div className="rounded-2xl p-6 border border-border bg-brand-background/30">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="size-5 text-brand-primary" />
                <h3 className="text-lg font-semibold text-neutral-900 font-roboto-semibold">Guided help when stuck</h3>
              </div>
              <p className="text-neutral-700 font-serif font-light">Stuck? They can switch to a mode that walks them through the problem.</p>
            </div>

            <div className="rounded-2xl p-6 border border-border bg-brand-background/30">
              <div className="flex items-center gap-2 mb-3">
                <FileQuestion className="size-5 text-brand-primary" />
                <h3 className="text-lg font-semibold text-neutral-900 font-roboto-semibold">Past exam questions</h3>
              </div>
              <p className="text-neutral-700 font-serif font-light">Practice with official GCE and TVEE past papers, not random questions that don&apos;t match their exams.</p>
            </div>

            <div className="rounded-2xl p-6 border border-border bg-brand-background/30">
              <div className="flex items-center gap-2 mb-3">
                <WifiOff className="size-5 text-brand-primary" />
                <h3 className="text-lg font-semibold text-neutral-900 font-roboto-semibold">Works online or offline</h3>
              </div>
              <p className="text-neutral-700 font-serif font-light">Core materials work offline. Learning can continue even with spotty internet.</p>
            </div>
          </div>

          {/* What Your Child Gains */}
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4 mt-8 font-roboto-semibold">
            What your child gains
          </h2>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-neutral-700 font-serif font-light">
            <li>Stronger reasoning skills</li>
            <li>Better exam performance</li>
            <li>More confidence in class</li>
            <li>Less reliance on cramming</li>
            <li>A sense of ownership over their learning</li>
          </ul>
          <p className="text-neutral-700 text-lg leading-relaxed mb-12 font-serif font-light">
            These skills go beyond one exam. They help throughout their education.
          </p>

          {/* Built for Cameroonian Students */}
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4 mt-8 font-roboto-semibold">
            Built for Cameroonian students
          </h2>
          <p className="text-neutral-700 text-lg leading-relaxed mb-4 font-serif font-light">
            Unlike generic global apps, Niel Academy is built around:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-neutral-700 font-serif font-light">
            <li>The Cameroonian syllabus</li>
            <li>GCE and TVEE exam formats</li>
            <li>How students actually study locally</li>
            <li>Mobile-first access</li>
          </ul>
          <p className="text-neutral-700 text-lg leading-relaxed mb-12 font-serif font-light">
            Materials match what they&apos;ll face in school and national exams.
          </p>

          {/* Affordable */}
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4 mt-8 font-roboto-semibold">
            Affordable and accessible
          </h2>
          <p className="text-neutral-700 text-lg leading-relaxed mb-4 font-serif font-light">
            We believe past papers and core materials should be available to every student. That&apos;s why core content is free. Optional paid features add AI-powered support for those who want it.
          </p>
          <p className="text-neutral-700 text-lg leading-relaxed mb-12 font-serif font-light">
            Learning can continue even if private tutoring isn&apos;t an option.
          </p>

          {/* CTA */}
          <div className="rounded-2xl p-8 mt-12 border border-border bg-card">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4 font-roboto-semibold">
              Get your child started
            </h3>
            <p className="text-neutral-700 font-serif font-light mb-6">
              Move from memorizing to deeper understanding.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="https://play.google.com/store/apps/details?id=com.nielacademy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/getOnPlayStore.svg" alt="Download on Play Store" className="h-12" />
              </Link>
              <p className="text-sm text-neutral-600 font-serif">Let them try Understanding Mode today.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
