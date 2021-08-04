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
// import { CodeEditor } from 'patternfly/react-code-editor';


const useStyles = makeStyles((theme) => ({

    root: {
        // flexGrow: 1,
        // margin: 25,
        backgroundColor: '#E5E5E5'
    },
    textHeader: {
        fontSize: 12,
        marginLeft: 2,
        color: '#436A9F',
        fontWeight: 'bold',
        // textAlign: 'center',
        marginBottom: '5%',

    },

    paperMidle: {
        padding: theme.spacing(4),
        color: theme.palette.text.secondary,
        marginLeft: '8%',
        marginRight: '8%',
        // width: '45%',
        marginTop: 80,
        background: '#FFFFFF',
        // boxShadoe: '0px 14px 50px rgba(25, 43, 67, 0.08)',
        borderRadius: 0,
        marginBottom: '10%',
    },

    textHead: {
        fontSize: 27,
        marginLeft: 5,
        marginTop: 35,
        color: '#4A4A4A',
        fontWeight: 'bold',
    },
    textHeadB: {
        fontSize: 17,
        marginLeft: 5,
        // marginTop: 45,
        color: '#4A4A4A',
        // textAlign: 'center',
        marginBottom: '3%',
    },
    textBody: {
        fontSize: 12,
        marginLeft: 5,
        // marginTop: 45,
        color: '#4A4A4A',
        // textAlign: 'center',
        marginBottom: '3%',
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
    textLine: {
        height: 3,
        borderWidth: 0,
        marginTop: 20,
        color: 'gray',
    },
    span: {

        color: 'blue',
    },
    button: {
        fontSize: 10,
        marginLeft: 8,
        marginTop: 25,
        marginBottom: 15,
        borderRadius: 20,
    },
    buttonTest: {
        fontSize: 10,
        marginLeft: 798,
        marginRight: 8,
        marginTop: 25,
        marginBottom: 25,
        borderRadius: 20,
    },
}));

const SetupPixel = () => {

    const classes = useStyles();

    return <div className={classes.root} >

        <Grid item xs>
            <Paper className={classes.paperMidleT}>

            </Paper>
        </Grid>

        <Grid container spacing={2}>

            <Grid item xs>

                <Paper className={classes.paperMidle}>

                    <p className={classes.textHead}>
                        Add Hypertarget to your Website
    </p>
                    <p className={classes.textHeadB}>
                        Setting up Hypertarget is easy and take less than 3 minutes
    </p>

                    <Typography className={classes.textLine}>
                        <hr class="mt-0" ></hr>
                    </Typography>

                    <Button variant="contained" color="primary" disableElevation className={classes.button}
                        style={{ background: '#436A9F', color: 'white', borderRadius: '4px', }}>
                        COPY CODE
                     </Button>

                    <Typography className={classes.textBody}>
                        Copy and paste the snippet below before your website’s  closing <span className={classes.span}>
                            &lt; /head&gt; </span>  tag. Once installed,  Hypertarget will
                    <br />
                        automatically start receiving data.
                </Typography>

                    <div className="code-editor-wrapper block animate__animated animate__fadeInUp">
                        <div className="code-header">
                            <p>HTML</p>
                        </div>
                        <div className="code-body">
                            <textarea style={{ width: '550px' }} readOnly defaultValue={"<script > (function(b,o,n,g,s,r,c){if(b[s])return;b[s]={};b[s].scriptToken=Xy0yMDk5Nzg2MjQy;b[s].callsQueue=[];b[s].api=function(){b[s].callsQueue.push(arguments);};r=o.createElement(n);c=o.getElementsByTagName(n)[0];r.async=1;r.src=g;r.id=s+n;c.parentNode.insertBefore(r,c);})(window,document,script,https://cdn.oribi.io/Xy0yMDk5Nzg2MjQy/oribi.js ORIBI </script>" } />
                        </div>
                    </div>

                    <Typography className={classes.textHeader}>
                        Email Code instructions
                </Typography>

                    <Button variant="contained" color="primary" disableElevation className={classes.buttonTest}
                        style={{ background: '#436A9F', color: 'white', borderRadius: '4px', }}>
                        TEST CONNECTION
                     </Button>

                </Paper>

            </Grid>

        </Grid>

    </div>
}

export default SetupPixel


