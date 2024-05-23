import { useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import icon from '../image/icon.png';
import { Grid } from '@mui/material';





export default function HomePage() {

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(true)}>
      <List>
        {['Dashboard', 'All Files', 'Trash'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* <List>
        {['Dashboard', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );
  return (
    <>
    <div>
      <Button onClick={toggleDrawer(true)}>MENU</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
    <Card sx={{ maxWidth: 1200, mx: 'auto', p: 28 }}> {/* Adjust maxWidth and mx for layout */}
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* First group of icons */}
      <Grid container spacing={8}>
        <Grid item xs={12} sm={6} md={2}>
          <CardMedia
            component="img"
            image={icon}
            alt="Icon 1"
            sx={{ width: '100%', height: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <CardMedia
            component="img"
            image={icon}
            alt="Icon 2"
            sx={{ width: '100%', height: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <CardMedia
            component="img"
            image={icon}
            alt="Icon 3"
            sx={{ width: '100%', height: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <CardMedia
            component="img"
            image={icon}
            alt="Icon 4"
            sx={{ width: '100%', height: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <CardMedia
            component="img"
            image={icon}
            alt="Icon 5"
            sx={{ width: '100%', height: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <CardMedia
            component="img"
            image={icon}
            alt="Icon 6"
            sx={{ width: '100%', height: 'auto' }}
          />
        </Grid>
      </Grid>

      {/* Second group of icons with a margin-top to create space */}
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={2}>
            <CardMedia
              component="img"
              image={icon}
              alt="Icon 7"
              sx={{ width: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <CardMedia
              component="img"
              image={icon}
              alt="Icon 8"
              sx={{ width: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <CardMedia
              component="img"
              image={icon}
              alt="Icon 9"
              sx={{ width: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <CardMedia
              component="img"
              image={icon}
              alt="Icon 10"
              sx={{ width: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <CardMedia
              component="img"
              image={icon}
              alt="Icon 11"
              sx={{ width: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <CardMedia
              component="img"
              image={icon}
              alt="Icon 12"
              sx={{ width: '100%', height: 'auto' }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Card>
    </>
  );
}
