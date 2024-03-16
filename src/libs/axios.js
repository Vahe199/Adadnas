import axios from 'axios';

export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  Authorization: null,
};

const $axios = axios.create({
  // withCredentials: true,
  baseURL: 'https://adanas.am/api/',
  headers: headers,
});

export default $axios;
