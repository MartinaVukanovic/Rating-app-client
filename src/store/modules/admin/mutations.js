export default {
  settingsGet(state, response) {
    state.message = response.message;
    state.messageTime = response.messageTime;
    state.numberOfEmotions = response.numberOfEmotions;
  },
};
