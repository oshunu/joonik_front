import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

// Interfaz de Location
export interface Location {
    code: number;
    name: string;
    image: string;
    creationDate: string;
}

interface ApiResponse {
    data: Location[];
}

export const fetchLocations = async (): Promise<Location[]> => {
    try {        
        const response = await axios.get<ApiResponse>(API_URL+'locations',{
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
        });        
        return response.data.data;
    } catch (error) {
        console.error('Error al obtener las ubicaciones:', error);
        throw error;
    }
};