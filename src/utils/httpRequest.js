import axios from 'axios';
import { getUser } from '../hooks/auth/user.localstore';

const httpRequest = axios.create({
  baseURL: 'http://localhost:8080/api/',
  timeout: 10000,
});

httpRequest.interceptors.request.use(
  function (config) {
    const token = "Bearer " + getUser()?.meta.token;
    if (!!token) {
      config.headers.Authorization = token;
    }
    return config;
  });

export default httpRequest;