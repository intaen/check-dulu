import axios from 'axios';

const API = 'http://188.166.231.97:8080/api/v1';
const LEADS_GET = '/leads';


export const getReport = async () => {
  try {
    const response = await axios.get(API+LEADS_GET, authHeader);
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};