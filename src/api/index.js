import axios from './interceptors/index';

export function fetchSettings() {
  const response = axios.publicRequest.get('/setting');
  return response;
}

export function emotionSubmit(name) {
  const response = axios.publicRequest.post('/rating', {
    name,
  });
  return response;
}

export function loginUser(accessToken) {
  const response = axios.publicRequest.post('/auth', {
    accessToken,
  });
  return response;
}

export function postSettings(type, value) {
  const response = axios.privateRequest.patch('/setting', {
    [type]: value,
  });

  return response;
}

export function getToday(date) {
  // admin
  const response = axios.privateRequest.get('/rating', {
    params: { dateFrom: date },
  });
  return response;
}

export function getReports(startDate, endDate) {
  // admin
  const response = axios.privateRequest.get('/rating', {
    params: { dateFrom: startDate, dateTo: endDate },
  });
  return response;
}

export function logoutUser(token) {
  // admin
  const response = axios.privateRequest.post('/auth/revoke', {
    accessToken: token,
  });
  return response;
}

export function logoutUser() {
  const response = axios.post('http://localhost:3030/revoke', {
    accessToken: access,
  });
  console.log(access, 'poslan u post req');
  return response;
}
