import React, { useEffect, useState } from 'react';
import { fetchLocations, Location } from '../services/apiService';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { Typography, Container} from '@mui/material';
import Grid from '@mui/material/Grid2';
import LocationCardList from './LocationCardList';

const ItemList: React.FC = () => {
    const [locations, setLocations] = useState<Location[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getLocations = async () => {
            
            try {
                const fetchedLocations = await fetchLocations();
                setLocations(fetchedLocations);
            } catch (err:any) {            
                setError(err?.response?.data?.error || 'No se pudieron cargar los elementos');
            } finally {
                setLoading(false);
            }
        };

        getLocations();
    }, []);
   

    return (
        <Container>
            <Typography variant="h5" component="h1" style={{ textAlign: 'center' }} gutterBottom>
                Listado de Ubicaciones
            </Typography>

            <br />
            {loading && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <CircularProgress />
                </div>
            )} 
            {error ? (
                <Alert severity="error">{error}</Alert>
            ) : (                
                
                <Grid container spacing={2} >
                    {locations.map((item) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.code}>
                            <LocationCardList  item={item} />      
                        </Grid>                  

                    ))}
                </Grid>
            )}

        </Container>
    );
};

export default ItemList;