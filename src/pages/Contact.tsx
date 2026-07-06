import { Mail, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <div className="w-full">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-neutral-900">Let’s talk</h1>
          <p className="mt-5 text-neutral-700 text-lg leading-relaxed">
            Whether you’re a student, parent, school, NGO, or partner, we’d love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 rounded-3xl bg-white/70 border border-neutral-200/70 p-8">
            <h2 className="text-2xl text-neutral-900">Email</h2>
            <p className="mt-2 text-neutral-700">Fastest way to reach the team.</p>

            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${site.emails.support}`}
                className="flex items-center justify-between gap-4 rounded-2xl border border-neutral-200/70 bg-white/70 px-5 py-4 hover:bg-brand-card/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-2xl bg-brand-card grid place-items-center text-neutral-900">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <div className="text-neutral-900 font-semibold">{site.emails.support}</div>
                    <div className="text-sm text-neutral-600">Support</div>
                  </div>
                </div>
                <ArrowUpRight className="size-5 text-neutral-600" />
              </a>

              <a
                href={`mailto:${site.emails.founderWork}`}
                className="flex items-center justify-between gap-4 rounded-2xl border border-neutral-200/70 bg-white/70 px-5 py-4 hover:bg-brand-card/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-2xl bg-brand-card grid place-items-center text-neutral-900">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <div className="text-neutral-900 font-semibold">{site.emails.founderWork}</div>
                    <div className="text-sm text-neutral-600">Founder</div>
                  </div>
                </div>
                <ArrowUpRight className="size-5 text-neutral-600" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl bg-neutral-950 text-white p-8 relative overflow-hidden">
            <div className="relative">
              <h2 className="text-2xl">Social</h2>
              <p className="mt-2 text-white/80">Updates, announcements, and community.</p>

              <div className="mt-6 space-y-3">
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-4 hover:bg-white/10 transition-colors"
                >
                  <div className="font-semibold">LinkedIn</div>
                  <ArrowUpRight className="size-5 text-white/80" />
                </a>
                <a
                  href={site.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-4 hover:bg-white/10 transition-colors"
                >
                  <div className="font-semibold">X</div>
                  <ArrowUpRight className="size-5 text-white/80" />
                </a>
                <a
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-4 hover:bg-white/10 transition-colors"
                >
                  <div className="font-semibold">Instagram</div>
                  <ArrowUpRight className="size-5 text-white/80" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
