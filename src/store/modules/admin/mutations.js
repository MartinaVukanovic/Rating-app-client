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
};
