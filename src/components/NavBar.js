import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { 
    Grid,
    TextField
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function NavBar() {
    return (
        <ThemeProvider theme={myTheme}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Grid 
                        container 
                        spacing={1}
                        direction="row"
                        alignItems="center"
                    >
                        <Grid item lg={1} xs={6}>
                            <img src="/pokeball.png" width="55"/>
                        </Grid>
                        <Grid item lg={2} xs={6}>
                            <Typography variant="h4">Pokedex</Typography>
                        </Grid>
                        <Grid item lg={9} xs={12}>
                            <TextField 
                                fullWidth 
                                id="outlined-basic"
                                label="Search by name or number" 
                                variant="standard" 
                                margin="dense"
                                color="color" 
                                focused 
                            />
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
