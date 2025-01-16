import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Location } from '../services/apiService';


interface LocationCardProps {
  item: Location;
}

const LocationCardList: React.FC<LocationCardProps> = ({ item }) => {
  return (
    <Card size={{ xs: 12, sm: 6, md: 4 }}>
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
          <Typography variant="body2" color="textSecondary">
            Fecha Creación: {item.creationDate}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationCardList;