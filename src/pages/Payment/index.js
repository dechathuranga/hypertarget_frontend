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
import { BsArrowRight } from 'react-icons/bs';

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        // margin: 25,
        backgroundColor: '#F8F8F8'
    },
    paperTop: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
        marginTop: 25,
        marginLeft: 70,
        marginRight: 70,
        background: '#436A9F',
        borderRadius: 0,
        // marginBottom: 30,

    },
    textHeader: {
        fontSize: 20,
        marginLeft: 2,
        marginTop: 25,
        marginBottom: 150,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    paperDLeft: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
        marginTop: -90,
        marginLeft: 180,
        marginRight: 10,
        background: '#FFFFFF',
        boxShadoe: '0px 14px 50px rgba(25, 43, 67, 0.08)',
        borderRadius: 14,
        marginBottom: 30,
        width: '80%',

    },
    paperDRight: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
        marginTop: -90,
        marginLeft: 110,
        marginRight: 20,
        background: '#FFFFFF',
        boxShadoe: '0px 14px 50px rgba(25, 43, 67, 0.08)',
        borderRadius: 14,
        marginBottom: 30,
        width: '50%',
    },
    textDownLabel: {
        fontSize: 20,
        marginLeft: 25,
        marginTop: 25,
        // marginBottom: 150,
        color: 'Black',
        fontWeight: 'bold',
        // textAlign: 'center',
    },
    textDownLabelP: {
        fontSize: 20,
        marginLeft: 25,
        marginTop: 25,
        marginBottom: 30,
        color: 'Black',
        fontWeight: 'bold',
        // textAlign: 'center',
    },
    textPrice: {
        fontSize: 30,
        marginLeft: 25,
        marginTop: 10,
        color: 'black',
        // marginBottom: 150,
    },
    textLine: {
        height: 3,
        borderWidth: 0,
        marginTop: 10,
        color: 'gray',
    },
    textPointHeader: {
        fontSize: 21,
        marginLeft: 25,
        marginTop: 20,
        color: 'black',
    },
    textPointText: {
        fontSize: 18,
        marginLeft: 25,
        marginTop: 10,
        color: 'black',
    },
    textPointTextB: {
        fontSize: 18,
        marginLeft: 25,
        marginTop: 10,
        marginBottom: 25,
        color: 'black',
    },
    bullet: {
        fontSize: '10px',
        color: '#0288F7',
        margin: '-5px 5px 5px 0px',
    },
    field: {
        width: '90%',
        height: '36px',
        borderRadius: '4px',
        position: 'relative',
        backgroundColor: '#DAE6EC',
        transition: '0.3s all',
        marginLeft: 15,
        marginBottom: 15,
    },
    textLabel: {
        fontSize: 16,
        marginLeft: 15,
        marginTop: 5,
        color: 'black',
    },
    button: {
        fontSize: 16,
        marginLeft: 15,
        marginTop: 25,
        marginBottom: 15,
        borderRadius: 20,
    },
    textHeadSmall: {
        fontSize: 14,
        marginLeft: 130,
        marginTop: 10,
        color: 'white',
    },
}));


const Payment = () => {

    const classes = useStyles();


    return <div className={classes.root} >

    
        <Grid item xs>
            <Paper className={classes.paperTop}>

                <p className={classes.textHeadSmall}> Plans > Checkout </p>


                <Typography className={classes.textHeader}>
                    Enter Your Payment Details Below
                    </Typography>


            </Paper>
        </Grid>

        <Grid container spacing={3}>


            <Grid item xs>
                <Paper className={classes.paperDLeft}>

                    <Typography className={classes.textDownLabelP}>
                        Payment Information
                    </Typography>

                    <label>
                        <p className={classes.textLabel}> Name* </p>
                        <input placeholder='Enter Your Full Name' className={classes.field} type="text" name="name" />
                    </label>

                    
                    <label>
                        <p className={classes.textLabel}> Email* </p>
                        <input placeholder='Enter Your Email Address' className={classes.field} type="text" name="name" />
                    </label>

                      <label>
                        <p className={classes.textLabel}> Card Details* </p>
                        <input 
                        placeholder= "&#61442; 0000 0000 0000 0000              MM/YY   CVV   ZIP Code"
                         className={classes.field} type="text" name="name" />
               
                    </label>

                      <Button variant="contained" color="primary" disableElevation className={classes.button}
                      style={{background:'#24285B', color: 'white', borderRadius: '60px',  }}>
                        SUBMIT  <BsArrowRight  style={{fontSize:'25', marginLeft: 5 }} />
                     </Button>

                </Paper>
            </Grid>

            <Grid item xs>
                <Paper className={classes.paperDRight}>

                    <Typography className={classes.textDownLabel}>
                        You have to pay
                    </Typography>

                    <Typography className={classes.textPrice}>
                        $99/mo
                     </Typography>

                    <Typography className={classes.textLine}>
                        <hr class="mt-0" ></hr>
                    </Typography>
                    <Typography className={classes.textPointHeader}>
                        What’s included
                </Typography>

                    <Typography className={classes.textPointText}>
                        <span className={classes.bullet} >{'\u2B24'} </span> 6-Month Data History
                </Typography>

                    <Typography className={classes.textPointText}>
                        <span className={classes.bullet} >{'\u2B24'} </span> 100% support
                </Typography>

                    <Typography className={classes.textPointText}>
                        <span className={classes.bullet} >{'\u2B24'} </span> Custom Reports
                </Typography>

                    <Typography className={classes.textPointTextB}>
                        <span className={classes.bullet} >{'\u2B24'} </span> Funnel Optimization
                </Typography>

                </Paper>
            </Grid>
        </Grid>
    </div>
}

export default Payment


