import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { SEO } from '../SEO';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

