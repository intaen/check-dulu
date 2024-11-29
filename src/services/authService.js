import axios from 'axios';

const API_LOGIN = 'https://dummyjson.com/auth/login';
const API_LOGIN_V2 = 'http://68.183.191.111:8080/api/v1/auth/login';

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

export const loginv2 = async (email, password) => {
  try {
    const response = await axios.post(API_LOGIN_V2, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      },
      email: email,
      password: password,
    });
    response.headers['Access-Control-Allow-Origin'] = '*';
    response.headers['Access-Control-Allow-Methods'] = 'GET, PUT, POST, DELETE, OPTIONS';
    return response;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};