/* eslint-disable no-param-reassign */
import axios from 'axios';

// axios configuration for private and public routes
const privateRequest = axios.create({
  baseURL: 'http://localhost:3030/admin',
});
const publicRequest = axios.create({
  baseURL: 'http://localhost:3030/api',
});

// axios interceptors for requested headers
privateRequest.interceptors.request.use((config) => {
  const token = localStorage.getItem('user');
  config.headers = {
    Authorization: `Bearer ${token}`,
    'api-key': token,
    'Content-Type': 'application/json',
  };
  return config;
});

export default { privateRequest, publicRequest };
