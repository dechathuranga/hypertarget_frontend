import React, { Fragment } from "react"
import Logo from "../../components/features/Logo"
import SignInButton from "../../components/features/Signin"
import SignUpButton from "../../components/features/Signup"
import SearchField from "../../components/features/Search"
import Navigation from "../../components/features/Navigation"
import { LoginLink } from "../../components/features/Login"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import { SocialIcon } from 'react-social-icons';

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        // margin: 25,
        backgroundColor: 'white'
    },
    paper: {
        // padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    textLogo: {
        fontSize: 25,
        marginLeft: 30,
        marginTop: 50,
        marginBottom: 20,
        color: 'Balck',
        fontWeight: 'bold',
    },
    textP: {
        fontSize: 15,
        marginLeft: 130,
        marginTop: 50,
        color: 'Balck',
        fontWeight: 'bold',
    },
    textF: {
        fontSize: 15,
        // marginLeft: 30,
        marginTop: 50,
        color: 'Balck',
        fontWeight: 'bold',
    },
    textPt: {
        fontSize: 10,
        marginLeft: 130,
        marginTop: 10,
        color: 'Balck',
        // fontWeight: 'bold',
    },
    textFt: {
        fontSize: 10,
        // marginLeft: 30,
        marginTop: 10,
        color: 'Balck',
        // fontWeight: 'bold',
    },
    textLogoT: {
        fontSize: 10,
        marginLeft: 30,
        marginTop: 2,
        color: 'Balck',
        // fontWeight: 'bold',
    },
    textTrade: {
        fontSize: 20,
        marginLeft: 30,
        marginTop: 20,
        color: 'gray',
        // fontWeight: 'bold',
    },
    iconFacebook: {
       
        marginLeft: 30,
        marginTop: 30,
        // color: 'Balck',
        // fontWeight: 'bold',
    },
    iconO: {
       
        marginLeft: 20,
        marginTop: 30,
        // color: 'Balck',
        // fontWeight: 'bold',
    },
}));

const Footer = () => {
    const classes = useStyles();

    return <div className={classes.root} >
      <Grid container >
        <Grid item xs>
        <p className={classes.textLogo}>
        HYPERTARGET
        
    </p>
    <p className={classes.textLogoT}> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
    <p className={classes.textLogoT}> sed do eiusmod tempor incididunt ut labore</p>

    <SocialIcon className={classes.iconFacebook} network="facebook" style={{ height: 25, width: 25 }}/>
    <SocialIcon className={classes.iconO} network="twitter" style={{ height: 25, width: 25 }}/>
    <SocialIcon className={classes.iconO} network="instagram" style={{ height: 25, width: 25 }}/>

    <p className={classes.textTrade}>©2021 HYPERTARGET</p>

        </Grid>
        <Grid item xs={3}>
        <p className={classes.textP}>
        Product
    </p>
    <p className={classes.textPt}> Downloard</p>
    <p className={classes.textPt}> Pricing</p>
    <p className={classes.textPt}> Server</p>
    <p className={classes.textPt}> Countries</p>
    <p className={classes.textPt}> Blog</p>
        </Grid>
        <Grid item xs={3}>
        <p className={classes.textF}>
        Feature
    </p>
    <p className={classes.textFt}> Menu 1</p>
    <p className={classes.textFt}> Menu 1</p>
    <p className={classes.textFt}> Menu 1</p>
    <p className={classes.textFt}> Menu 1</p>
    <p className={classes.textFt}> Menu 1</p>
        </Grid>
      </Grid>


    </div>
}

export default Footer