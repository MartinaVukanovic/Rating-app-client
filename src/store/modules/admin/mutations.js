export default {
  settingsGet(state, response) {
    state.message = response.message;
    state.messageTime = response.messageDelay;
    state.numberOfEmotions = response.numberOfEmoji;
  },
  todayPost(state, data) {
    state.today = data;
  },
  reportsPost(state, data) {
    state.reports = data;
  },
  toggleInfo(state) {
    state.info = !state.info;
  },
  noError(state) {
    state.errorExists = false;
  },
  error(state) {
    state.errorExists = true;
  },
  accessToken(state, response) {
    state.userRole = response.role;
    console.log('user role: ', state.userRole);
  },

  notAuthorized(state) {
    state.notAuthorized = true;
    console.log(state.notAuthorized, 'nije admimn');
  },
};
