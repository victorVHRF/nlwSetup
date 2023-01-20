import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.100.56:3333'
})