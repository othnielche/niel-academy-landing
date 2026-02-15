export function About() {
  return (
    <div className="flex-1 w-full h-full">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Header */}
          <h1 className="text-4xl font-bold text-neutral-900 mb-2 font-roboto-bold text-center">
            About <span className="font-light font-serif">Niel Academy</span>
          </h1>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6 font-roboto-semibold text-center">
            Our Mission
          </h2>

          {/* Mission statement */}
          <p className="text-neutral-700 text-lg leading-relaxed mb-8 font-serif font-light text-center max-w-3xl mx-auto">
            Helping African students learn how to think, not just what to memorize.
          </p>

          <p className="text-neutral-700 text-lg leading-relaxed mb-12 font-serif font-light text-center max-w-3xl mx-auto">
            Niel Academy is building a mobile-first learning platform for students preparing for national exams. Past papers, notes, and study tools are designed for deeper understanding. Cameroon comes first (GCE and TVEE), with plans to expand elsewhere on the continent.
          </p>

          {/* The Problem We're Solving */}
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4 mt-12 font-roboto-semibold">
            The Problem We&apos;re Solving
          </h2>
          <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-serif font-light">
            In many African schools, students run into a few stubborn hurdles.
          </p>
          <ul className="space-y-4 mb-6">
            <li>
              <span className="font-roboto-semibold text-neutral-900">Materials are scattered</span>
              <span className="text-neutral-700 font-serif font-light"> Past papers, notes, explanations: they live in different places. Hard to track down, often inconsistent.</span>
            </li>
            <li>
              <span className="font-roboto-semibold text-neutral-900">Memorization wins over understanding</span>
              <span className="text-neutral-700 font-serif font-light"> Students copy solutions and cram. It works until the exam asks something slightly different.</span>
            </li>
            <li>
              <span className="font-roboto-semibold text-neutral-900">Global edtech doesn&apos;t match local exams</span>
              <span className="text-neutral-700 font-serif font-light"> Most platforms target foreign syllabuses. They assume fast internet and study habits that don&apos;t fit here.</span>
            </li>
          </ul>
          <p className="text-neutral-700 text-lg leading-relaxed mb-12 font-serif font-light">
            Put together, these gaps can deepen inequality and cap results. They also chip away at students&apos; belief that they can succeed.
          </p>

          {/* Our Approach */}
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4 mt-8 font-roboto-semibold">
            Our Approach
          </h2>
          <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-serif font-light">
            An exam-focused platform built for local curricula and everyday limits.
          </p>
          <ul className="space-y-4 mb-12">
            <li>
              <span className="font-roboto-semibold text-neutral-900">Free access to core materials</span>
              <p className="text-neutral-700 font-serif font-light mt-1">Every student gets past papers and notes, no payment required.</p>
            </li>
            <li>
              <span className="font-roboto-semibold text-neutral-900">Understanding comes first</span>
              <p className="text-neutral-700 font-serif font-light mt-1">Reason through the problem before the solution shows up. That can build thinking skills instead of reliance on answers.</p>
            </li>
            <li>
              <span className="font-roboto-semibold text-neutral-900">Different ways to learn</span>
              <p className="text-neutral-700 font-serif font-light mt-1">Guided help, solo practice, or full solutions; pick what fits.</p>
            </li>
            <li>
              <span className="font-roboto-semibold text-neutral-900">Built for phones and low data</span>
              <p className="text-neutral-700 font-serif font-light mt-1">When it matters, content works offline. Designed for how students actually study.</p>
            </li>
          </ul>

          {/* Why This Matters */}
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4 mt-8 font-roboto-semibold">
            Why This Matters
          </h2>
          <p className="text-neutral-700 text-lg leading-relaxed mb-4 font-serif font-light">
            When students figure out how to think, not just recite:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-neutral-700 font-serif font-light">
            <li>Grades tend to go up</li>
            <li>Confidence grows</li>
            <li>Fewer drop out</li>
            <li>The gains can last beyond one exam</li>
          </ul>
          <p className="text-neutral-700 text-lg leading-relaxed mb-12 font-serif font-light">
            Teaching students how to learn may be one of the highest-impact moves for education at scale.
          </p>

          {/* Early Traction */}
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4 mt-8 font-roboto-semibold">
            Early Traction
          </h2>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-neutral-700 font-serif font-light">
            <li>Live in Cameroon</li>
            <li>Students already using it to prep for exams</li>
            <li>Public feedback that backs the need for local tools</li>
            <li>Content library growing to match national exams</li>
          </ul>
          <p className="text-neutral-700 text-lg leading-relaxed mb-12 font-serif font-light">
            Early signs point to strong demand for tools built around local contexts instead of imported ones.
          </p>

          {/* Our Vision */}
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4 mt-8 font-roboto-semibold">
            Our Vision
          </h2>
          <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-serif font-light">
            A leading platform for exam prep and critical thinking across Africa. Cameroon first, then other national systems.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-12 text-neutral-700 font-serif font-light">
            <li>Reach millions of students</li>
            <li>Work with schools, NGOs, education programs</li>
            <li>Build systems that scale and stay affordable</li>
            <li>Support long-term gains in learning outcomes</li>
          </ul>

          {/* Partnerships & Support */}
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4 mt-8 font-roboto-semibold">
            Partnerships & Support
          </h2>
          <p className="text-neutral-700 text-lg leading-relaxed mb-4 font-serif font-light">
            Open to working with:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-neutral-700 font-serif font-light">
            <li>Grant-makers</li>
            <li>Education NGOs</li>
            <li>Fellowships and accelerators</li>
            <li>Impact investors</li>
            <li>Government and curriculum partners</li>
          </ul>
          <p className="text-neutral-700 text-lg leading-relaxed mb-8 font-serif font-light">
            Care about scalable education access and better learning outcomes? Let&apos;s talk.
          </p>

          {/* Contact Section */}
          <div className="rounded-2xl p-8 mt-12 border border-border bg-card">
            <h3 className="text-xl font-semibold text-neutral-900 mb-6 font-roboto-semibold text-left">
              Contact
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <a
                  href="mailto:cheothniel@nielacademy.com"
                  className="flex items-center space-x-3 text-neutral-700 hover:text-brand-primary transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-serif font-light">cheothniel@nielacademy.com</span>
                </a>
                <a
                  href="mailto:cheothniel@gmail.com"
                  className="flex items-center space-x-3 text-neutral-700 hover:text-brand-primary transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-serif font-light">cheothniel@gmail.com</span>
                </a>
              </div>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/company/niel-academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-neutral-700 hover:text-brand-primary transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="font-serif font-light">LinkedIn</span>
                </a>
                <a
                  href="https://x.com/nielacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-neutral-700 hover:text-brand-primary transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="font-serif font-light">X (Formerly Twitter)</span>
                </a>
                <a
                  href="https://www.instagram.com/niel_academy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-neutral-700 hover:text-brand-primary transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="font-serif font-light">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
