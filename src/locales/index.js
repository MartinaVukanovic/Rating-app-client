import ba from './ba';
import en from './en';
import hi from './hi';

export default function findLanguage(language) {
  if (language === 'ba') {
    return ba;
  }
  if (language === 'hi') {
    return hi;
  }
  return en;
}
