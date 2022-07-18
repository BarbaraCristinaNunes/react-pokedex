import { Box, Paper } from '@mui/material';

export default function PokemonBox() {
    return (
        <Box
            sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: 1,
                width: "100%",
                height: 128,
            },
            }}
            style={{justifyContent: "center"}}
        >
            <Paper 
                elevation={24} 
                style={{
                    maxWidth: "95%",
                    marginTop: 50
                }}
            >
                
            </Paper>
        </Box>
    );
}