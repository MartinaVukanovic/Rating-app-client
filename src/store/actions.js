import { emotionSubmit } from '../api/index';

export default {
  async submitEmotion(_, name) {
    await emotionSubmit(name);
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
