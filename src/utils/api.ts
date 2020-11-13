import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://www.apibackend.de/',
  baseURL: 'http://127.0.0.1:5000/',
  // baseURL: 'http://192.168.0.8:5000/',

});

export default api;
