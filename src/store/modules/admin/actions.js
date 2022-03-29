// prettier-ignore
import {
  fetchSettings,
  postSettings,
  getToday,
  getReports,
} from '../../../api/index';

export default {
  async settingsGet({ commit }) {
    try {
      const response = await fetchSettings();
      commit('settingsGet', response.data);
      commit('smilesGet', response.data.emojis, { root: true });
    } catch (error) {
      console.log(error);
    }
  },
  async settingsPost({ dispatch }, { type, value }) {
    try {
      await postSettings(type, value);
      dispatch('settingsGet');
    } catch (error) {
      console.log(error);
    }
  },
  async todayGet({ commit }, date) {
    try {
      const response = await getToday(date);
      commit('todayPost', response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async reportsGet({ commit }, { startDate, endDate }) {
    try {
      const response = await getReports(startDate, endDate);
      commit('reportsPost', response.data);
    } catch (error) {
      console.log(error);
    }
  },
  toggleInfo({ commit }) {
    commit('toggleInfo');
  },
};
