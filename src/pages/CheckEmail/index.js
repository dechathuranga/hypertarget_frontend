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
        marginBottom: '9%',
        // fontWeight: 'bold',
        
    },
    paperMidle: {
        padding: theme.spacing(4),
        color: theme.palette.text.secondary,
        marginLeft: '25%',
        marginRight: '25%',
        // width: '45%',
        marginTop:80,
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
    }

}));


const CheckEmail = () => {

    const classes = useStyles();

    return <div className={classes.root} >

        <Grid container spacing={3}>

            <Grid item xs>
                <Paper className={classes.paperMidle}>

                {/* <SocialIcon className={classes.iconEmail} network="email" style={{ height: 45, width: 45,  textAlign: 'center', }}/> */}
                <BsFillEnvelopeOpenFill className={classes.iconEmail}  style={{fontSize:'40', color: '#436A9F' }} />

                    <Typography className={classes.textHeader}>
                    Please check your email
                </Typography>
                    <Typography className={classes.textBody}>
                    By using passwordless login it increases the security of <br /> your account
                </Typography>

                </Paper>
            </Grid>

        </Grid>
    </div>
}

export default CheckEmail


