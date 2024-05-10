import React, {useState} from 'react';
import Navbar from '../features/navbar/navbar'
import Sidebar from '../features/sideBar/sidebar';
import { Hidden, Typography, Grid, Toolbar, Button, AppBar } from '@material-ui/core'

const Site = () =>{
    const [openNavRight, setOpenNavRight] = useState(false);

    return (
        <div>
        <Grid container spacing={0}>
            <Hidden lgUp>
                {/* Hidden on large screens and up */}
            <Navbar />
            </Hidden>

        <Hidden xsDown>
          <Grid item xs={2} style={{backgroundColor: "black", height:"100vh"}}>
              {/* Visible only on extra small screens and down */}
              <Sidebar />
          </Grid>
        </Hidden>
          <Grid item xs={10}>
          <Hidden xsDown>

          <AppBar position="static" style={{backgroundColor: "rgb(23,58,86)", marginLeft: "20px", marginRight: "20px", width:"80vw"}}>
            <Toolbar>
                
                {/* Website title or logo aligned to the right */}
                <Typography variant="h6" component="div" sx={{ flex: 1, textAlign: 'right', fontWeight: "bold" }}>
                Sites
                </Typography>
            </Toolbar>
            </AppBar>
          </Hidden>
          </Grid>
        </Grid>
      </div>
    );
}

export default Site 