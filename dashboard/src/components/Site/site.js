import React, {useState} from 'react';
import Navbar from '../features/navbar/navbar'
import Sidebar from '../features/sideBar/sidebar';
import SiteCard from '../features/siteCard/card'

import { Hidden, Typography, Grid, Toolbar, Button, AppBar } from '@material-ui/core'

const Site = () =>{
    const [openNavRight, setOpenNavRight] = useState(false);

    return (
        <div>
        <Grid container spacing={0}>
            <Hidden lgUp>
         
            <Navbar />
            </Hidden>

          <Hidden xsDown>
  
            <Sidebar />
            
          </Hidden>
          
          <Grid item xs={10}>
            <Hidden xsDown>
            <AppBar position="static" style={{backgroundColor: "rgb(23,58,86)", margin: "20px", marginTop: '0px', width:"80vw"}}>
              <Toolbar>
                  
          
                  <Typography variant="h6" component="div" style={{ flex: 1, textAlign: 'right', fontWeight: "bold" }}>
                  Sites
                  </Typography>
              </Toolbar>
              </AppBar>
            </Hidden>
          
            <SiteCard />
          </Grid>
        </Grid>
      

      </div>
    );
}

export default Site 