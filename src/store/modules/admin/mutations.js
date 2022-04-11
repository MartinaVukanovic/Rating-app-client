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
  [ERROR](state) {
    state.errorExists = true;
  },
  [ACCESS_TOKEN](state, response) {
    state.userRole = response.role;
  },
  [NOT_AUTHORIZED](state) {
    state.notAuthorized = true;
  },
};
