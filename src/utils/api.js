import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://klopp-tribute.onrender.com',
});
