import axios from 'axios';


axios.interceptors.request.use(function (config) {
  // const token = cookie.get(__TOKEN_KEY__);
  //
  // if ( token != null ) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  config.headers.Authorization = `Bearer `;

  config.headers['Content-Type'] = `application/json`;

  return config;
}, function (err) {
  return Promise.reject(err);
});

export default axios;
