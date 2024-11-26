import axios from 'axios';

const API_LOGIN = 'https://dummyjson.com/auth/login';

export const login = async (username, password) => {
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