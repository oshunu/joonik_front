import React, { useEffect, useState } from 'react';
import { fetchLocations, Location } from '../services/apiService';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { Card, CardContent, Typography, Container, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid2';

const ItemList: React.FC = () => {
    const [locations, setLocations] = useState<Location[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getLocations = async () => {
            console.log('a');
            try {
                const fetchedLocations = await fetchLocations();
                setLocations(fetchedLocations);
            } catch (err) {
                setError('No se pudieron cargar los elementos');
            } finally {
                setLoading(false);
            }
        };

        getLocations();
    }, []);

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Alert severity="error">{error}</Alert>;
    }

    return (
        <Container>
            <Typography variant="h5" component="h1" style={{ textAlign: 'center' }} gutterBottom>
                Listado de Ubicaciones
            </Typography>
            <br />
            <Grid container spacing={2} >
                {locations.map((item) => (

                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.code}>
                        <Card >
                            <CardMedia
                                component="img"
                                style={{
                                    objectFit: 'cover', 
                                    height: '120px', 

                                }}
                                height="120"
                                image={item.image}
                                alt={item.name}
                            />
                            <CardContent>
                                <b>{item.code} - {item.name}</b>
                                <div>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Fecha Creación: {item.creationDate}
                                    </Typography>

                                </div>
                            </CardContent>
                        </Card>
                    </Grid>

                ))}
            </Grid>

        </Container>
    );
};

export default ItemList;