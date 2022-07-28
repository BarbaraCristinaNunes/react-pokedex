import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { 
    Button,
    Grid,
    IconButton,
    MenuItem,
    TextField
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import pokemons from '../assets/pokemons.json';

export default function NavBar(props) {
    const resetPokemons = () => {

        if(props.pokemon || props.type){
            props.setPokemon(undefined);
            props.setPokemonInput(undefined);
            props.setType(undefined);
            props.setPokemonByType(undefined);
            props.setPokeLength(8);
        }
    }
    return (
        <ThemeProvider theme={myTheme}>
            <AppBar position="sticky" color="primary" sx={{width: "100%"}}>
                <Toolbar>
                    <Grid 
                        container 
                        spacing={1}
                        direction="row"
                        alignItems="center"
                    >
                        <Grid 
                            item 
                            lg={1} 
                            xs={3} 
                            sx={{textAlign: "center"}}
                        >
                            <IconButton 
                                onClick={(v) => {
                                    resetPokemons();
                                    window.location.reload(false);
                                }}
                                sx={{
                                    "&:focus": {
                                        animation: "btn 0.5s linear",
                                        "@keyframes btn": {
                                            "0%": {
                                                transform: "rotateZ(0)",
                                            },
                                            "100%": {
                                                transform: "rotateZ(360deg)",
                                            }
                                        }
                                    },
                                }}
                            >
                                <img alt="logo" src="/pokeball.png" width="55"/>
                            </IconButton>                            
                        </Grid>
                        <Grid 
                            item 
                            lg={2} 
                            xs={9} 
                            sx={{textAlign: "center"}}
                        >
                            <Button 
                                color="color"
                                onClick={(v) => {
                                    resetPokemons();
                                    window.location.reload(false);
                                }}
                            >
                                <Typography variant="h4">Pokedex</Typography>
                            </Button>
                        </Grid>
                        <Grid 
                            item lg={7} 
                            xs={8}
                        >
                            <TextField 
                                fullWidth 
                                id="outlined-basic"
                                label="Search by name or number" 
                                variant="standard" 
                                margin="dense"
                                color="color"
                                value={props.pokemonInput !== undefined ? props.pokemonInput : ""} 
                                focused
                                onChange={(v) => 
                                    {
                                        props.setPokemonInput(v.target.value);
                                        props.setType(undefined);
                                        props.setPokemonByType(undefined);
                                        
                                        if(v.target.value){
                                            let arr = pokemons.data.filter((pokemon) => {
                    
                                                if(Number.isInteger(parseInt(v.target.value)) && 
                                                pokemon.id === parseInt(v.target.value)){
                                                    return pokemon;
                                                }
                                                else if(v.target.value.toLowerCase() === pokemon.name.slice(0, v.target.value.length)){
                                                    return pokemon;
                                                }
                                            })

                                            if(arr.length !== 0){
                                                props.setPokemon(arr);
                                            }                                            
                                        }else{
                                            props.setPokemonInput(undefined);
                                            props.setPokemon(undefined);
                                        }                     
                                    }
                                }
                            />
                        </Grid>
                        <Grid 
                                item 
                                lg={2} 
                                xs={4} 
                                sx={{ textAlign: "center"}}
                            >
                                <FormControl 
                                    fullWidth
                                    color="color"
                                    focused
                                >
                                    <InputLabel 
                                        htmlFor="grouped-native-select"
                                    >
                                        Select by
                                    </InputLabel>
                                    <Select 
                                        id="grouped-native-select" 
                                        label="Select by"
                                        value={props.type ? props.type : "All"}
                                        onChange={(v) => {
                                            if(v.target.value === "All"){
                                                props.setPokemonByType(undefined);
                                                props.setType(undefined);
                                                window.location.reload(false);   
                                            }else{
                                                let pokemonsByType = undefined;
                                                if(v.target.value === "favorite"){
                                                    pokemonsByType = pokemons.data.filter((pokemon) => {
                                                        if(pokemon.favorit === true){
                                                            return pokemon;
                                                        }
                                                    });
                                                }else{
                                                    pokemonsByType = pokemons.data.filter((pokemon) => {
                                                        if(pokemon.types.includes(v.target.value)){
                                                            return pokemon;
                                                        }
                                                    })
                                                }
                                                props.setPokemonByType(pokemonsByType);
                                                props.setPokeLength(pokemonsByType.length);
                                                props.setType(v.target.value);
                                                props.setPokemon(undefined);
                                            }                                            
                                        }}
                                    >
                                        <MenuItem value={"All"}>
                                            All
                                        </MenuItem>
                                        <MenuItem value={"favorite"}>
                                            Favorite
                                        </MenuItem>
                                        <MenuItem value={"bug"}>Bug</MenuItem>
                                        <MenuItem value={"dark"}>Dark</MenuItem>
                                        <MenuItem value={"dragon"}>Dragon</MenuItem>
                                        <MenuItem value={"electric"}>Electric</MenuItem>
                                        <MenuItem value={"fairy"}>Fairy</MenuItem>
                                        <MenuItem value={"fighting"}>Fighting</MenuItem>
                                        <MenuItem value={"fire"}>Fire</MenuItem>
                                        <MenuItem value={"flying"}>Flying</MenuItem>
                                        <MenuItem value={"ghost"}>Ghost</MenuItem>
                                        <MenuItem value={"grass"}>Grass</MenuItem>
                                        <MenuItem value={"ground"}>Ground</MenuItem>
                                        <MenuItem value={"ice"}>Ice</MenuItem>
                                        <MenuItem value={"normal"}>Normal</MenuItem>
                                        <MenuItem value={"poison"}>Poison</MenuItem>
                                        <MenuItem value={"psychic"}>Psychic</MenuItem>
                                        <MenuItem value={"rock"}>Rock</MenuItem>
                                        <MenuItem value={"steel"}>Steel</MenuItem>
                                        <MenuItem value={"water"}>Water</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

const myTheme = createTheme({
    palette: {
      primary: {
        main: '#ff5252',
      },
      secondary: {
        main: "#c50e29",
      },
      third: {
        main: "#ff867f",
      },
      color: {
        main: "#ffffff",
      },
    },
});
