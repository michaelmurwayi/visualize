import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'black', // Change the background color of the app bar
  },
  title: {
    flexGrow: 1,
  },
  navbuttonContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  navbutton: {
    fontSize: '10px',
    fontWeight: 'bold',
    color: 'white',
    marginRight: theme.spacing(2),
    '&:hover': {
      backgroundColor: 'green', // Change the background color on hover
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Visualize
          </Typography>
          <Hidden smDown>
            <div className={classes.navbuttonContainer}>
              <Button className={classes.navbutton} variant="outlined">Home</Button>
              <Button className={classes.navbutton} variant="outlined">Dashboard</Button>
              <Button className={classes.navbutton} variant="outlined">Site</Button>
            </div>
          </Hidden>
          <Hidden only="lg">

          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            >
            <MenuIcon />
          </IconButton>
          <Menu
            id="responsive-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            >
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>Site</MenuItem>
            <MenuItem onClick={handleMenuClose}>User</MenuItem>
            <MenuItem onClick={handleMenuClose}>Dashboard</MenuItem>
          </Menu>
        </Hidden>
        </Toolbar>
        
      </AppBar>
    </div>
  );
}

export default Navbar;
