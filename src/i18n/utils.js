

import { ui, defaultLang } from './ui';





export const getLangFromUrl = (url) => {
  
  const pathname = new URL(url).pathname;
  
  
  const segments = pathname.split('/');
  
  
  const lang = segments[1];
  
  
  
  return lang in ui ? lang : defaultLang;
};




export const useTranslations = (lang) => {
  
  return (key) => {
    
    
    return ui[lang][key] || key;
    
  };
};