import { Link } from "react-router-dom";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/long-logo.png" alt="Niel Academy logo" className="w-auto h-20" />
            </div>
            <p className="text-neutral-300 leading-relaxed max-w-md">
              Built in Cameroon for Africa. We’re making it easier for students to learn with real understanding —
              not just memorised answers.
            </p>

            <div className="mt-6">
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

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold tracking-wide text-neutral-200 mb-4">Pages</h3>
            <ul className="space-y-2 text-neutral-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/parents" className="hover:text-white transition-colors">For Parents</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Mission</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold tracking-wide text-neutral-200 mb-4">Legal</h3>
            <ul className="space-y-2 text-neutral-300">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold tracking-wide text-neutral-200 mb-4">Social</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={site.socials.x} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  X
                </a>
              </li>
              <li>
                <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800/70 mt-12 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} <span className="font-serif font-light">{site.name}</span>. All rights reserved.
          </p>
          <a
            href={`mailto:${site.emails.support}`}
            className="text-sm text-neutral-300 hover:text-white transition-colors"
          >
            {site.emails.support}
          </a>
        </div>
      </div>
    </footer>
  );
}

