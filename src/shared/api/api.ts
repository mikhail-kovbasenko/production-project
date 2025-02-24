import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '../const/localeStorage';

// const baseURL = IS_DEV ? 'http://localhost:8000' : 'https://production.ru';

export const $api = axios.create({
  baseURL: __API__,
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
  }

  return config;
});
