import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Mail } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex-1 w-full h-full">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="md:text-5xl text-4xl font-semibold text-neutral-900 mb-6 font-roboto-semibold">
            Contact <span className="font-light font-serif">Us</span>
          </h1>
          <p className="text-neutral-700 text-lg leading-relaxed font-serif font-light max-w-3xl mx-auto">
            Get in touch with our team. We'd love to hear from you!
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row gap-8 md:items-start md:justify-center">
          {/* Emails */}
          <Card className="bg-transparent border-transparent flex-1 min-w-[340px]">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-neutral-900 font-roboto-semibold mb-6">
                Email Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:support@nielacademy.com"
                  className="flex items-center space-x-3 text-neutral-700 hover:text-brand-primary transition-colors group"
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-neutral-800 group-hover:text-brand-primary transition-colors" />
                  </div>
                  <span className="font-serif font-light">support@nielacademy.com</span>
                </a>
                <a
                  href="mailto:cheothniel@nielacademy.com"
                  className="flex items-center space-x-3 text-neutral-700 hover:text-brand-primary transition-colors group"
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-neutral-800 group-hover:text-brand-primary transition-colors" />
                  </div>
                  <span className="font-serif font-light">cheothniel@nielacademy.com</span>
                </a>
                <a
                  href="mailto:cheothniel@gmail.com"
                  className="flex items-center space-x-3 text-neutral-700 hover:text-brand-primary transition-colors group"
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-neutral-800 group-hover:text-brand-primary transition-colors" />
                  </div>
                  <span className="font-serif font-light">cheothniel@gmail.com</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Socials */}
          <Card className="bg-transparent border-transparent flex-1 min-w-[340px]">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-neutral-900 font-roboto-semibold mb-6">
                Social Media
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.linkedin.com/in/othniel-che"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-neutral-700 hover:text-brand-primary transition-colors group"
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
                  className="flex items-center space-x-3 text-neutral-700 hover:text-brand-primary transition-colors group"
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
                  className="flex items-center space-x-3 text-neutral-700 hover:text-brand-primary transition-colors group"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="font-serif font-light">Instagram</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
