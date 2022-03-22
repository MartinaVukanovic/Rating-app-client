/* eslint-disable */
export default {
  spin(state) {
    return state.spin;
  },
  emotionList(state) {
    return state.smiles;
  },
  welcomePage(state) {
    return state.showWelcomePage;
  },
  smiles(state) {
    return state.smiles;
  },
  translation(state) {
    return state.translation;
  },
  getTranslation(state) {
    return (value) => {
      return state.translation[value];
    };
  },
};
