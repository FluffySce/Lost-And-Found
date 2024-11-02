import axios from 'axios';

// Base URL of backend server
const API_URL = 'http://localhost:5000/api/items';

// Function to fetch items
export const fetchItems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};
