import { site } from "@/lib/site";

export function About() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-0 -left-28 size-[300px] rounded-full bg-brand-primary/8 blur-1xl" />
          <div className="absolute -bottom-0 -right-28 size-[300PX] rounded-full bg-brand-primary/6 blur-1xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wide text-neutral-600 uppercase">Our Mission & Vision</div>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl text-neutral-900">
              Quality learning should be within reach.
            </h1>
            <p className="mt-5 text-neutral-700 text-lg leading-relaxed">
              Across Sub-Saharan Africa, many classrooms are large and teachers are stretched thin. Niel Academy is
              building curriculum-aligned support that students can use day-to-day, starting in Cameroon and
              expanding over time.
            </p>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="mx-auto max-w-7xl px-4 pt-2 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        <div className="text-xs font-semibold tracking-wide text-neutral-600 uppercase">The problem</div>
        <h2 className="mt-3 text-3xl sm:text-4xl text-neutral-900">A gap we can close</h2>
        <div className="mt-5 text-neutral-700 leading-relaxed max-w-3xl">
          Teacher shortages and large class sizes make it hard to give every learner enough attention. UNESCO
          highlights the scale of the challenge.
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-2xl bg-neutral-950 text-white p-6 border border-white/10">
            <div className="text-4xl font-semibold tracking-tight">15M</div>
            <p className="mt-2 text-white/80 leading-relaxed">
              More teachers needed across Sub-Saharan Africa by 2030 to meet quality education goals{" "}
              <span className="text-white/60">(UNESCO)</span>
            </p>
          </div>

          <div className="rounded-2xl bg-neutral-950 text-white p-6 border border-white/10">
            <div className="text-4xl font-semibold tracking-tight">58:1</div>
            <p className="mt-2 text-white/80 leading-relaxed">
              Average pupil-to-trained-teacher ratio at primary level across the region{" "}
              <span className="text-white/60">(UNESCO)</span>
            </p>
          </div>

          <div className="rounded-2xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="text-4xl font-semibold tracking-tight text-neutral-900">85:1</div>
            <p className="mt-2 text-neutral-700 leading-relaxed">
              Students per teacher in some Cameroonian classrooms, which makes individual support very difficult
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-white/70 border border-neutral-200/70 p-6 md:p-7">
          <div className="text-lg text-neutral-900">What this means in practice</div>
          <ul className="mt-3 space-y-2 text-neutral-700 leading-relaxed">
            <li>Less time for individual questions and feedback.</li>
            <li>Students who fall behind can stay behind for longer.</li>
            <li>Families often have to find extra support outside school.</li>
          </ul>
        </div>
      </section>

      {/* Founder */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wide text-neutral-600 uppercase">The founder</div>
          <h2 className="mt-3 text-3xl sm:text-4xl text-neutral-900">Built from lived experience</h2>
        </div>

        <div className="mt-10 rounded-3xl bg-white/70 border border-neutral-200/70 p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <div className="text-xl text-neutral-900">Othniel Che</div>
            <div className="mt-1 text-sm text-brand-primary font-semibold">Founder & Software Engineer</div>
            <a href={`mailto:${site.emails.founderPersonal}`} className="mt-4 inline-flex text-sm text-neutral-700 hover:text-neutral-900 hover:underline transition-colors">
              {site.emails.founderWork}
            </a>
          </div>
          <div className="lg:col-span-8">
            <p className="text-neutral-900 text-lg leading-relaxed font-serif font-light">
              “As a secondary school student in Cameroon, I used platforms like Khan Academy to study after
              school. While helpful, these tools weren&apos;t built for our curriculum, exams or context. Years
              later, I watched my younger sister face the same challenges. Very little had changed.”
            </p>
            <p className="mt-5 text-neutral-700 leading-relaxed">
              As a software engineer already working with AI, Othniel decided to build the platform he wished he
              had. Niel Academy is a curriculum-aligned AI tutor designed specifically for Cameroonian and African
              students, built with pedagogy and affordability at its core.
            </p>
          </div>
        </div>
      </section>

      {/* Traction (without usage metrics) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        <div className="rounded-3xl bg-neutral-950 text-white p-10 lg:p-14 relative overflow-hidden">
          <div className="relative max-w-3xl">
            <div className="text-xs font-semibold tracking-wide text-white/70 uppercase">Traction</div>
            <h2 className="mt-3 text-3xl sm:text-4xl">Early proof it’s working</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              Already in use by students preparing for exams, with feedback guiding what we build next.
            </p>
            <ul className="mt-6 space-y-2 text-white/85">
              <li>Live in Cameroon</li>
              <li>Built around official past papers</li>
              <li>Students using it for consistent exam prep</li>
              <li>Content coverage expanding over time</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wide text-neutral-600 uppercase">Why now</div>
          <h2 className="mt-3 text-3xl sm:text-4xl text-neutral-900">Why this works now</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="text-lg text-neutral-900">Mobile access is rising</div>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Smartphones open a channel to reach learners who were previously hard to support.
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="text-lg text-neutral-900">AI makes tutoring affordable</div>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Personalised tutoring at scale used to be impossible. Now it can be done responsibly.
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="text-lg text-neutral-900">Teacher gaps are widening</div>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              The demand for quality support is outpacing the supply of trained teachers.
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="text-lg text-neutral-900">Students already use AI</div>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Learners turn to generic tools that aren’t curriculum-aligned. We’re building a better alternative.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wide text-neutral-600 uppercase">Roadmap</div>
          <h2 className="mt-3 text-3xl sm:text-4xl text-neutral-900">Where we’re going</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-7">
            <div className="text-xs font-semibold tracking-wide text-neutral-600 uppercase">Now</div>
            <h3 className="mt-2 text-xl text-neutral-900">Exam prep for Cameroon GCE</h3>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Live and growing. Students practice official past papers with AI tutoring across core subjects.
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-7">
            <div className="text-xs font-semibold tracking-wide text-neutral-600 uppercase">Next</div>
            <h3 className="mt-2 text-xl text-neutral-900">Expand coverage</h3>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Add more subjects, languages, and national exam boards, including Francophone learners.
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-7">
            <div className="text-xs font-semibold tracking-wide text-neutral-600 uppercase">Future</div>
            <h3 className="mt-2 text-xl text-neutral-900">A full learning companion</h3>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Move beyond exam practice to support the full school curriculum for daily learning, not just revision.
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-7">
            <div className="text-xs font-semibold tracking-wide text-neutral-600 uppercase">Vision</div>
            <h3 className="mt-2 text-xl text-neutral-900">Partnerships at scale</h3>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Work with exam boards, NGOs, schools, and governments to expand access sustainably.
            </p>
          </div>
        </div>
      </section>

      {/* What we’re seeking */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wide text-neutral-600 uppercase">For partners</div>
          <h2 className="mt-3 text-3xl sm:text-4xl text-neutral-900">What we’re seeking</h2>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            We’re looking for partners who share the belief that every African student deserves a brilliant tutor.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="text-lg text-neutral-900">Seed funding</div>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Scale content acquisition, curriculum coverage, and infrastructure.
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="text-lg text-neutral-900">Regional expansion</div>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Support expansion into new countries, exam boards, and languages.
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="text-lg text-neutral-900">Education partnerships</div>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Work with NGOs, schools, exam boards, and telcos to broaden access.
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="text-lg text-neutral-900">Responsible AI mentorship</div>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Guidance on scaling AI ethically and effectively in low-resource contexts.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-3xl bg-neutral-950 text-white p-10 lg:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wide text-white/70 uppercase">Get in touch</div>
            <h2 className="mt-3 text-3xl sm:text-4xl">Let’s build this together</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              Whether you’re an investor, NGO, school, or you just believe in the mission, we’d love to hear from
              you.
            </p>
          </div>
          <a
            href={`mailto:${site.emails.founderWork}`}
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-white hover:opacity-95 transition-opacity text-black" 
          >
            Email us
          </a>
        </div>
      </section>
    </div>
  );
}
