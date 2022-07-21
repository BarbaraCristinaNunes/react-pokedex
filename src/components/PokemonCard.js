import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, IconButton } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import pokemons from '../assets/pokemons.json';
import {getPokemonByInput} from '../crud/crud';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function PokemonCard(props) {
  // console.log("card ", props.pokemon.name)
  let colors = () => {
    let color = "";
    props.pokemon.types.forEach((element) => {
      // console.log("element", element)
      color += `, ${Types[element].color}`;

      if(props.pokemon.types.length < 2){
        color += ", #ffffff";
      }

    })
    return color;
  };

  return (
    <Card 
      sx={{ maxWidth: 200}} 
      style={{
        backgroundImage: `linear-gradient(to bottom right${colors()})`,
        border: "solid 1px",
        borderImageSource: `linear-gradient(to bottom right${colors()})`,
      }}
      >
      <CardMedia
        component="img"
        alt={props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)}
        height="auto"
        image={props.pokemon.image}
        style={{backgroundColor: "#ffffff"}}
      >
      </CardMedia>
      <CardContent>
        <Grid
          container 
          spacing={1}
          direction="row"
          justifyContent="space-around"
          alignItems="center" 
        >
          <Grid
            item
            lg={1}
            xs={1}
          > 
            {
              props.pokemon.favorit === false ?
                <FavoriteIcon 
                  style={{fontSize: 20}} 
                  onClick={(v) => {
                    props.allPokemons.filter((element) => {
                      if(element.name === props.pokemon.name){
                        props.pokemon.favorit = true;
                      }
                    })
                    props.setAllPokemons(props.allPokemons);
                  }}
                />
              : 
                <FavoriteIcon 
                  style={{fontSize: 30, color: "gold"}} 
                  onClick={(v) => {
                    props.allPokemons.filter((element) => {
                      if(element.name === props.pokemon.name){
                        props.pokemon.favorit = false;
                      }
                    })
                    props.setAllPokemons(props.allPokemons);
                  }}
                />
            }
            
          </Grid>
          <Grid
            item
            lg={11}
            xs={11}
          >
            <Typography gutterBottom variant="h5" component="div" style={{textAlign: "center"}}>
              {props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)}
            </Typography>
          </Grid>
          <Grid
            item
            lg={12}
            xs={12}
          >
            <Typography variant="h6" color="text.secondary">
              Abilities
            </Typography>
          </Grid>
          {
          props.pokemon.powers !== undefined? 
            props.pokemon.powers.map((ability, index) => 
              <>
                <Grid item key={`${index}${props.pokemon.name}Icon`} lg={2} xs={2} style={{textAlign: "left", color: "#ffffff"}}>
                  <Brightness7Icon style={{fontSize: "small"}}/>
                </Grid>
                <Grid item key={`${index}${props.pokemon.name}Ability`} lg={10} xs={10} style={{textAlign: "left"}}>
                  {ability}
                </Grid>
              </>
            )
          : ""
        }

        </Grid>
        
        
        
        
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
                  <Button size="small" variant="contained" color="color">Evolutions</Button>
              </Grid>
              <Grid item lg={6} xs={6} style={{textAlign: "right"}}>
                  {/* <Button size="small">Type</Button> */}
                  {props.pokemon.types !== undefined ? 
                    props.pokemon.types.map((type, index) => 
                      <IconButton 
                        key={`${index}${props.pokemon.name}Type`}
                        onClick={(v) => {
                          let pokemonsByType = [];

                          pokemons.data.filter((pokemon) => {
                            if(pokemon.types.includes(type)){
                              pokemonsByType.push(pokemon)
                            }
                          })
                          props.setPokemonByType(pokemonsByType);
                          props.setPokeLength(pokemonsByType.length);
                          props.setType(type);
                        }}
                      >
                        <img alt={type} src={Types[type].image} width="25"/>
                      </IconButton>
                    )
                  : ""}
              </Grid>            
          </Grid>

      </CardActions>
    </Card>
  );
}

const Types = {
  bug: {
      color: "#76a77a",
      image: "types/bug.png",
  },
  dark: {
      color: "#b4b6b6",
      image: "types/dark.png",
  },
  dragon: {
      color: "#c3ffff",
      image: "types/dragon.png",
  },
  electric: {
      color: "#ffff99",
      image: "types/electric.png",
  },
  fairy: {
      color: "#ff819d",
      image: "types/fairy.png",
  },
  fighting: {
      color: "#ffa17b",
      image: "types/fighting.png",
  },
  fire: {
      color: "#ff8679",
      image: "types/fire.png",
  },
  flying: {
      color: "#aac3de",
      image: "types/flying.png",
  },
  ghost: {
      color: "#928bcc",
      image: "types/ghost.png",
  },
  grass: {
      color: "#80de96",
      image: "types/grass.png",
  },
  ground: {
      color: "#ffd488",
      image: "types/ground.png",
  },
  ice: {
      color: "#eeffff",
      image: "types/ice.png",
  },
  normal: {
      color: "#d6aeb9",
      image: "types/normal.png",
  },
  poison: {
      color: "#c087ed",
      image: "types/poison.png",
  },
  psychic: {
      color: "#ff8fcb",
      image: "types/psychic.png",
  },
  rock: {
      color: "#a86e5c",
      image: "types/rock.png",
  },
  steel: {
      color: "#bed5cd",
      image: "types/steel.png",
  },
  water: {
      color: "#a0adff",
      image: "types/water.png",
  },
}