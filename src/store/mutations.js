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
  submitEmotion(_, response) {
    console.log('emotion submited, ', response.data);
  },
  smilesGet(state, response) {
    state.smiles = response;
  },
  toggleSpin(state) {
    state.spin = !state.spin;
  },
  toggleWelcomePage(state) {
    state.showWelcomePage = !state.showWelcomePage;
  },
  changeLanguage(state, translation) {
    const newLanguage = findLanguage(translation);
    localStorage.setItem('translation', translation);
    state.translation = JSON.parse(JSON.stringify(newLanguage));
  },
  setUser(state) {
    state.user = localStorage.getItem('authCode');
  },
};
