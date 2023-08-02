import axios from 'axios';
import * as process from 'process';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default API;
