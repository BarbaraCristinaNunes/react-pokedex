import * as React from 'react';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PokemonCard from './PokemonCard';
import pokemons from '../assets/pokemons.json';

export default function PokemonBox(props) {

    return (
        <>
            <ThemeProvider theme={myTheme}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: "center",
                        '& > :not(style)': {
                            width: "90%",
                            height: "auto",
                        },
                    }}
                >
                    <Paper
                        elevation={24} 
                        sx={{
                            marginTop: 5,
                            marginBottom: 5,
                            height: "auto",
                        }}
                    >
                        <Grid
                            container 
                            direction="row"
                            spacing={1}
                            alignItems="center"
                            justifyContent="center"
                            sx={{marginTop: 5}}
                        >
                            {
                                props.type ?
                                <Grid
                                    item
                                    lg={12}
                                    xs={12}
                                    sx={{textAlign: "center"}}
                                >
                                    <Typography variant='h3' sx={{marginBottom: 5, color: "#c50e29"}}>
                                        {
                                            props.type === "favorite" ?
                                                `${props.type.charAt(0).toUpperCase() +  props.type.slice(1)}s pokemons`
                                            : `${props.type.charAt(0).toUpperCase() +  props.type.slice(1)} types pokemons`
                                        }
                                        </Typography>
                                </Grid>
                                : ""
                            }
                            {props.pokemon !== undefined ?
                                <>
                                    {
                                        props.pokemon.map((pokemon, index) => {
                                            return (
                                                <Grid 
                                                    item 
                                                    key={`${index}${pokemon.name}Card`} 
                                                    lg={3} 
                                                    md={6} 
                                                    xs={12} 
                                                    sx={{marginBottom: 5}}
                                                >
                                                    <PokemonCard 
                                                        pokemon={pokemon}
                                                        setAllPokemons={props.setAllPokemons}
                                                        setPokeLength={props.setPokeLength}
                                                        setType={props.setType}
                                                        setPokemonByType={props.setPokemonByType}
                                                        allPokemons={props.pokemon}
                                                        setPokemon={props.setPokemon}
                                                        setPokemonInput={props.setPokemonInput}
                                                    />
                                                </Grid>
                                            )
                                        })
                                    }
                                    {
                                        props.pokemon.length > 1 && props.type === undefined?
                                            <Grid 
                                                item 
                                                lg={12} 
                                                xs={12} 
                                                sx={{textAlign: "center", marginTop: 2, marginBottom: 7}}
                                            > 
                                                <Button 
                                                    variant="contained" 
                                                    color="primary"
                                                    onClick={(v) => {
                                                        let sum = props.pokeLength + 8;
                                                        let arr = props.pokemon;
                                                        for(let i = props.pokeLength; i < sum; i++){
                                                            arr.push(pokemons.data[i]);
                                                        }
                                                        props.setAllPokemons(arr);
                                                        props.setPokeLength(sum);
                                                    }}
                                                >
                                                    Show more
                                                </Button>
                                            </Grid>
                                        : ""
                                    }
                                    
                                </>
                                : ""
                            }
                        </Grid>
                    </Paper>
                </Box>
            </ThemeProvider>
        </>
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