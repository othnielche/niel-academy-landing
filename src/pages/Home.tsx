import { Link } from "react-router-dom";
import {
  Brain,
  FileText,
  LineChart,
  MessageSquareQuote,
  MoveRight,
} from "lucide-react";
import { site } from "@/lib/site";

export function Home() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-0 -right-39 size-[420px] rounded-full bg-brand-primary/10 blur-1xl" />
          <div className="absolute -bottom-0 -left-40 size-[520px] rounded-full bg-brand-primary/10 blur-1xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              {/* <div className="inline-flex items-center gap-2 rounded-full bg-brand-card/60 px-4 py-2 text-sm text-neutral-800">
                <span className="inline-block size-2 rounded-full bg-brand-primary" />
                Now live in Cameroon
              </div> */}
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl text-neutral-900 tracking-tight">
                Every student deserves a brilliant tutor.
              </h1>
              <p className="mt-5 text-lg sm:text-xl text-neutral-700 leading-relaxed max-w-2xl">
                Niel Academy gives African learners personalised AI tutoring aligned to their exact curriculum, so
                no student gets left behind in a crowded classroom.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a href={site.playStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
                  <img src="/images/getOnPlayStore.svg" alt="Get it on Google Play" className="h-20" />
                </a>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:text-neutral-950 transition-colors"
                >
                  Our mission <MoveRight className="size-4" />
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
                <div className="rounded-2xl bg-white/60 border border-neutral-200/70 px-4 py-4">
                  <div className="text-sm font-semibold text-neutral-900">Curriculum-aligned</div>
                  <div className="text-sm text-neutral-600 mt-1">Built for what you’re actually learning.</div>
                </div>
                <div className="rounded-2xl bg-white/60 border border-neutral-200/70 px-4 py-4">
                  <div className="text-sm font-semibold text-neutral-900">Three learning modes</div>
                  <div className="text-sm text-neutral-600 mt-1">Understanding, Guided, or Answer.</div>
                </div>
                <div className="rounded-2xl bg-white/60 border border-neutral-200/70 px-4 py-4">
                  <div className="text-sm font-semibold text-neutral-900">Personal feedback</div>
                  <div className="text-sm text-neutral-600 mt-1">Know what to fix before the exam.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden ">
                <img
                  src="/images/study-modes.png"
                  alt="Niel Academy study modes on mobile"
                  className="w-100 h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wide text-neutral-600 uppercase">How it works</div>
          <h2 className="mt-3 text-3xl sm:text-4xl text-neutral-900">
            From exam paper to understanding, in minutes
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="flex items-center gap-3">
              <div className="size-11 rounded-2xl bg-brand-card grid place-items-center text-neutral-900">
                <FileText className="size-5" />
              </div>
              <div className="text-lg font-semibold text-neutral-900">Pick your paper</div>
            </div>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Browse official past papers from the Cameroon GCE board, organised by subject, year, and level.
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="flex items-center gap-3">
              <div className="size-11 rounded-2xl bg-brand-card grid place-items-center text-neutral-900">
                <Brain className="size-5" />
              </div>
              <div className="text-lg font-semibold text-neutral-900">Choose your mode</div>
            </div>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Work through questions in Understanding, Guided, or Answer mode, depending on how you want to learn
              that day.
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="flex items-center gap-3">
              <div className="size-11 rounded-2xl bg-brand-card grid place-items-center text-neutral-900">
                <LineChart className="size-5" />
              </div>
              <div className="text-lg font-semibold text-neutral-900">Get personalised feedback</div>
            </div>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              After each session, Niel reviews your performance and tells you what to strengthen before your exam.
            </p>
          </div>
        </div>
      </section>

      {/* Learning modes */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wide text-neutral-600 uppercase">Learning modes</div>
          <h2 className="mt-3 text-3xl sm:text-4xl text-neutral-900">One app, three ways to learn</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="rounded-3xl border border-neutral-200/70 bg-white/70 p-7">
            <div className="inline-flex items-center rounded-full bg-brand-background px-3 py-1 text-xs font-semibold text-neutral-800">
              Understanding Mode
            </div>
            <h3 className="mt-4 text-xl text-neutral-900">Build problem-solving skills</h3>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Niel guides you to the answer by asking the right questions instead of just giving it to you. You’ll
              understand the concept, not just the result.
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200/70 bg-white/70 p-7">
            <div className="inline-flex items-center rounded-full bg-brand-card px-3 py-1 text-xs font-semibold text-neutral-800">
              Guided Mode
            </div>
            <h3 className="mt-4 text-xl text-neutral-900">Step-by-step with explanations</h3>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              When you’re stuck, Niel breaks down the question into clear, manageable steps with explanations you
              can learn from.
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200/70 bg-white/70 p-7">
            <div className="inline-flex items-center rounded-full bg-brand-primary/15 px-3 py-1 text-xs font-semibold text-neutral-800">
              Answer Mode
            </div>
            <h3 className="mt-4 text-xl text-neutral-900">Get a quick answer</h3>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Sometimes you just need the answer to keep your momentum going. Answer mode gives it instantly, with
              context.
            </p>
          </div>
        </div>
      </section>

      {/* Founder quote */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        <div className="rounded-3xl bg-brand-background/60 ">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-2xl bg-white/80 border border-neutral-200 grid place-items-center text-neutral-900 shrink-0">
              <MessageSquareQuote className="size-5" />
            </div>
            <div>
              <p className="text-2xl sm:text-3xl text-neutral-900 leading-snug font-serif font-light">
                “I built the platform I wish I had — a curriculum-aligned AI tutor designed for Cameroonian and
                African students.”
              </p>
              <p className="mt-4 text-neutral-700">— Othniel Che, Founder · Niel Academy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-3xl bg-neutral-950 text-white overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none">
            {/* <div className="absolute -top-24 -right-24 size-[360px] rounded-full bg-brand-primary/12 blur-2xl" />
            <div className="absolute -bottom-24 -left-24 size-[360px] rounded-full bg-brand-primary/10 blur-2xl" /> */}
          </div>
          <div className="relative p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="text-xs font-semibold tracking-wide text-white/70 uppercase">Available now</div>
              <h2 className="mt-3 text-3xl sm:text-4xl">Start learning for free today</h2>
              <p className="mt-4 text-white/80 leading-relaxed max-w-2xl">
                Download Niel Academy on Google Play and study with a tutor that follows your curriculum.
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <a href={site.playStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
                <img src="/images/getOnPlayStore.svg" alt="Get it on Google Play" className="h-20" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
