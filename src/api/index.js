import axios from 'axios';

export function fetchSettings() {
  const response = axios.get('http://localhost:3030/api/setting');
  return response;
}
export function emotionSubmit(name) {
  const response = axios.post('http://localhost:3030/api/rating', {
    name,
  });
  return response;
}
export function postSettings(type, value) {
  const response = axios.patch('http://localhost:3030/api/setting', {
    [type]: value,
  });
  return response;
}
export function getToday(date) {
  const response = axios.get('http://localhost:3030/api/rating', { params: { dateFrom: date } });
  return response;
}
export function getReports(startDate, endDate) {
  const response = axios.get('http://localhost:3030/api/rating', {
    params: { dateFrom: startDate, dateTo: endDate },
  });
  return response;
}
