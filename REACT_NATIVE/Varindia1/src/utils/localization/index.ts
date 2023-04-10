/**
 * Basic Setting Variables Define
 */
export const BaseSetting = {
  defaultLanguage: 'en',
  languageSupport: ['en', 'ar', 'por'],
  resourcesLanguage: {
    en: {
      translation: require('../lang/en.json'),
    },
    ar: {
      translation: require('../lang/ar.json'),
    },
    por: {
      translation: require('../lang/por.json'),
    },
  },
};
