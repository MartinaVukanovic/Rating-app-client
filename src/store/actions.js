import { emotionSubmit } from '../api/index';

export default {
  async submitEmotion({ commit }, name) {
    const response = await emotionSubmit(name);
    commit('submitEmotion', response);
  },

  toggleWelcomePage({ commit }) {
    commit('toggleWelcomePage');
  },
  toggleSpin({ commit }) {
    commit('toggleSpin');
  },
  changeLanguage({ commit }, language) {
    commit('changeLanguage', language);
  },
  setUser({ commit }) {
    commit('setUser');
  },
};
