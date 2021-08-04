import React, { useState } from "react"
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { SocialIcon } from 'react-social-icons';
import { BsFillEnvelopeOpenFill } from 'react-icons/bs';


const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        // margin: 25,
        backgroundColor: '#436A9F'
    },
    textHeaderL: {
        fontSize: 40,
        marginLeft: 2,
        marginTop: 30,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '8%',
        
    },
    textHeader: {
        fontSize: 20,
        marginLeft: 2,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '5%',
        
    },
    textBody: {
        fontSize: 15,
        marginLeft: 2,
        color: '#4F5665',
        textAlign: 'center',
        // marginBottom: '1%',
        // fontWeight: 'bold',
        
    },
    textBodyB: {
        fontSize: 15,
        marginLeft: 2,
        color: '#4F5665',
        textAlign: 'center',
        marginBottom: '7%',
        // fontWeight: 'bold',
        
    },
    paperMidle: {
        padding: theme.spacing(4),
        color: theme.palette.text.secondary,
        marginLeft: '15%',
        marginRight: '15%',
        // width: '45%',
        marginTop:40,
        background: '#FFFFFF',
        // boxShadoe: '0px 14px 50px rgba(25, 43, 67, 0.08)',
        borderRadius: 6,
        marginBottom: '10%',
    },

    iconEmail: {
       
        marginLeft: '46%',
        // marginRight: '10%',
        marginTop: '5%',
        marginBottom: '3%',
        textAlign: 'center',
        // color: 'Balck',
        // fontWeight: 'bold',
    },
    textHead: {
        fontSize: 15,
        marginLeft: 2,
        marginTop: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        fontSize: 16,
        marginLeft: 355,
        marginTop: 35,
        marginBottom: 45,
        borderRadius: 20,
        // wight: 65,
    },

}));


const LoginEmail = () => {

    const classes = useStyles();

    return <div className={classes.root} >

        <Grid container spacing={3}>

       

            <Grid item xs>

             <p className={classes.textHead}>
             Click the link below to be instantly logged in
    </p>

                <Paper className={classes.paperMidle}>

                <Typography className={classes.textHeaderL}>
                    HYPERTARGET
                </Typography>

                 <Typography className={classes.textBody}>
                    Sign in as
                </Typography>
                    <Typography className={classes.textHeader}>
                    johndoe@gmail.com
                </Typography>

                <Button variant="contained" color="primary" disableElevation className={classes.button}
                      style={{background:'#24285B', color: 'white', borderRadius: '60px',  }}>
                        Sign In
                     </Button>

                    <Typography className={classes.textBodyB}>
                    IF you did not request this email you can safely ignore it.
                </Typography>

                </Paper>
            </Grid>

        </Grid>
    </div>
}

export default LoginEmail


