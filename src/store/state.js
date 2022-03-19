/* eslint-disable */
import ba from '../locales/ba';
import en from '../locales/en';

function findLanguage(language) {
  if (language === 'ba') {
    return ba;
  } else {
    return en;
  }
}

export default {
  spin: false,
  smiles: [],
  showWelcomePage: false,
  translation: findLanguage(localStorage.getItem('translation')),
};
