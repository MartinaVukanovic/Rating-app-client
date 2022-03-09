import { getSmiles, emotionSubmit } from '../api/index';

export default {
  async submitEmotion({ commit }, name) {
    const response = await emotionSubmit(name);

    commit('submitEmotion', response);
  },
  async smilesGet({ commit }) {
    const response = await getSmiles();

    commit('smilesGet', response.data);
  },

  toggleWelcomePage({ commit }) {
    commit('toggleWelcomePage');
  },
  toggleSpin({ commit }) {
    commit('toggleSpin');
  },
};
