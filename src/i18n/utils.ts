import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang], params?: Record<string, string>) {
    let translation = ui[lang][key] || ui[defaultLang][key];
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        translation = translation.replace(`{${key}}`, value);
      });
    }
    
    return translation;
  };
}

export function getLocaleUrl(lang: string, path: string) {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}