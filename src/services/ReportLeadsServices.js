import axios from 'axios';
import Cookies from 'universal-cookie';

const API = 'http://188.166.231.97:8080/api/v1';
const LEADS_GET = '/leads';


export const getReport = async () => {
  console.log("AUTH", authHeader)

  const cookies = new Cookies();
  const accessToken = cookies.get('fortune-cookie');
  console.log("token", accessToken)
  try {
    const response = await axios.get(API+LEADS_GET, authHeader);
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};