import { Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Sections() {
    return (
        <div>

            <Container>
                <Grid container sx={{display:'flex',alignItems:'center'}}>
                    <Grid item md={4} lg={4} xl={4} sm={6} xs={12}>
                        <Typography sx={{fontWeight:'bold',fontSize:24,color:'#333333'}}>CONSUMER ELECTRONICS <Divider variant='fullWidth' sx={{py:'2px'}} /> </Typography>
                    </Grid>

                    <Grid item md={8} lg={8} xl={8} sm={6} xs={12}>
                        <Divider variant='fullWidth' sx={{py:'2px'}} />
                    </Grid>
                </Grid>
            </Container>
            
        </div>
    )
}
