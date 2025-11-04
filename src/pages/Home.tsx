import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BookOpen, DollarSign, Lightbulb, Smartphone, Sparkles, MapPin } from "lucide-react";

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
        <div className="text-center md:flex-row lg:flex-row flex-col mb-12 min-h-[400px] flex rounded-4xl bg-brand-background justify-center">
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
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* What Makes Us Different */}
        <h2 className="md:text-5xl md:w-1/2 font-semibold text-neutral-900 mb-6 mt-8 font-roboto-semibold">
          What Makes <span className="font-light font-serif">Niel Academy</span> Different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-brand-card border-brand-card">
            <CardHeader>
              <div className="w-10 h-10 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-neutral-800" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-800 text-lg font-serif font-light leading-relaxed">
                A growing content library dedicated to Cameroonian exams, starting with the GCE
              </p>
            </CardContent>
          </Card>

          <Card className="bg-brand-card border-brand-card">
            <CardHeader>
              <div className="w-10 h-10 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-neutral-800" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-800 text-lg font-serif font-light leading-relaxed">
                Free access to past papers and notes for all students
              </p>
            </CardContent>
          </Card>

          <Card className="bg-brand-card border-brand-card">
            <CardHeader>
              <div className="w-10 h-10 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-neutral-800" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-800 text-lg font-serif font-light leading-relaxed">
                An intelligent study assistant that understands the entire library
              </p>
            </CardContent>
          </Card>

          <Card className="bg-brand-card">
            <CardHeader>
              <div className="w-10 h-10 flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-neutral-800" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-800 text-lg font-serif font-light leading-relaxed">
                Offline access for core content
              </p>
            </CardContent>
          </Card>

          <Card className="bg-brand-card border-brand-card">
            <CardHeader>
              <div className="w-10 h-10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-neutral-800" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-800 text-lg font-serif font-light leading-relaxed">
                A focus on clarity, simplicity and a high quality learning experience
              </p>
            </CardContent>
          </Card>

          <Card className="bg-brand-card border-brand-card">
            <CardHeader>
              <div className="w-10 h-10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-neutral-800" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-800 text-lg font-serif font-light leading-relaxed">
                Built specifically for the realities of local students, not adapted from foreign syllabuses
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
