import axios from 'axios';

const API_LOGIN = 'https://dummyjson.com/auth/login';
const API_LOGIN_V2 = 'http://localhost:8080/api/v1/auth/login';

export const loginv1 = async (username, password) => {
  try {
    const response = await axios.post(API_LOGIN, {
      username: username,
      password: password,
    });
    return response;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(API_LOGIN_V2, {
      email: email,
      password: password,
    });
    return response;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};