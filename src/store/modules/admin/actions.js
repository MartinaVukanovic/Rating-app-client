import { fetchSettings } from '../../../api/index';

export default {
  async settingsGet({ commit }) {
    try {
      const response = await fetchSettings();
      commit('settingsGet', response);
    } catch (error) {
      console.log(error);
    }
  },
};
