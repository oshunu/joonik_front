import axios from 'axios';

const API_URL = 'http://194.238.30.88:8401/api/'; //locations';
const API_KEY = '122333444455555';

// Interfaz de Location
export interface Location {
    code: number;
    name: string;
    image: string;
    creationDate: Date;
}

interface ApiResponse {
    data: Location[]; // La propiedad 'data' contiene un array de Location
}


export const fetchLocations = async (): Promise<Location[]> => {
    try {
        console.log(1)
        const response = await axios.get<ApiResponse>(API_URL+'locations',{
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
        });
        console.log(response.data); 
        return response.data.data;
    } catch (error) {
        console.error('Error al obtener las ubicaciones:', error);
        throw error;
    }
};