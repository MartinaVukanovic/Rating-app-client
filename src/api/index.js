import axios from './interceptors/index';

// submiting an emotion

export function emotionSubmit(name) {
  const response = axios.publicRequest.post('/rating', {
    name,
  });
  return response;
}

// login and logout

export function loginUser(accessToken) {
  const response = axios.publicRequest.post('/auth', {
    accessToken,
  });
  return response;
}

export function logoutUser(token) {
  const response = axios.privateRequest.post('/auth/revoke', {
    accessToken: token,
  });
  return response;
}

// settings

export function fetchSettings() {
  const response = axios.publicRequest.get('/setting');
  return response;
}

export function postSettings(type, value) {
  const response = axios.privateRequest.patch('/setting', {
    [type]: value,
  });

  return response;
}

// statistics - today and reports

export function getToday(date) {
  const response = axios.privateRequest.get('/rating', {
    params: { dateFrom: date },
  });
  return response;
}

export function getReports(startDate, endDate) {
  const response = axios.privateRequest.get('/rating', {
    params: { dateFrom: startDate, dateTo: endDate },
  });
  return response;
}
