import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemText, AppBar, Toolbar, Typography, Hidden, Avatar, Divider } from '@material-ui/core';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    overflow: 'hidden'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "black"
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    minHeight: '100vh',
  },
  userAvatar: {
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(5),
    width: theme.spacing(15),
    height: theme.spacing(15),
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
  ListItem: {
    fontWeight: 'bold',
    '&:hover': {
        color: 'green', // Change the background color on hover
      },
  }
}));

function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.root} xs='2'>
      <AppBar position="fixed" className={classes.appBar}>
        
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
            paper: classes.drawerPaper,
        }}
        anchor="left"
        >
      
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color:'white', fontWeight: 'bolder'}} xs='2'>
            <Avatar alt="User Image" src="https://t4.ftcdn.net/jpg/02/62/76/57/360_F_262765707_7ipekmhWAQbIy61VGRdpWo4eHeuN6Ub3.jpg" className={classes.userAvatar} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color:'white', fontWeight: 'bolder'}}>
            <Typography variant="h8" align='center' >
                Huncho Test
            </Typography>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'orange' }}>
            <Typography variant="h7" align='center' color='white'>
                Project Manager
                
            </Typography>
        </div>
         
        <div className={classes.drawerContainer} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold', marginTop:"5vh" }} >
          <List>
            <ListItem button>
            <ListItemText primary="Home" className='listItem'/>
            </ListItem>
            <ListItem button>
            <ListItemText primary="Site" className='listItem'/>
            </ListItem>
            <ListItem button>
            <ListItemText primary="User" className='listItem'/>
            </ListItem>
            <ListItem button>
            <ListItemText primary="Dashboard" className='listItem'/>
            </ListItem>
          </List>
        </div>
        <Divider/>
        <div style={{ position: 'relative', minHeight: '100px', width: '100%'}}>
        
        <div style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', marginBottom: '20px', width: '100%' }}>
          <Facebook fontSize="small" style={{ color: '#1877f2', margin: '10px' }} />
          <Twitter fontSize="small" style={{ color: '#1da1f2', margin: '10px' }} />
          <Instagram fontSize="small" style={{ color: '#c32aa3', margin: '10px' }} />
          <LinkedIn fontSize="small" style={{ color: '#0077b5', margin: '10px' }} />
        </div>
      </div>
      </Drawer>
    </div>
  );
}

export default Sidebar;
