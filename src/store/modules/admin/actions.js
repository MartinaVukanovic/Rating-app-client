// prettier-ignore
import {
  fetchSettings,
  postSettings,
  postToday,
  postReports,
} from '../../../api/index';

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
  async settingsPost({ dispatch }, { type, value }) {
    try {
      const response = await postSettings(type, value);
      console.log('settingsPost ', response);
      dispatch('settingsGet');
    } catch (error) {
      console.log(error);
    }
  },
  async todayPost({ commit }, date) {
    try {
      const response = await postToday(date);
      commit('todayPost', response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async reportsPost({ commit }, { startDate, endDate }) {
    try {
      const response = await postReports(startDate, endDate);
      commit('reportsPost', response.data);
    } catch (error) {
      console.log(error);
    }
  },
  toggleInfo({ commit }) {
    commit('toggleInfo');
  },
};
