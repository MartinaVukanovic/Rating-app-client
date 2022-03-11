import axios from 'axios';

export function fetchSettings() {
  const response = axios.get('http://localhost:3000/settings');
  return response;
}
export function getSmiles(numberOfEmotions) {
  const response = axios.post('http://localhost:3000/smiles', {
    numOfEmotions: numberOfEmotions,
  });
  return response;
}
export function emotionSubmit(name) {
  const response = axios.post('http://localhost:3000/', {
    name,
  });
  return response;
}
/* export function postSettings(value){
  const response = axios.post(`http://localhost:3000/settings/${value}`, {

  })
} */

/* export default {
  fetchSettings() {
    const response = axios.get('http://localhost:3000/settings');
    console.log(response);
    return response;
  },
}; */
