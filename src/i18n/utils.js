/* ================================
   BE FREE TOURS - i18n Utils
   Funções helper para internacionalização
   ================================ */

import { ui, defaultLang } from './ui';

// Pega o idioma da URL
// Exemplo: /en/tours -> 'en'
// Exemplo: /es/nosotros -> 'es'
// Exemplo: /pt-br/contato -> 'pt-br'
export const getLangFromUrl = (url) => {
  // Pega o pathname da URL: /en/tours
  const pathname = new URL(url).pathname;
  
  // Separa por /: ['', 'en', 'tours']
  const segments = pathname.split('/');
  
  // Pega o primeiro segmento (segments[1] = 'en')
  const lang = segments[1];
  
  // Se o idioma existe no ui, retorna ele
  // Senão, retorna o idioma padrão
  return lang in ui ? lang : defaultLang;
};

// Cria a função t() para traduzir
// Recebe: idioma ('en', 'es', 'pt-br')
// Retorna: função t(key) que busca a tradução
export const useTranslations = (lang) => {
  // Retorna uma arrow function que traduz
  return (key) => {
    // Busca a tradução: ui[lang][key]
    // Exemplo: ui['en']['nav.home'] = 'Home'
    return ui[lang][key] || key;
    // Se não achar a tradução, retorna a própria chave
  };
};