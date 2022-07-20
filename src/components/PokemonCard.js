import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, IconButton } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function PokemonCard(props) {
  // console.log("card ", props.pokemon)
  let name = props.pokemon.name !== undefined ? props.pokemon.name.charAt(0).toUpperCase() +  props.pokemon.name.slice(1)
  : "";
  let image = props.pokemon.sprites !== undefined ? props.pokemon.sprites['front_default'] : "";
  let abilities = (pokemon) => {
    let ability = [];
    if(pokemon.abilities){
      pokemon.abilities.forEach((element) => 
        
        ability.push(element.ability.name.charAt(0).toUpperCase() + element.ability.name.slice(1))
      )
    }
    return ability;
  }
  let types = (pokemon) => {
    let type = [];
    if(pokemon.types){
      if(pokemon.types.length > 1){
        pokemon.types.forEach((element) => 
        
        type.push(element.type.name)
        )
        return type;
      }else{
        type.push(pokemon.types[0].type.name);
        return type
      }
    }
    
  }
  let mainType = types(props.pokemon)[0];

  let colors = () => {
    let color = "";
    types(props.pokemon).forEach((element) => {
      color += `, ${Types[element].color}`;

      if(types(props.pokemon).length < 2){
        color += ", #ffffff";
      }

    })
    return color;
  };

  
    // console.log(Types.fighting.color, mainType)
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
        alt={name}
        height="auto"
        image={image}
        style={{backgroundColor: "#ffffff"}}
      >
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign: "center"}}>
          {name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Power
        </Typography>
        {
          abilities(props.pokemon) !== undefined? 
            abilities(props.pokemon).map((ability, index) => 
              <Grid
                container 
                key={`${index}Ability`}
                spacing={1}
                direction="row"
                alignItems="baseline" 
              >
                <Grid item lg={"auto"} xs={"auto"} style={{textAlign: "left", color: "#ffffff"}}>
                  <Brightness7Icon style={{fontSize: "small"}}/>
                </Grid>
                <Grid item lg={"auto"} xs={"auto"} style={{textAlign: "left"}}>
                  {ability}
                </Grid>
              </Grid>

            )
          : ""
        }
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
                  {types(props.pokemon) !== undefined ? 
                    types(props.pokemon).map((type, index) => 
                      <IconButton key={`${index}Type`}>
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
      color: "#bab9dd",
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