import { createContext, useContext, useState } from 'react';
import { translations, personalInfoTranslated } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ro'); // Default: Romanian

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ro' ? 'en' : 'ro');
  };

  const t = translations[language];
  const personalInfo = personalInfoTranslated[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, personalInfo }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};