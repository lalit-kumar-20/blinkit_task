import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/', // Your Node.js server URL
});

export default api;