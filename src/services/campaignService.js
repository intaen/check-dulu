import axios from 'axios';
import Cookies from 'universal-cookie';

const API_V1 = 'https://jsonplaceholder.typicode.com/todos';
const API_V2 = 'http://188.166.231.97:8080/api/v1';
const CAMPAIGN_GET = '/campaign';
const CAMPAIGN_ADD = '/campaign/create';

export const authHeader = () => {
  const cookies = new Cookies();
  const accessToken = cookies.get('fortune-cookie');
  if ((accessToken != undefined)) {
    return {
      ...API_HEADERS,
      "Authorization": `Bearer ${accessToken}`
    }
  }
  return {}
}

export const getListCampaignv1 = async () => {
    try {
        const response = await axios.get(API_V1);
        return response.data.slice(0, 10);
      } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
      }
}

export const addCampaignv1 = async (data) => {  
    try {
      const response = await axios.post(`${API_V1}`, {
        title: data.title,          // Send just the todo text
        completed: false,
        id: 1
      });
      
      // Transform the response to match our expected format
      return response.data;
    } catch (error) {
      console.error('Error creating todo:', error.response?.data || error.message);
      throw error;
    }
};

export const getListCampaign = async () => {
  try {
      const response = await axios.get(API_V2+CAMPAIGN_GET, authHeader);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching campaign:', error);
      throw error;
    }
}

export const addCampaign = async (campaign) => {
  // get file
  const myFile = document.querySelector("input[type=file]").files[0];
  // append to form
  const data = new FormData();
  data.append("file", myFile);
  data.append("category", campaign.category);
  data.append("campaign_name", campaign.campaign_name);
  data.append("campaign_desc", campaign.campaign_desc);
  data.append("product_desc", campaign.product_desc);
  data.append("product_price", campaign.product_price);

  try {
    const response = await axios.post(`${API_V2+CAMPAIGN_ADD}`, data, authHeader, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      method: "POST"
    });
    
    // Transform the response to match our expected format
    return response.data;
  } catch (error) {
    console.error('Error creating campaign:', error.response?.data || error.message);
    throw error;
  }
};