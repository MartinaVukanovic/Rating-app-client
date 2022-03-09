export default {
  submitEmotion(_, response) {
    console.log('emotion submited, ', response);
  },
  smilesGet(state, response) {
    state.smiles = response;
  },
  toggleSpin(state) {
    state.spin = !state.spin;
  },
  toggleWelcomePage(state) {
    state.showWelcomePage = !state.showWelcomePage;
  },
};
