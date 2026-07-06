import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export function SEO() {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = i18n.language;
    
    // Clear existing hreflang links
    const existingHreflangLinks = document.querySelectorAll('link[rel="alternate"]');
    existingHreflangLinks.forEach(link => link.remove());

    // Get current path without language prefix
    const basePath = location.pathname.startsWith('/fr') 
      ? location.pathname.replace('/fr', '') || '/'
      : location.pathname;

    // Add hreflang tags
    const languages = [
      { code: 'en', path: basePath },
      { code: 'fr', path: `/fr${basePath}` },
      { code: 'x-default', path: basePath },
    ];

    const baseUrl = window.location.origin;

    languages.forEach(({ code, path }) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hrefLang = code;
      link.href = `${baseUrl}${path}`;
      document.head.appendChild(link);
    });

    // Update page title based on language
    const siteName = 'Niel Academy';
    const pageTitles: Record<string, Record<string, string>> = {
      '/': {
        en: 'Niel Academy - Curriculum-aligned AI tutoring for African students',
        fr: 'Niel Academy - Tutorat IA aligné sur les programmes pour étudiants africains'
      },
      '/demo': {
        en: 'Demo - Niel Academy',
        fr: 'Démo - Niel Academy'
      },
      '/about': {
        en: 'Our Mission - Niel Academy',
        fr: 'Notre Mission - Niel Academy'
      },
      '/parents': {
        en: 'For Parents - Niel Academy', 
        fr: 'Pour les Parents - Niel Academy'
      },
      '/contact': {
        en: 'Contact - Niel Academy',
        fr: 'Contact - Niel Academy'
      },
      '/privacy-policy': {
        en: 'Privacy Policy - Niel Academy',
        fr: 'Politique de Confidentialité - Niel Academy'
      },
      '/terms-of-service': {
        en: 'Terms of Service - Niel Academy',
        fr: 'Conditions d\'Utilisation - Niel Academy'
      }
    };

    const currentTitle = pageTitles[basePath]?.[i18n.language] || siteName;
    document.title = currentTitle;

    // Update meta description
    const metaDescriptions: Record<string, Record<string, string>> = {
      '/': {
        en: 'Niel Academy provides curriculum-aligned AI tutoring for African students. Master GCE concepts with personalized feedback based on official examination mark schemes.',
        fr: 'Niel Academy offre un tutorat IA aligné sur les programmes pour les étudiants africains. Maîtrisez les concepts GCE avec un retour personnalisé basé sur les barèmes d\'examen officiels.'
      },
      '/demo': {
        en: 'See how Niel Academy\'s AI tutoring system helps students master GCE concepts through Understanding Mode, Guided Mode, and personalized feedback.',
        fr: 'Voyez comment le système de tutorat IA de Niel Academy aide les étudiants à maîtriser les concepts GCE à travers le Mode Compréhension, le Mode Guidé, et le retour personnalisé.'
      },
      '/about': {
        en: 'Learn about Niel Academy\'s mission to provide quality education support across Sub-Saharan Africa through curriculum-aligned AI tutoring.',
        fr: 'Découvrez la mission de Niel Academy de fournir un soutien éducatif de qualité à travers l\'Afrique sub-saharienne grâce au tutorat IA aligné sur les programmes.'
      }
    };

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    
    const description = metaDescriptions[basePath]?.[i18n.language] || 
                      metaDescriptions['/'][i18n.language];
    metaDescription.setAttribute('content', description);

  }, [i18n.language, location.pathname]);

  return null; // This component doesn't render anything
}