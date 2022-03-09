import Axios from 'axios';

export default {
  async submitEmotion({ commit }, name) {
    const response = Axios.post('http://localhost:3000/', {
      name,
    });

    commit('submitEmotion', response);
  },
};
