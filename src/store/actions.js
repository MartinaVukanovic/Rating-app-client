import { getSmiles, emotionSubmit } from '../api/index';
/* import getLanguageFile from '../locales/index'; */

export default {
  async submitEmotion({ commit }, name) {
    const response = await emotionSubmit(name);

    commit('submitEmotion', response);
  },
  async smilesGet({ commit }, numberOfEmotions) {
    const response = await getSmiles(numberOfEmotions);

    commit('smilesGet', response.data);
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

  changeLanguageRucno({ commit }, language) {
    /*  const lang = getLanguageFile(localStorage.getItem('language')); */
    console.log(language, 'akcija');
    commit('changeLanguageRucno', language);
  },
};
