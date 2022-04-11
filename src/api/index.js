import axios from 'axios';

/* eslint-disable */

const access = localStorage.getItem('user');

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
  // admin
  const response = axios.patch(
    'http://localhost:3030/admin/setting',
    {
      [type]: value,
    },
    {
      headers: {
        Authorization: `Bearer ${access}`,
        'api-key': access,
        'Content-Type': 'application/json',
      },
    }
  );
  return response;
}
export function getToday(date) {
  // admin
  const response = axios.get('http://localhost:3030/admin/rating', {
    headers: {
      Authorization: `Bearer ${access}`,
      'Content-Type': 'application/json',
    },
    params: { dateFrom: date },
  });
  return response;
}
export function getReports(startDate, endDate) {
  const response = axios.get('http://localhost:3030/admin/rating', {
    headers: {
      Authorization: `Bearer ${access}`,
      'Content-Type': 'application/json',
    },
    params: { dateFrom: startDate, dateTo: endDate },
  });
  return response;
}

export function loginUser(accessToken) {
  const response = axios.post('http://localhost:3030/api/auth', {
    accessToken,
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
