/* eslint-disable */
import ba from '../locales/ba';
import en from '../locales/en';
import hi from '../locales/hi';
import {
  GET_SMILES,
  SUBMIT_EMOTION,
  TOGGLE_SPIN,
  TOGGLE_WELCOME_PAGE,
  CHANGE_LANGUAGE,
  SET_USER,
} from './mutationTypes';

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
  [SUBMIT_EMOTION](_, response) {
    console.log('emotion submited, ', response.data);
  },
  [GET_SMILES](state, response) {
    state.smiles = response;
  },
  [TOGGLE_SPIN](state) {
    state.spin = !state.spin;
  },
  [TOGGLE_WELCOME_PAGE](state) {
    state.showWelcomePage = !state.showWelcomePage;
  },
  [CHANGE_LANGUAGE](state, translation) {
    const newLanguage = findLanguage(translation);
    localStorage.setItem('translation', translation);
    state.translation = JSON.parse(JSON.stringify(newLanguage));
  },
  [SET_USER](state) {
    state.user = localStorage.getItem('authCode');
  },
};
