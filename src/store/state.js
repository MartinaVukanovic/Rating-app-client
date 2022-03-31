import findLanguage from '../locales/index';

export default {
  spin: false,
  smiles: [],
  showWelcomePage: false,
  translation: findLanguage(localStorage.getItem('translation')),
  user: localStorage.getItem('authCode'),
};
