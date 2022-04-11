import { emotionSubmit } from '../api/index';

export default {
  async submitEmotion({ commit }, name) {
    const response = await emotionSubmit(name);
    commit('SUBMIT_EMOTION', response);
  },

  toggleWelcomePage({ commit }) {
    commit('TOGGLE_WELCOME_PAGE');
  },
  toggleSpin({ commit }) {
    commit('TOGGLE_SPIN');
  },
  changeLanguage({ commit }, language) {
    commit('CHANGE_LANGUAGE', language);
  },
  setUser({ commit }) {
    commit('SET_USER');
  },
};
