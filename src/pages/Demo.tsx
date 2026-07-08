import { Brain, FileCheck, Target, LineChart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { YouTubeVideoGrid, type YouTubeVideo } from '@/components/YouTubeVideoGrid';
import { site } from '@/lib/site';

export function Demo() {
  const { t } = useTranslation();

  const demoVideos: YouTubeVideo[] = [
    {
      id: 'practice',
      youtubeUrl: 'https://youtube.com/shorts/pRScXAdiXic?feature=share',
      label: t('demo.videos.practice.label'),
      title: t('demo.videos.practice.title'),
      description: t('demo.videos.practice.description'),
      icon: Target,
    },
    // {
    //   id: 'ai-tutoring',
    //   youtubeUrl: '',
    //   label: t('demo.videos.aiTutoring.label'),
    //   title: t('demo.videos.aiTutoring.title'),
    //   description: t('demo.videos.aiTutoring.description'),
    //   icon: Brain,
    // },
    // {
    //   id: 'understanding-mode',
    //   youtubeUrl: '',
    //   label: t('demo.videos.understandingMode.label'),
    //   title: t('demo.videos.understandingMode.title'),
    //   description: t('demo.videos.understandingMode.description'),
    //   icon: Target,
    // },
    // {
    //   id: 'guided-learning',
    //   youtubeUrl: '',
    //   label: t('demo.videos.guidedLearning.label'),
    //   title: t('demo.videos.guidedLearning.title'),
    //   description: t('demo.videos.guidedLearning.description'),
    //   icon: LineChart,
    // },
    // {
    //   id: 'grading',
    //   youtubeUrl: '',
    //   label: t('demo.videos.grading.label'),
    //   title: t('demo.videos.grading.title'),
    //   description: t('demo.videos.grading.description'),
    //   icon: FileCheck,
    // },
  ];

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
        <YouTubeVideoGrid
          videos={demoVideos}
          embedPlaceholder={t('demo.videos.embedPlaceholder')}
        />
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
