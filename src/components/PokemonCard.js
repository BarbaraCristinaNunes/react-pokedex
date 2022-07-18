import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';
import {getPokemon} from '../crud/crud'

export default function PokemonCard() {
    getPokemon(2).then((pokemon) => {
        if(pokemon){
            console.log("from pokemonCard ", pokemon)
        }else{
            console.log("loading")
        }
    }) 
    return (
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="auto"
          image='/pokeball.png'
        >
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
            <Grid 
                container 
                spacing={1}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <Grid item lg={6} xs={6}>
                    <Button size="small">Evolution</Button>
                </Grid>
                <Grid item lg={6} xs={6} style={{textAlign: "right"}}>
                    <Button size="small">Type</Button>
                </Grid>            
            </Grid>

        </CardActions>
      </Card>
    );
  }