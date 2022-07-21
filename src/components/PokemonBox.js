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
                    '& > :not(style)': {
                        m: 1,
                        width: "90%",
                        height: 128,
                    },
                    }}
                    style={{justifyContent: "center"}}
                >
                    <Paper 
                        elevation={24} 
                        style={{
                            maxWidth: "90%",
                            marginTop: 50,
                            height: "auto"
                        }}
                    >
                        <Grid
                            container 
                            spacing={1}
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                            style={{margin: 40}}
                        >
                            {
                                props.type ?
                                <Grid
                                    item
                                    lg={12}
                                    xs={12}
                                    style={{textAlign: "center"}}
                                >
                                    <Typography variant='h3' style={{marginBottom: 30}}>
                                        {`${props.type.charAt(0).toUpperCase() +  props.type.slice(1)} type pokemon`}
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
                                                    style={{marginBottom: 50}}
                                                >
                                                    <PokemonCard 
                                                        pokemon={pokemon}
                                                        setAllPokemons={props.setAllPokemons}
                                                        setPokeLength={props.setPokeLength}
                                                        setType={props.setType}
                                                        setPokemonByType={props.setPokemonByType}
                                                        allPokemons={props.pokemon}

                                                    />
                                                </Grid>
                                            )
                                        })
                                    }
                                    {
                                        props.pokemon.length > 1 && props.type === undefined?
                                            <Grid item lg={12} xs={12} style={{textAlign: "center"}}> 
                                                <Button 
                                                    variant="contained" 
                                                    color="primary"
                                                    onClick={(v) => {
                                                        // console.log("pokeLength1 ", props.pokeLength);
                                                        let sum = props.pokeLength + 8;
                                                        let arr = props.pokemon;
                                                        // console.log("sum ", sum, "arr ", arr)
                                                        for(let i = props.pokeLength; i < sum; i++){
                                                            arr.push(pokemons.data[i]);
                                                        }
                                                        props.setAllPokemons(arr);
                                                        props.setPokeLength(sum);
                                                        // console.log("props.pokeLength ", props.pokeLength, "props.pokemon ", props.pokemon)
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