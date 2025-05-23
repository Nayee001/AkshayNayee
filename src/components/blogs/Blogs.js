import React from 'react';
import {Box, Grid, Typography} from "@mui/material";

export default function ComingSoon() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'} style={{height: '100vh'}}>
                <Grid item xs={12}>
                    <Typography variant="h2" align="center" gutterBottom>
                        Coming Soon
                    </Typography>
                    <Typography variant="h5" align="center">
                        I`m working hard to bring you this content. Stay tuned!
                    </Typography>
                    {/* <Typography align="center" style={{fontFamily: "'Dancing Script', cursive", marginTop: '2rem', fontSize: '22px'}}>
                        Akshaykumar Nayee
                    </Typography> */}
                </Grid>
            </Grid>
        </Box>
    );
}
