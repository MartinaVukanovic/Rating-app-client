/* eslint-disable no-param-reassign */
import axios from 'axios';

const privateRequest = axios.create({
  baseURL: 'http://localhost:3030/admin',
});
const publicRequest = axios.create({
  baseURL: 'http://localhost:3030/api',
});

privateRequest.interceptors.request.use((config) => {
  const token = localStorage.getItem('user');
  config.headers = {
    Authorization: `Bearer ${token}`,
    'api-key': 5,
    'Content-Type': 'application/json',
  };
  return config;
});

export default { privateRequest, publicRequest };
