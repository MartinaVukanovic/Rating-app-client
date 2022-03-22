/* eslint-disable */
import ba from '../locales/ba';
import en from '../locales/en';
import hi from '../locales/hi';

function findLanguage(language) {
  if (language == 'ba') {
    return ba;
  } else if (language == 'hi') {
    return hi;
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
