import { fetchSettings, postSettings } from '../../../api/index';

export default {
  async settingsGet({ commit, dispatch }) {
    try {
      const response = await fetchSettings();
      console.log('settingsGet', response);
      commit('settingsGet', response.data[0]);
      dispatch('smilesGet', response.data[0].numberOfEmotions, { root: true });
    } catch (error) {
      console.log(error);
    }
  },
  async settingsPost({ dispatch }, { type, value }) {
    try {
      const response = await postSettings(type, value);
      console.log('settingsPost ', response);
      dispatch('settingsGet');
    } catch (error) {
      console.log(error);
    }
  },
};
