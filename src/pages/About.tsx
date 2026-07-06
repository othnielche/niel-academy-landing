import { site } from "@/lib/site";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();
  
  return (
    <div className="w-full">
      {/* Hero */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-neutral-900">
              {t('about.title')}
            </h1>
            <p className="mt-5 text-neutral-700 text-lg leading-relaxed">
              {t('about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="mx-auto max-w-7xl px-4 pt-2 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        <h2 className="text-3xl sm:text-4xl text-neutral-900">{t('about.problem.title')}</h2>
        <div className="mt-5 text-neutral-700 leading-relaxed max-w-3xl">
          {t('about.problem.description')}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-2xl bg-neutral-950 text-white p-6 border border-white/10">
            <div className="text-4xl font-semibold tracking-tight">{t('about.problem.stats.teachers.number')}</div>
            <p className="mt-2 text-white/80 leading-relaxed">
              {t('about.problem.stats.teachers.description')}{" "}
              <span className="text-white/60">{t('about.problem.stats.teachers.source')}</span>
            </p>
          </div>

          <div className="rounded-2xl bg-neutral-950 text-white p-6 border border-white/10">
            <div className="text-4xl font-semibold tracking-tight">{t('about.problem.stats.ratio.number')}</div>
            <p className="mt-2 text-white/80 leading-relaxed">
              {t('about.problem.stats.ratio.description')}{" "}
              <span className="text-white/60">{t('about.problem.stats.ratio.source')}</span>
            </p>
          </div>

          <div className="rounded-2xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="text-4xl font-semibold tracking-tight text-neutral-900">{t('about.problem.stats.classSize.number')}</div>
            <p className="mt-2 text-neutral-700 leading-relaxed">
              {t('about.problem.stats.classSize.description')}{" "}
              <span className="text-neutral-600">{t('about.problem.stats.classSize.source')}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story - Enhanced */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl text-neutral-900">{t('about.founder.title')}</h2>
        </div>

        <div className="mt-10 rounded-3xl bg-white/70 border border-neutral-200/70 p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <div className="text-xl text-neutral-900">Othniel Che</div>
              <div className="mt-1 text-sm text-neutral-600 font-semibold">Founder & Software Engineer</div>
              <div className="mt-2 text-sm text-neutral-600">Mutengene, Cameroon</div>
              <a href={`mailto:${site.emails.founderWork}`} className="mt-4 inline-flex text-sm text-neutral-700 hover:text-neutral-900 hover:underline transition-colors">
                {site.emails.founderWork}
              </a>
            </div>
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-700 leading-relaxed">
                  {t('about.founder.story')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Enhanced */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-8 lg:p-12">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl text-neutral-900">{t('about.mission.title')}</h2>
            <p className="mt-5 text-lg text-neutral-700 leading-relaxed">
              {t('about.mission.description')}
            </p>
            <p className="mt-5 text-neutral-700 leading-relaxed">
              {t('about.mission.approach')}
            </p>
            
            {/* Vision Statement */}
            <div className="mt-8 p-6 rounded-2xl bg-white/80 border border-neutral-200/50">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Our Vision</h3>
              <p className="text-neutral-700 leading-relaxed">
                {t('about.founder.vision')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning as EdTech Company */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl text-neutral-900">Building education infrastructure for Africa</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="text-lg text-neutral-900">Mobile penetration rising</div>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Smartphones reach students in remote areas where traditional tutoring infrastructure cannot.
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="text-lg text-neutral-900">AI enables scale</div>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Curriculum-specific AI tutoring can reach thousands of students simultaneously at affordable cost.
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="text-lg text-neutral-900">Teacher shortage crisis</div>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              UNESCO data shows the gap between teacher supply and demand is widening across Sub-Saharan Africa.
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="text-lg text-neutral-900">Curriculum specificity matters</div>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Generic AI tools miss the mark. Students need tutoring aligned to their actual examination systems.
            </p>
          </div>
        </div>
      </section>

      {/* Growth Potential */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl text-neutral-900">Regional expansion roadmap</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-3xl bg-neutral-950 text-white p-7">
            <h3 className="text-xl">Prove the model</h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Master GCE curriculum alignment, validate AI tutoring effectiveness, and build sustainable unit economics in our home market.
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-7">
            <h3 className="text-xl text-neutral-900">Scale across WAEC countries</h3>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Expand to Nigeria, Ghana, Sierra Leone, and other WAEC examination systems with similar curriculum structures.
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-7">
            <h3 className="text-xl text-neutral-900">French education systems</h3>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Adapt our platform for Baccalauréat and other French-based curricula across Central and West Africa.
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-7">
            <h3 className="text-xl text-neutral-900">Pan-African platform</h3>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Become the curriculum-aligned AI tutoring infrastructure for secondary education across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership & Investment */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl text-neutral-900">Building the future of African education</h2>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            We are building education technology infrastructure with the potential to impact millions of students. We seek partners who share this vision.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="text-lg text-neutral-900">Seed funding partners</div>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Scale curriculum development, expand technical infrastructure, and accelerate market penetration.
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="text-lg text-neutral-900">Education institutions</div>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Collaborate with exam boards, schools, and universities to ensure curriculum accuracy and institutional adoption.
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="text-lg text-neutral-900">Development organizations</div>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Partner with NGOs and multilateral organizations to expand access in underserved communities.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-3xl bg-neutral-950 text-white p-10 lg:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl">Ready to transform African education?</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              Whether you are an investor, educator, or organization committed to educational equity, let's discuss how we can work together.
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