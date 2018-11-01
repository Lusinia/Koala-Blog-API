import axios from 'axios';


axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  config.headers['Content-Type'] = `application/json`;

  return config;
}, function (err) {
  return Promise.reject(err);
});

export default axios;
