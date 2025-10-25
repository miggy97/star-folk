import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000', 
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Global error interceptor 
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('[API ERROR]', error);
    return Promise.reject(error);
  }
);

export default api;
