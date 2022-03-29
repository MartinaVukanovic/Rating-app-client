import ba from './ba';
import en from './en';
import hi from './hi';

export function findLanguage(language) {
  if (language === 'ba') {
    return ba;
  } else if (language === 'hi') {
    return hi;
  } else {
    return en;
  }
}
