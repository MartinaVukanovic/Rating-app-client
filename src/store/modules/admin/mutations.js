// prettier-ignore
import {
  GET_SETTINGS,
  POST_TODAY,
  POST_REPORTS,
  NO_ERROR,
  ERROR,
  TOGGLE_INFO,
  ACCESS_TOKEN,
  NOT_AUTHORIZED,
} from '../../mutationTypes';

import router from '../../../router';

export default {
  [GET_SETTINGS](state, response) {
    state.message = response.message;
    state.messageTime = response.messageDelay;
    state.numberOfEmotions = response.numberOfEmoji;
  },

  [POST_TODAY](state, data) {
    state.today = data;
  },

  [POST_REPORTS](state, data) {
    state.reports = data;
  },

  [TOGGLE_INFO](state) {
    state.info = !state.info;
  },

  [NO_ERROR](state) {
    state.errorExists = false;
  },

  [ERROR](state, error) {
    if (typeof error.response === 'undefined') {
      state.errorExists = 500;
    } else {
      const errorNumber = error.response.data.status;
      if (errorNumber === 429) {
        state.errorExists = errorNumber;
        setTimeout(() => {
          state.errorExists = false;
        }, 10000); // 60 000 on backend
      } else if (errorNumber === 403 || errorNumber === 401) {
        localStorage.removeItem('user');
        router.push('/login');
      }
    }
  },

  [ACCESS_TOKEN](state, response) {
    state.userRole = response.role;
  },

  [NOT_AUTHORIZED](state) {
    state.notAuthorized = true;
    setTimeout(() => {
      state.notAuthorized = false;
    }, 10000);
  },
};
