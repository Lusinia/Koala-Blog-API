import axios from 'axios';


axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  config.headers['Content-Type'] = 'application/json';

  return config;
}, (err) => Promise.reject(err));

export default axios;
