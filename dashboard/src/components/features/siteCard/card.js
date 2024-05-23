import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Avatar, CardContent, Button  } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';



const useStyles = makeStyles((theme) => ({
    site:{
        
        backgroundColor: '#173A56',
        backgroundImage: 'linear-gradient(0deg, #173A56 0%, #80D0C7 19%, #ffffff 39%, #ffffff 60%, #ffffff 80%, #ffffff 100%)'
        


    }
}))

const SiteCard = () =>{
    const classes = useStyles();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div>
            <Card sx={{ maxWidth: '15rem', margin: '20px', marginTop: '20px'}} className={classes.site}>
                <CardHeader
                    avatar={<Avatar sx={{ bgcolor: 'black'}} >C</Avatar>}
                    title="Site Name"
                    subheader="Site Manager"
                />
                <CardContent>
                
                    <Button  variant="contained" color="success" style={{margin:"10px"}} startIcon={<InsertDriveFileIcon />}></Button>
                    <Button variant="contained" color="primary" startIcon={<UploadFileIcon />} style={{margin:"10px"}}></Button>
                </CardContent>
            </Card>
        </div>

)
}


export default SiteCard