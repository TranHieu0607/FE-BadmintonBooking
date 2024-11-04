import axios from 'axios';

// Base URL dựa theo cấu hình backend của bạn
const BASE_URL = 'http://localhost:8080/badminton-booking';
const API_URL = `${BASE_URL}/api`;

// Tạo instance axios với các cấu hình mặc định
const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 60000, // Timeout được set giống backend (60000ms)
  headers: {
    'Content-Type': 'application/json',
  }
});

// Interceptor để xử lý request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor để xử lý response
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Unauthorized - Clear local storage và redirect về login
          localStorage.clear();
          window.location.href = '/login';
          break;
        case 403:
          // Forbidden
          console.error('Access Denied');
          break;
        default:
          console.error('API Error:', error.response.data);
      }
    }
    return Promise.reject(error);
  }
);

const authService = {
  login: async (username, password) => {
    try {
      const response = await axiosInstance.post('/auth/sign-in', {
        username,
        password,
      });
      
      if (response.data) {
        // Lưu thông tin user và token
        localStorage.setItem('user', JSON.stringify(response.data));
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
        }
      }
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error.response?.data || {
        message: 'An error occurred during login'
      };
    }
  },

  logout: async () => {
    try {
      // Gọi API logout nếu backend có endpoint này
      await axiosInstance.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Xóa local storage dù có lỗi hay không
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  },

  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch (e) {
        localStorage.removeItem('user');
        return null;
      }
    }
    return null;
  },

  // Refresh token nếu backend có implement
  refreshToken: async () => {
    try {
      const response = await axiosInstance.post('/auth/refresh-token');
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      return response.data;
    } catch (error) {
      console.error('Refresh token error:', error);
      throw error;
    }
  }
};

export default authService; 