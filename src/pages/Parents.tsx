import { ShieldCheck, WifiOff, BookOpen, Target, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

export function Parents() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 size-[420px] rounded-full bg-brand-primary/14 blur-2xl" />
          <div className="absolute -bottom-32 -left-32 size-[520px] rounded-full bg-brand-primary/10 blur-2xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wide text-white/70 uppercase">For Parents</div>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl">Give your child the support they deserve.</h1>
            <p className="mt-5 text-white/80 text-lg leading-relaxed">
              We know private tutors are expensive and classrooms are overcrowded. Niel Academy is a trustworthy,
              affordable alternative built specifically for your child’s curriculum.
            </p>
            <div className="mt-8">
              <a href={site.playStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
                <img src="/images/getOnPlayStore.svg" alt="Get it on Google Play" className="h-20" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What Niel does */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wide text-neutral-600 uppercase">What Niel Academy does</div>
          <h2 className="mt-3 text-3xl sm:text-4xl text-neutral-900">A personal tutor in your child’s pocket</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="size-11 rounded-2xl bg-brand-card grid place-items-center text-neutral-900">
              <BookOpen className="size-5" />
            </div>
            <h3 className="mt-4 text-lg text-neutral-900">Aligned to the GCE curriculum</h3>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Content is built around official past papers so your child isn’t studying the wrong material.
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="size-11 rounded-2xl bg-brand-card grid place-items-center text-neutral-900">
              <Target className="size-5" />
            </div>
            <h3 className="mt-4 text-lg text-neutral-900">Personalised to their gaps</h3>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              After each session, Niel highlights where they struggled and what to review next.
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="size-11 rounded-2xl bg-brand-card grid place-items-center text-neutral-900">
              <Sparkles className="size-5" />
            </div>
            <h3 className="mt-4 text-lg text-neutral-900">Builds deeper understanding</h3>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Understanding Mode uses a Socratic approach so students learn to think instead of copying answers.
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="size-11 rounded-2xl bg-brand-card grid place-items-center text-neutral-900">
              <WifiOff className="size-5" />
            </div>
            <h3 className="mt-4 text-lg text-neutral-900">Works offline too</h3>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Core materials can be downloaded so inconsistent internet doesn’t interrupt studying.
            </p>
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        <div className="rounded-3xl bg-black text-white overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-28 -left-28 size-[420px] rounded-full bg-white/6 blur-2xl" />
            <div className="absolute -bottom-28 -right-28 size-[420px] rounded-full bg-black/10 blur-2xl" />
          </div>
          <div className="relative p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="text-xs font-semibold tracking-wide text-white/70 uppercase">Cost</div>
              <h2 className="mt-3 text-3xl sm:text-4xl">A fraction of traditional tutoring</h2>
              <p className="mt-4 text-white/85 leading-relaxed max-w-xl">
                Private tutors can be out of reach for many families. Niel Academy makes quality academic support
                accessible at home every day.
              </p>
              <h3 className="mt-8 text-xl">Why affordability matters</h3>
              <p className="mt-3 text-white/80 leading-relaxed">
                When support is affordable, students get consistent help instead of occasional sessions. That
                consistency is where confidence and results often improve.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white/10 border border-white/15 p-6">
                <div className="flex items-center justify-between py-3 border-b border-white/15">
                  <div className="text-white/80">Private Tutor (monthly)</div>
                  <div className="font-semibold">Often expensive</div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/15">
                  <div className="text-white/80">Other generic AI tools</div>
                  <div className="font-semibold">Not built for your exam</div>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="text-white/80">Niel Academy</div>
                  <div className="font-semibold">Affordable & localised</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concerns */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wide text-neutral-600 uppercase">Common questions</div>
          <h2 className="mt-3 text-3xl sm:text-4xl text-neutral-900">We’ve thought about your concerns</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <details className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6 group" open>
            <summary className="cursor-pointer list-none flex items-start gap-3">
              <div className="size-10 rounded-2xl bg-brand-card grid place-items-center text-neutral-900 shrink-0">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <div className="text-lg text-neutral-900">Will my child actually learn, or just copy answers?</div>
                <div className="text-sm text-neutral-600 mt-1 group-open:hidden">Read the answer</div>
              </div>
            </summary>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Understanding Mode is designed to prevent passive copying. The AI guides students to reason through
              problems, and full answers appear when explicitly requested.
            </p>
          </details>

          <details className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6 group">
            <summary className="cursor-pointer list-none flex items-start gap-3">
              <div className="size-10 rounded-2xl bg-brand-card grid place-items-center text-neutral-900 shrink-0">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <div className="text-lg text-neutral-900">Is it safe for my child to use?</div>
                <div className="text-sm text-neutral-600 mt-1 group-open:hidden">Read the answer</div>
              </div>
            </summary>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Niel Academy is strictly an educational tool. It’s tuned to stay focused on academic content and be
              appropriate and encouraging for secondary school students.
            </p>
          </details>

          <details className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6 group">
            <summary className="cursor-pointer list-none flex items-start gap-3">
              <div className="size-10 rounded-2xl bg-brand-card grid place-items-center text-neutral-900 shrink-0">
                <WifiOff className="size-5" />
              </div>
              <div>
                <div className="text-lg text-neutral-900">My child has limited internet. Will it still work?</div>
                <div className="text-sm text-neutral-600 mt-1 group-open:hidden">Read the answer</div>
              </div>
            </summary>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Yes. Core materials can be downloaded in advance and accessed offline, so studying can continue even
              when connectivity is unreliable.
            </p>
          </details>

          <details className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6 group">
            <summary className="cursor-pointer list-none flex items-start gap-3">
              <div className="size-10 rounded-2xl bg-brand-card grid place-items-center text-neutral-900 shrink-0">
                <BookOpen className="size-5" />
              </div>
              <div>
                <div className="text-lg text-neutral-900">Is it aligned to what their school is teaching?</div>
                <div className="text-sm text-neutral-600 mt-1 group-open:hidden">Read the answer</div>
              </div>
            </summary>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Yes. Content is built directly from official past papers and structured around the same syllabus
              students follow in school.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-3xl bg-brand-background/60 border border-neutral-200/70 p-10 lg:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl text-neutral-900">Ready to support your child?</h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Download Niel Academy and let your child experience personalised learning at home.
            </p>
          </div>
          <a href={site.playStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
            <img src="/images/getOnPlayStore.svg" alt="Get it on Google Play" className="h-12" />
          </a>
        </div>
      </section>
    </div>
  );
}
