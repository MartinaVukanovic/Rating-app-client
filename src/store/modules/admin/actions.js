// prettier-ignore
/* eslint-disable */

import Pusher from 'pusher-js';
import {
  fetchSettings,
  postSettings,
  getToday,
  getReports,
  loginUser,
  logoutUser,
} from '../../../api/index';

const pusher = new Pusher('b37ae0c5a1d0b920420c', {
  cluster: 'eu',
});

export default {
  async settingsGet({ commit }) {
    try {
      const channel = pusher.subscribe('RatingApp');
      const response = await fetchSettings();
      commit('NO_ERROR');
      commit('GET_SETTINGS', response.data);
      commit('GET_SMILES', response.data.emojis, { root: true });
      channel.bind('Setting changes', function (data) {
        commit('GET_SMILES', JSON.parse(data).emojis, { root: true });
        commit('GET_SETTINGS', JSON.parse(data));
      });
    } catch (error) {
      commit('ERROR');
    }
  },
  async settingsPost({ dispatch, commit }, { type, value }) {
    try {
      await postSettings(type, value);
      dispatch('settingsGet');
      commit('NO_ERROR');
    } catch (error) {
      commit('ERROR');
    }
  },
  async todayGet({ commit }, date) {
    try {
      const response = await getToday(date);
      commit('POST_TODAY', response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async reportsGet({ commit }, { startDate, endDate }) {
    try {
      const response = await getReports(startDate, endDate);
      commit('POST_REPORTS', response.data);
    } catch (error) {
      console.log(error);
    }
  },
  toggleInfo({ commit }) {
    commit('TOGGLE_INFO');
  },

  async userLogin({ commit }, accesToken) {
    try {
      localStorage.setItem('user', accesToken);
      const response = await loginUser(accesToken);
      commit('ACCESS_TOKEN', response.data);
    } catch (error) {
      localStorage.removeItem('user');
      commit('NOT_AUTHORIZED');
      console.log(error);
    }
  },

  async logoutUser(_, token) {
    await logoutUser(token);
    localStorage.removeItem('user');
  },
};
