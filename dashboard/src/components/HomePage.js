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
import { CardActionArea } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';



export default function HomePage() {

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(true)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 4 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
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
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" alt="Paella dish" height="194" image="data:image/jpeg;base64,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" />
        
      </CardActionArea>
      </Card>

    </>
  );
}
