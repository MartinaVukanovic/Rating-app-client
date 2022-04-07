// prettier-ignore
/* eslint-disable */

import Pusher from 'pusher-js';
import { fetchSettings, postSettings, getToday, getReports, loginUser } from '../../../api/index';

const pusher = new Pusher('b37ae0c5a1d0b920420c', {
  cluster: 'eu',
});

export default {
  async settingsGet({ commit }) {
    try {
      const channel = pusher.subscribe('RatingApp');
      const response = await fetchSettings();
      commit('noError');
      commit('settingsGet', response.data);
      commit('smilesGet', response.data.emojis, { root: true });
      channel.bind('Setting changes', function (data) {
        commit('smilesGet', JSON.parse(data).emojis, { root: true });
        commit('settingsGet', JSON.parse(data));
      });
    } catch (error) {
      commit('error');
    }
  },
  async settingsPost({ dispatch, commit }, { type, value }) {
    try {
      await postSettings(type, value);
      dispatch('settingsGet');
      commit('noError');
    } catch (error) {
      commit('error');
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

  async userLogin({ commit }, accesToken) {
    try {
      const response = await loginUser(accesToken);
      localStorage.setItem('user', accesToken);
      commit('accessToken', response.data);
    } catch (error) {
      localStorage.removeItem('user');
      commit('notAuthorized');
      console.log(error);
    }
  },
};
