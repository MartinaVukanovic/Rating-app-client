import { fetchSettings } from '../../../api/index';

export default {
  async settingsGet({ commit, dispatch }) {
    try {
      const response = await fetchSettings();
      commit('settingsGet', response.data[0]);
      dispatch('smilesGet', response.data[0].numberOfEmotions, { root: true });
    } catch (error) {
      console.log(error);
    }
  },
};
