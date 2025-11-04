export function About() {
  return (
    <div className="flex-1 w-full h-full">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Header */}
          <h1 className="text-4xl font-bold text-neutral-900 mb-6 font-roboto-bold text-center">
            About <span className="font-light font-serif">Niel Academy</span>
          </h1> 
          
          {/* Introduction */}
          <p className="text-neutral-700 text-lg leading-relaxed mb-8 font-serif font-light text-center max-w-3xl mx-auto">
            Niel Academy is an education platform built to give Cameroonian students reliable access to the learning materials they need, exactly when they need them. Our goal is to build the most complete content library for students preparing for national exams, beginning with the GCE and expanding to other exams over time.
          </p>

          <p className="text-neutral-700 text-lg leading-relaxed mb-12 font-serif font-light text-center max-w-3xl mx-auto">
            We want to make it simple for students to find past papers, notes and study resources in one place, supported by an intelligent assistant that understands all of the content and helps students learn more effectively.
          </p>

          {/* Why Niel Academy Was Created */}
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4 mt-12 font-roboto-semibold">
            Why Niel Academy Was Created
          </h2>
          
          <p className="text-neutral-700 text-lg leading-relaxed mb-4 font-serif font-light">
            Niel Academy was born from a clear gap in the market. Students in Cameroon struggle to access well-organized past questions, explanations and study support in a single platform. Materials are scattered, inconsistent or not easily searchable. At the same time, AI-based learning tools exist globally but none are designed for the local syllabus and exam structure.
          </p>

          <p className="text-neutral-700 text-lg leading-relaxed mb-8 font-serif font-light">
            Niel Academy brings these elements together in one unified experience. Students get access to structured content and an AI tutor built specifically around that content.
          </p>

          {/* Our Approach */}
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4 mt-8 font-roboto-semibold">
            Our Approach
          </h2>
          
          <p className="text-neutral-700 text-lg leading-relaxed mb-4 font-serif font-light">
            We believe students should not have to pay for basic access to past papers or educational materials. These resources should be available to everyone. For that reason, all content in the library is free to access.
          </p>

          <p className="text-neutral-700 text-lg leading-relaxed mb-8 font-serif font-light">
            We only charge for features that require ongoing operational costs such as advanced AI capabilities and cloud-backed chat services. This allows us to keep the core learning materials free while still sustaining the technology that powers personalized learning.
          </p>

          
          {/* Built by a Cameroonian Engineer */}
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4 mt-8 font-roboto-semibold">
            Built by a Cameroonian Engineer
          </h2>
          
          <p className="text-neutral-700 text-lg leading-relaxed mb-6 font-serif font-light">
            Niel Academy is created independently by <strong className="font-semibold text-neutral-900 font-roboto-semibold">Neba-Akongnwi Othniel Che</strong>, a Cameroonian software engineer committed to improving access to quality education through technology.
          </p>

          <p className="text-neutral-700 text-lg leading-relaxed mb-8 font-serif font-light">
            Niel Academy is self-funded and developed solo. Every feature is designed with the goal of empowering students, improving accessibility and shaping a modern learning experience that reflects the needs of the community.
          </p>

          {/* Contact Section */}
          <div className="rounded-2xl p-8 mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 mb-6 font-roboto-semibold text-LEFT">
              Contact
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Links */}
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

              {/* Social Media Links */}
              <div className="space-y-4">
                <a 
                  href="https://www.linkedin.com/in/othniel-che" 
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
                  href="https://x.com/othnielche" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-neutral-700 hover:text-brand-primary transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="font-serif font-light">X (Formally Twitter)</span>
                </a>

                <a 
                  href="https://www.instagram.com/othniel_che/" 
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
