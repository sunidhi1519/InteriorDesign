// In src/services/DesignService.js
import axios from 'axios';

export const fetchDesigns = async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/designs');
        return response.data;
    } catch (error) {
        console.error('Error fetching designs:', error);
        return [];
    }
};
