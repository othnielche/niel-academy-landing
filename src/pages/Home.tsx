import { Card } from '@/components/ui/card';
import { Button } from '../components/ui/button';

export function Home() {
  return (
    <div className="flex-1 w-full h-full">
      {/* Hero Section - flat, two-column */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-20 pt-12">
        <div className="grid  gap-12 items-center">
          <div>
            <h1 className="lg:text-8xl md:text-7xl sm:text-6xl text-neutral-900 mb-6 leading-tight text-center font-roboto-bold">
            Built for <span className="underline decoration-brand-primary decoration-5 underline-offset-8 font-light font-serif">Cameroonian Students.</span> Powered by <span className="underline decoration-brand-primary decoration-5 underline-offset-8 font-light font-serif">AI</span>.
            <p className="text-neutral-700 text-lg mb-8  leading-relaxed text-center font-serif font-stretch-condensed font-light">
              Comprehensive examination papers, intelligent AI tutoring, and personalized learning experiences. 
              Built for students who demand excellence.
            </p>
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <img src="/images/interactive-chat-screenshot3.png" alt="Interactive Chat" className="object-contain rounded-4xl" />
      </section>

      {/* Core Features - minimalistic cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center lg:flex-row flex-col mb-12 min-h-[400px] flex rounded-4xl bg-brand-background justify-center">
          <div className="text-neutral-700 text-lg max-w-3xl mx-auto font-serif lg:w-1/2 w-full flex  p-6">
            <div>
              <h3 className="lg:text-5xl text-3xl font-bold text-neutral-900 mb-4 text-left font-roboto-semibold">Large content library available for free</h3>
              <p className="text-neutral-600 lg:text-2xl text-lg leading-relaxed text-left font-serif font-regular">
                Access thousands of past examination papers from various educational boards, 
                organized by country, institution, and academic year. Find exactly what you need 
                to excel in your studies.
              </p>
            </div>
          </div>
          <div className="font-bold text-neutral-900 mb-4 lg:w-1/2 w-full min-h-[400px] flex flex-col justify-center p-6">
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

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-neutral-100 p-8 rounded-lg">
            <div className="w-12 h-12 bg-brand-primary rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">Comprehensive Paper Library</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Access past examination papers from various educational boards, organized by country, 
              institution, and academic year.
            </p>
          </div>

          <div className="bg-teal-50 p-8 rounded-lg">
            <div className="w-12 h-12 bg-teal-600 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">AI-Powered Tutoring</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Meet Niel, your intelligent study companion with context-aware learning, 
              LaTeX support, and subject-specific expertise.
            </p>
          </div>

          <div className="bg-purple-50 p-8 rounded-lg">
            <div className="w-12 h-12 bg-purple-600 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">Niel Academy: Learn to build with AI</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Cross-platform mobile experience with offline capabilities, 
              progress tracking, and personalized learning paths.
            </p>
          </div>
        </div> */}
      </section>
    </div>
  );
}
