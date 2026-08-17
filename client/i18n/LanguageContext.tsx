'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from './translations';

type Language = 'ru' | 'en';

type LanguageContextType = {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: typeof translations['ru'];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'ru';
    const saved = localStorage.getItem('language');
    return saved === 'ru' || saved === 'en' ? saved : 'ru';
  });

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};