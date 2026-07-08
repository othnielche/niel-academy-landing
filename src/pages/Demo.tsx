import { Play, Brain, FileCheck, Target, LineChart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { site } from '@/lib/site';

export function Demo() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      {/* Hero */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-neutral-900 tracking-tight">
              {t('demo.title')}
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-neutral-700 leading-relaxed">
              {t('demo.description')}
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
                <p className="text-neutral-600 text-sm">{t('demo.videos.embedPlaceholder')}</p>
                <p className="text-neutral-500 text-xs mt-1">{t('demo.videos.aiTutoring.label')}</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Brain className="size-5 text-neutral-900" />
                <h3 className="text-xl font-semibold text-neutral-900">{t('demo.videos.aiTutoring.title')}</h3>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                {t('demo.videos.aiTutoring.description')}
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
                <p className="text-neutral-600 text-sm">{t('demo.videos.embedPlaceholder')}</p>
                <p className="text-neutral-500 text-xs mt-1">{t('demo.videos.understandingMode.label')}</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Target className="size-5 text-neutral-900" />
                <h3 className="text-xl font-semibold text-neutral-900">{t('demo.videos.understandingMode.title')}</h3>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                {t('demo.videos.understandingMode.description')}
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
                <p className="text-neutral-600 text-sm">{t('demo.videos.embedPlaceholder')}</p>
                <p className="text-neutral-500 text-xs mt-1">{t('demo.videos.guidedLearning.label')}</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <LineChart className="size-5 text-neutral-900" />
                <h3 className="text-xl font-semibold text-neutral-900">{t('demo.videos.guidedLearning.title')}</h3>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                {t('demo.videos.guidedLearning.description')}
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
                <p className="text-neutral-600 text-sm">{t('demo.videos.embedPlaceholder')}</p>
                <p className="text-neutral-500 text-xs mt-1">{t('demo.videos.grading.label')}</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <FileCheck className="size-5 text-neutral-900" />
                <h3 className="text-xl font-semibold text-neutral-900">{t('demo.videos.grading.title')}</h3>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                {t('demo.videos.grading.description')}
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
              {t('demo.features.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="size-10 rounded-xl bg-white/80 border border-neutral-200 grid place-items-center shrink-0">
                  <Brain className="size-5 text-neutral-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">{t('demo.features.curriculumAlignment.title')}</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    {t('demo.features.curriculumAlignment.description')}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="size-10 rounded-xl bg-white/80 border border-neutral-200 grid place-items-center shrink-0">
                  <FileCheck className="size-5 text-neutral-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">{t('demo.features.markSchemes.title')}</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    {t('demo.features.markSchemes.description')}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="size-10 rounded-xl bg-white/80 border border-neutral-200 grid place-items-center shrink-0">
                  <Target className="size-5 text-neutral-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">{t('demo.features.adaptiveLearning.title')}</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    {t('demo.features.adaptiveLearning.description')}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="size-10 rounded-xl bg-white/80 border border-neutral-200 grid place-items-center shrink-0">
                  <LineChart className="size-5 text-neutral-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">{t('demo.features.progressTracking.title')}</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    {t('demo.features.progressTracking.description')}
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
            <h2 className="text-3xl sm:text-4xl">{t('demo.cta.title')}</h2>
            <p className="mt-4 text-white/80 leading-relaxed max-w-2xl mx-auto">
              {t('demo.cta.description')}
            </p>
            <div className="mt-8">
              <a 
                href={site.playStoreUrl}
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
