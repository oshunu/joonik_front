import React, { useEffect, useState } from 'react';
import { fetchLocations, Location } from '../services/apiService';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const ItemList: React.FC = () => {
    const [items, setItems] = useState<Location[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    // Usamos useEffect para obtener los elementos al cargar el componente
    useEffect(() => {
      const getItems = async () => {
        console.log('a');
        try {
          const fetchedItems = await fetchLocations();
          setItems(fetchedItems);
        } catch (err) {
          setError('No se pudieron cargar los elementos');
        } finally {
          setLoading(false);
        }
      };
  
      getItems();
    }, []);  // El array vacío significa que solo se ejecuta al montar el componente
  
    if (loading) {
      return <CircularProgress />;
    }
  
    if (error) {
      return <Alert severity="error">{error}</Alert>;
    }
  
    return (
      <div>
        <h1>Lista de Elementos</h1>
        <ul>
          {items.map((item) => (
            <li key={item.code}>
              <h3>{item.code} {item.name}</h3>              
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ItemList;