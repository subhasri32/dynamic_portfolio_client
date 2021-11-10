import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import {
    Typography,
    Card,
    CardContent,
    Box,
    Grid
  } from '@material-ui/core';
  const styles = makeStyles(theme => ({
    rootCard: {
        width: 250,
      },
      menuButton: {
        marginRight: theme.spacing(2)
      },
      title: {
        flexGrow: 1
      },
      linespace: {
        padding: theme.spacing(1, 1)
      },
      rootCard: {
          width: 250,
        },
        bulletCard: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        titleCard: {
          fontSize: 20,
        },
        posCard: {
          marginBottom: 12,
        },
        footeBox: {
          width: '100%',
          backgroundColor: '#3f51b5',
          position: 'fixed',
          bottom: '2px',
          marginLeft: '0px',
          marginBottom: '-2px',
          height: '130px'
        },
        footerList: {
          textAlign : 'center'
        },
    }))
  export default function UserDetails () {
    const [userList, setuserList] = useState([])
    // const [cart, setCart] = useState(0)

    useEffect (async ()=> {
        var response = await axios.get('http://localhost:3000/user/getuser')
        setuserList(response.data);
        console.log(userList)
    }, [])

    const classes = styles();
    return(
    <>
    <Box>
       <Grid container spacing={2} style={{margin: '30px'}}>
                {userList.map(row => 
                (
                <Grid item key={row._id}>
                <Card className={classes.rootCard} variant="outlined">
                <CardContent>  
                    <Typography variant="h5" component="h2">
                    {row.name}
                    </Typography>
                    <Typography className={classes.posCard} color="textSecondary">
                    Designation : {row.designation}
                    </Typography>
                    <Typography variant="body2" component="p">
                    Project Details:{row.projectDetails}
                    </Typography>
                    <Typography className={classes.titleCard} color="textSecondary" gutterBottom>
                    Education Details : {row.educationDetails}
                    </Typography>
                </CardContent>
                </Card>
                </Grid>
                ))}
        </Grid>
        </Box>
    </>
    );
}

