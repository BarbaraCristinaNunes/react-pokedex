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
import FavoriteIcon from '@mui/icons-material/Favorite';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';


export default function PokemonCard(props) {
  
  let colors = (types) => {
    let color = "";
    types.forEach((element) => {
      color += `, ${Types[element].color}`;

      if(types.length < 2){
        color += ", #ffffff";
      }

    })
    return color;
  };

  let favoritColor = (favorit) => {
    let favoritStyle = {
      right: 10, 
      top: -5,
      color: "#000",
      '&:hover': {
        color: "#ff0324 !important",
      }
    }
    if(favorit){
      delete favoritStyle['&:hover'];
      favoritStyle.color = "#ff0324";
      return (
        favoritStyle
      );
    }else{
      return (
        favoritStyle
      ); 
    }
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  return (
    <Card 
      sx={{
        maxWidth: "60%",
        background: `linear-gradient(to bottom right${colors(props.pokemon.types)})`,
        border: "solid 2px",
        borderImageSource: `linear-gradient(to bottom right${colors(props.pokemon.types)})`,
        marginLeft: 8,
        transitionDuration: "1s",
        "&:hover": {
          background: `radial-gradient(circle${colors(props.pokemon.types)})`,
          border: "solid 5px",
          borderImageSource: `linear-gradient(to bottom right${colors(props.pokemon.types)})`,
        },
      }}
      >
      <CardMedia
        component="img"
        alt={props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)}
        height="auto"
        image={props.pokemon.image}
        sx={{backgroundColor: "rgba(240, 248, 255, 0.349)"}}
      />
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
            <IconButton 
              sx={favoritColor(props.pokemon.favorit)}
              onClick={(v) => {
                  let favoritesPokemons = localStorage.getItem("favorites").split(",");

                  if(favoritesPokemons.includes(props.pokemon.name)){

                    let newFavoritesPokemons = favoritesPokemons.filter((element) => {
                      return element !== props.pokemon.name;
                    })

                    let allPokemons = props.allPokemons.filter((pokemon) => {
                      if(pokemon.name === props.pokemon.name){
                        pokemon.favorit = false;
                      }
                      return pokemon;
                    });

                    localStorage.setItem("favorites", newFavoritesPokemons)
                    props.setAllPokemons(allPokemons);

                  }else{

                    favoritesPokemons.push(props.pokemon.name);
                    localStorage.setItem("favorites", favoritesPokemons);

                    let allPokemons = props.allPokemons.filter((pokemon) => {
                      if(pokemon.name === props.pokemon.name){
                        pokemon.favorit = true;
                      }
                      return pokemon;
                    })

                    props.setAllPokemons(allPokemons);
                  }
               
              }}
            >
              <FavoriteIcon 
                sx={{fontSize: 20, borderRadius: "50%" }} 
              />
            </IconButton>
            
          </Grid>
          <Grid
            item
            lg={11}
            xs={11}
          >
            <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "center"}}>
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
                <Grid 
                  item 
                  key={`${index}${props.pokemon.name}Icon`} 
                  lg={2} 
                  xs={2} 
                  sx={{textAlign: "left"}}
                >
                  {
                    props.pokemon.types.includes("ice") || props.pokemon.types.includes("electric") ?
                      <Brightness7Icon sx={{fontSize: "small", color: "gray"}}/> 
                    : <Brightness7Icon sx={{fontSize: "small", color: "#ffffff"}}/>
                  }
                  
                </Grid>
                <Grid 
                  item 
                  key={`${index}${props.pokemon.name}Ability`} 
                  lg={10} 
                  xs={10} 
                  sx={{textAlign: "left"}}
                >
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
              justifyContent="center"
          >
              <Grid item lg={6} xs={6}>
                  <Button 
                    size="small" 
                    variant="contained" 
                    color="color"
                    onClick={(e) =>{
                      handleClickOpen()
                    }}
                    disabled={props.pokemon.evolutions.length < 2 ? true : false}
                  >
                    Evolutions
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    scroll={"body"}
                    aria-labelledby="Evolutions"
                    aria-describedby="scroll-dialog-description"
                    maxWidth="md"
                    fullWidth
                  >
                    <DialogActions>
                      <Grid
                        container 
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Grid 
                          item 
                          lg={10} 
                          xs={6} 
                          sx={{textAlign: "center"}}
                        >
                          <DialogTitle id="scroll-dialog-title">Evolutions</DialogTitle>
                        </Grid>
                        <Grid 
                          item 
                          lg={1} 
                          xs={6} 
                          sx={{textAlign: "right"}}
                        >
                          <IconButton onClick={handleClose}>
                            <CloseIcon/> 
                          </IconButton>
                        </Grid>
                      </Grid>
                    </DialogActions>
                    <DialogContent dividers={true}>
                      <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                      >
                        {props.pokemon.evolutions && open === true? 
                          <>
                            <Grid
                              container 
                              direction="row"
                              justifyContent="space-between"
                              alignItems="center"
                            >
                              {props.pokemon.evolutions.map((evolution) => {
                                let evolve = pokemons.data.find(pokemon => pokemon.name === evolution);
                                return (
                                  <Grid
                                    item
                                    lg={4}
                                    md={4}
                                    xs={12}
                                    key={`evolution${props.pokemon.name}${evolution}`}
                                    sx={{textAlign: "center"}}
                                  >
                                    <BootstrapTooltip  
                                      title={evolve.name.charAt(0).toUpperCase() + evolve.name.slice(1)} 
                                      followCursor
                                    >
                                      <IconButton sx={{
                                            transitionDuration: "0.4s",
                                            "&:hover": {
                                              background: `radial-gradient(circle${colors(props.pokemon.types)})`,
                                            }
                                        }}
                                        onClick={(v) => {
                                          let input = [evolve];
                                          props.setPokemon(input);
                                          props.setPokemonInput(evolve.id);
                                          props.setPokemonByType(undefined);
                                          props.setType(undefined);
                                          handleClose();
                                        }}
                                      >
                                        <img alt={evolve.name} src={evolve.image} width="200"/>
                                      </IconButton>
                                    </BootstrapTooltip>
                                  </Grid>
                                )
                              })}
                            </Grid>
                          </>
                          : ""
                        } 
                      </DialogContentText>
                    </DialogContent>
                  </Dialog>
              </Grid>
              <Grid 
                item 
                lg={6} 
                xs={6} 
                sx={{textAlign: "right"}}
              >
                  {props.pokemon.types !== undefined ? 
                    props.pokemon.types.map((type, index) => 
                      <>
                        <Tooltip title={type.charAt(0).toUpperCase() + type.slice(1)}>
                          <IconButton 
                            size="small"
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
                              props.setPokemon(undefined);
                              props.setPokemonInput(undefined);
                            }}
                          >
                            <img alt={type} src={Types[type].image} width="25"/>
                          </IconButton>
                        </Tooltip>
                      </>
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