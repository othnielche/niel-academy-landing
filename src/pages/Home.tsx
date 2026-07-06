import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Brain,
  FileText,
  MessageSquareQuote,
  MoveRight,
  Play,
  Check,
  X,
  Target,
  FileCheck,
} from "lucide-react";
import { site } from "@/lib/site";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ComparisonRow = {
  feature: string;
  general: boolean;
  niel: boolean;
};

function ComparisonIcon({ supported }: { supported: boolean }) {
  if (supported) {
    return <Check className="size-5 text-neutral-900" aria-hidden="true" />;
  }

  return <X className="size-5 text-neutral-400" aria-hidden="true" />;
}

export function Home() {
  const { t } = useTranslation();
  const comparisonRows = t("whyNielAcademy.comparison.rows", {
    returnObjects: true,
  }) as ComparisonRow[];

  return (
    <div className="w-full">
      {/* Hero */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl text-neutral-900 tracking-tight">
                {t('hero.headline')}
              </h1>
              <p className="mt-5 text-lg sm:text-xl text-neutral-700 leading-relaxed max-w-2xl">
                {t('hero.subheading')}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a href={site.playStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
                  <img src="/images/getOnPlayStore.svg" alt="Get it on Google Play" className="h-20" />
                </a>
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:text-neutral-950 transition-colors"
                >
                  <Play className="size-4" />
                  {t('hero.watchDemo')}
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:text-neutral-950 transition-colors"
                >
                  {t('hero.ourMission')} <MoveRight className="size-4" />
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
                <div className="rounded-2xl bg-white/60 border border-neutral-200/70 px-4 py-4">
                  <div className="text-sm font-semibold text-neutral-900">{t('hero.features.curriculumAligned.title')}</div>
                  <div className="text-sm text-neutral-600 mt-1">{t('hero.features.curriculumAligned.description')}</div>
                </div>
                <div className="rounded-2xl bg-white/60 border border-neutral-200/70 px-4 py-4">
                  <div className="text-sm font-semibold text-neutral-900">{t('hero.features.threeModes.title')}</div>
                  <div className="text-sm text-neutral-600 mt-1">{t('hero.features.threeModes.description')}</div>
                </div>
                <div className="rounded-2xl bg-white/60 border border-neutral-200/70 px-4 py-4">
                  <div className="text-sm font-semibold text-neutral-900">{t('hero.features.personalFeedback.title')}</div>
                  <div className="text-sm text-neutral-600 mt-1">{t('hero.features.personalFeedback.description')}</div>
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
          <h2 className="text-3xl sm:text-4xl text-neutral-900">
            {t('howItWorks.title')}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="flex items-center gap-3">
              <div className="size-11 rounded-2xl bg-brand-card grid place-items-center text-neutral-900">
                <FileText className="size-5" />
              </div>
              <div className="text-lg font-semibold text-neutral-900">{t('howItWorks.steps.pickPaper.title')}</div>
            </div>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              {t('howItWorks.steps.pickPaper.description')}
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="flex items-center gap-3">
              <div className="size-11 rounded-2xl bg-brand-card grid place-items-center text-neutral-900">
                <Brain className="size-5" />
              </div>
              <div className="text-lg font-semibold text-neutral-900">{t('howItWorks.steps.chooseMode.title')}</div>
            </div>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              {t('howItWorks.steps.chooseMode.description')}
            </p>
          </div>
          <div className="rounded-3xl bg-white/70 border border-neutral-200/70 p-6">
            <div className="flex items-center gap-3">
              <div className="size-11 rounded-2xl bg-brand-card grid place-items-center text-neutral-900">
                <FileCheck className="size-5" />
              </div>
              <div className="text-lg font-semibold text-neutral-900">{t('howItWorks.steps.getFeedback.title')}</div>
            </div>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              {t('howItWorks.steps.getFeedback.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Why Niel Academy - Comparison */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl text-neutral-900">{t('whyNielAcademy.title')}</h2>
          <p className="mt-5 text-neutral-700 leading-relaxed">
            {t('whyNielAcademy.description')}
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-neutral-200/70 bg-white/70 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[50%]">
                  {t("whyNielAcademy.comparison.featureColumn")}
                </TableHead>
                <TableHead className="text-center">
                  {t("whyNielAcademy.comparison.generalColumn")}
                </TableHead>
                <TableHead className="text-center bg-brand-card/40">
                  {t("whyNielAcademy.comparison.nielColumn")}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonRows.map((row) => (
                <TableRow key={row.feature}>
                  <TableCell className="font-medium text-neutral-900">
                    {row.feature}
                  </TableCell>
                  <TableCell className="text-center">
                    <span className="inline-flex justify-center" aria-label={row.general ? "Yes" : "No"}>
                      <ComparisonIcon supported={row.general} />
                    </span>
                  </TableCell>
                  <TableCell className="text-center bg-brand-card/20">
                    <span className="inline-flex justify-center" aria-label={row.niel ? "Yes" : "No"}>
                      <ComparisonIcon supported={row.niel} />
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Grading Engine Workflow */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl text-neutral-900">{t('gradingEngine.title')}</h2>
          <p className="mt-5 text-neutral-700 leading-relaxed">
            {t('gradingEngine.description')}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="text-center">
            <div className="size-16 rounded-2xl bg-brand-card mx-auto grid place-items-center text-neutral-900 mb-4">
              <FileText className="size-7" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">{t('gradingEngine.workflow.step1.title')}</h3>
            <p className="text-neutral-700 text-sm leading-relaxed">{t('gradingEngine.workflow.step1.description')}</p>
          </div>

          <div className="text-center">
            <div className="size-16 rounded-2xl bg-brand-card mx-auto grid place-items-center text-neutral-900 mb-4">
              <Brain className="size-7" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">{t('gradingEngine.workflow.step2.title')}</h3>
            <p className="text-neutral-700 text-sm leading-relaxed">{t('gradingEngine.workflow.step2.description')}</p>
          </div>

          <div className="text-center">
            <div className="size-16 rounded-2xl bg-brand-card mx-auto grid place-items-center text-neutral-900 mb-4">
              <FileCheck className="size-7" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">{t('gradingEngine.workflow.step3.title')}</h3>
            <p className="text-neutral-700 text-sm leading-relaxed">{t('gradingEngine.workflow.step3.description')}</p>
          </div>

          <div className="text-center">
            <div className="size-16 rounded-2xl bg-brand-card mx-auto grid place-items-center text-neutral-900 mb-4">
              <Target className="size-7" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">{t('gradingEngine.workflow.step4.title')}</h3>
            <p className="text-neutral-700 text-sm leading-relaxed">{t('gradingEngine.workflow.step4.description')}</p>
          </div>
        </div>
      </section>

      {/* Learning modes */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl text-neutral-900">{t('learningModes.title')}</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="rounded-3xl border border-neutral-200/70 bg-white/70 p-7">
            <div className="inline-flex items-center rounded-full bg-brand-background px-3 py-1 text-xs font-semibold text-neutral-800">
              {t('learningModes.understanding.label')}
            </div>
            <h3 className="mt-4 text-xl text-neutral-900">{t('learningModes.understanding.title')}</h3>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              {t('learningModes.understanding.description')}
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200/70 bg-white/70 p-7">
            <div className="inline-flex items-center rounded-full bg-brand-card px-3 py-1 text-xs font-semibold text-neutral-800">
              {t('learningModes.guided.label')}
            </div>
            <h3 className="mt-4 text-xl text-neutral-900">{t('learningModes.guided.title')}</h3>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              {t('learningModes.guided.description')}
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200/70 bg-white/70 p-7">
            <div className="inline-flex items-center rounded-full bg-brand-card px-3 py-1 text-xs font-semibold text-neutral-800">
              {t('learningModes.answer.label')}
            </div>
            <h3 className="mt-4 text-xl text-neutral-900">{t('learningModes.answer.title')}</h3>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              {t('learningModes.answer.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Founder quote */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        <div className="rounded-3xl bg-brand-background/60 p-8">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-2xl bg-white/80 border border-neutral-200 grid place-items-center text-neutral-900 shrink-0">
              <MessageSquareQuote className="size-5" />
            </div>
            <div>
              <p className="text-2xl sm:text-3xl text-neutral-900 leading-snug font-serif font-light">
                "{t('founder.quote')}"
              </p>
              <p className="mt-4 text-neutral-700">{t('founder.attribution')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-3xl bg-neutral-950 text-white overflow-hidden relative">
          <div className="relative p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-3xl sm:text-4xl">{t('cta.title')}</h2>
              <p className="mt-4 text-white/80 leading-relaxed max-w-2xl">
                {t('cta.description')}
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