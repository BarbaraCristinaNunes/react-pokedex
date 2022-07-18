import * as React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PokemonCard from './PokemonCard';
import Pokemon from './Pokemon';
export default function PokemonBox() {
    return (
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
                        <Grid 
                            item 
                            lg={12} 
                            xs={12} 
                            style={{ textAlign: "center", marginBottom: 50}}
                        >
                            <FormControl sx={{ m: 1, minWidth: 120 }} color="third" focused>
                                <InputLabel htmlFor="grouped-native-select">Select by</InputLabel>
                                <Select native defaultValue="" id="grouped-native-select" label="Select by">
                                    <option aria-label="None" value="" />
                                    <option value={3}>
                                        Favorite
                                    </option>
                                    <optgroup label="Type">
                                        <option value={1}>Option 1</option>
                                        <option value={2}>Option 2</option>
                                    </optgroup>                        
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={3} md={6} xs={12} style={{marginBottom: 50}}>
                            {/* <Pokemon/> */}
                            <PokemonCard/>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
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