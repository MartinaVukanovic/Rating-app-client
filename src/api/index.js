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
export function postSettings(type, value) {
  const response = axios.patch(`http://localhost:3000/settings/${type}`, {
    [type]: value,
  });
  return response;
}
export function postToday(date) {
  const response = axios.post('http://localhost:3000/today', {
    date,
  });
  return response;
}
export function postReports(startDate, endDate) {
  const response = axios.post('http://localhost:3000/reports', {
    startDate,
    endDate,
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
