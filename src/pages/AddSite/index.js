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
import { BsFillEnvelopeOpenFill, BsFillGrid1X2Fill } from 'react-icons/bs';


const useStyles = makeStyles((theme) => ({
    rootT: {
        // flexGrow: 1,
        // margin: 25,
        backgroundColor: '#Blue'
    },
    root: {
        // flexGrow: 1,
        // margin: 25,
        backgroundColor: '#E5E5E5'
    },
    textHeader: {
        fontSize: 15,
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
    paperMidleL: {
        padding: theme.spacing(4),
        color: theme.palette.text.secondary,
        marginLeft: '55%',
        // marginRight: '25%',
        // width: '45%',
        marginTop: 80,
        background: '#FFFFFF',
        // boxShadoe: '0px 14px 50px rgba(25, 43, 67, 0.08)',
        borderRadius: 0,
        marginBottom: '10%',
    },
    paperMidleR: {
        padding: theme.spacing(4),
        color: theme.palette.text.secondary,
        // marginLeft: '25%',
        marginRight: '55%',
        // width: '45%',
        marginTop: 80,
        background: '#FFFFFF',
        // boxShadoe: '0px 14px 50px rgba(25, 43, 67, 0.08)',
        borderRadius: 0,
        marginBottom: '10%',
    },

    iconEmail: {

        marginLeft: '46%',
        // marginRight: '10%',
        marginTop: '10%',
        marginBottom: '15%',
        textAlign: 'center',
        // color: 'Balck',
        // fontWeight: 'bold',
    },

    textHead: {
        fontSize: 27,
        marginLeft: 2,
        marginTop: 65,
        color: '#4A4A4A',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textHeadB: {
        fontSize: 17,
        marginLeft: 2,
        // marginTop: 45,
        color: '#4A4A4A',
        textAlign: 'center',
        // fontWeight: 'bold',
    },
    paperMidleT: {
        padding: theme.spacing(0.7),
        color: theme.palette.text.secondary,
        // marginLeft: '55%',
        // marginRight: '25%',
        width: '100%',
        // marginTop: 80,
        background: '#436A9F',
        // boxShadoe: '0px 14px 50px rgba(25, 43, 67, 0.08)',
        borderRadius: 0,
        // marginBottom: '10%',
    },
}));

const AddSite = () => {

    const classes = useStyles();

    return <div className={classes.root} >

        <Grid item xs>
            <Paper className={classes.paperMidleT}>
           
            </Paper>
        </Grid>

        <Grid container spacing={3}>

            <Grid item xs>

                <p className={classes.textHead}>
                    Add Hypertarget to your HTML Website
    </p>
                <p className={classes.textHeadB}>
                    It’s the only time you’ll be asked to use code.
    </p>

            </Grid>

        </Grid>

        <Grid container spacing={2}>

            <Grid item xs>
                <Paper className={classes.paperMidleL}>

                    {/* <SocialIcon className={classes.iconEmail} network="email" style={{ height: 45, width: 45,  textAlign: 'center', }}/> */}
                    <BsFillGrid1X2Fill className={classes.iconEmail} style={{ fontSize: '40', color: '#436A9F' }} />

                    <Typography className={classes.textHeader}>
                        I’m Ready to Add The
                         Tracking Code
                </Typography>

                </Paper>

            </Grid>

            <Grid item xs>
                <Paper className={classes.paperMidleR}>

                    {/* <SocialIcon className={classes.iconEmail} network="email" style={{ height: 45, width: 45,  textAlign: 'center', }}/> */}
                    <BsFillEnvelopeOpenFill className={classes.iconEmail} style={{ fontSize: '40', color: '#436A9F' }} />

                    <Typography className={classes.textHeader}>
                        Send Installation
                         Instructions Via Email
                </Typography>


                </Paper>


            </Grid>
        </Grid>
    </div>
}

export default AddSite


