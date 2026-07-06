import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

interface LanguageSelectorProps {
  className?: string;
}

export function LanguageSelector({ className = '' }: LanguageSelectorProps) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    
    // Update URL path based on language selection
    const currentPath = location.pathname;
    let newPath = '';

    if (langCode === 'fr') {
      // Add /fr prefix
      if (currentPath.startsWith('/fr')) {
        newPath = currentPath; // Already on French route
      } else {
        newPath = currentPath === '/' ? '/fr' : `/fr${currentPath}`;
      }
    } else {
      // Remove /fr prefix for English
      if (currentPath.startsWith('/fr')) {
        newPath = currentPath.replace('/fr', '') || '/';
      } else {
        newPath = currentPath; // Already on English route
      }
    }

    navigate(newPath);
  };

  return (
    <div className={`relative ${className}`}>
      <select
        value={i18n.language}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="appearance-none bg-transparent border border-neutral-200/70 rounded-full pl-3 pr-8 py-2 text-sm text-neutral-700 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:border-neutral-400 transition-all cursor-pointer"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
      <Globe className="absolute right-2 top-1/2 -translate-y-1/2 size-4 text-neutral-500 pointer-events-none" />
    </div>
  );
}

// Alternative compact version for mobile
export function LanguageSelectorCompact({ className = '' }: LanguageSelectorProps) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    
    const currentPath = location.pathname;
    let newPath = '';

    if (langCode === 'fr') {
      if (currentPath.startsWith('/fr')) {
        newPath = currentPath;
      } else {
        newPath = currentPath === '/' ? '/fr' : `/fr${currentPath}`;
      }
    } else {
      if (currentPath.startsWith('/fr')) {
        newPath = currentPath.replace('/fr', '') || '/';
      } else {
        newPath = currentPath;
      }
    }

    navigate(newPath);
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`px-3 py-1 text-sm rounded-full transition-colors ${
            i18n.language === lang.code
              ? 'bg-neutral-900 text-white font-medium'
              : 'text-neutral-600 hover:bg-neutral-100'
          }`}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  );
}