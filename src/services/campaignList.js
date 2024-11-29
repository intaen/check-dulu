import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getListCampaign = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data.slice(0, 10);
      } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
      }
}

export const addCampaign = async (data) => {  
    try {
      const response = await axios.post(`${API_URL}`, {
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