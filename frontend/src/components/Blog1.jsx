import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const blog = () => {
          return (
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100%"
                img src={require('./pic1.png')} />
               
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                WHY IS MY DRYER SQUEAKING?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" >Learn More</Button>
              </CardActions>
            </Card>
          );
        }
        
 
export default blog;