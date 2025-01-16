import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locale/en.json';
import ptBr from './locale/pt.json';

// Inferir a estrutura de tradução diretamente do JSON
export type Translation = typeof en;

// Estendendo o módulo react-i18next para adicionar tipagem correta
declare module 'react-i18next' {
  interface Resources {
    translation: Translation; // Certifique-se de usar 'translation' como o namespace
  }
}

const SelectLanguage = localStorage.getItem('language') || 'EN'

// Inicializando o i18n com tipagem genérica
i18n.use(initReactI18next).init<Translation>({
  resources: {
    EN: { translation: en }, // Chave correta do namespace
    BR: { translation: ptBr },
  },
  lng: SelectLanguage, // Idioma padrão
  fallbackLng: 'pt', // Idioma de fallback
  interpolation: {
    escapeValue: false, // Evitar XSS
  },
});

export default i18n;
