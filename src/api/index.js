import axios from 'axios';

export function fetchSettings() {
  const response = axios.get('http://localhost:3000/settings');
  return response;
}
export function getSmiles() {
  const response = axios.post('http://localhost:3000/smiles', {
    numOfEmotions: 3,
  });
  return response;
}
export function emotionSubmit(name) {
  const response = axios.post('http://localhost:3000/', {
    name,
  });
  return response;
}

/* export default {
  fetchSettings() {
    const response = axios.get('http://localhost:3000/settings');
    console.log(response);
    return response;
  },
}; */
