import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        // margin: 25,
        backgroundColor: '#436A9F'
    },
    paperLeft: {
        padding: theme.spacing(4),
        color: theme.palette.text.secondary,
        marginTop: 30,
        marginLeft:50,
        marginRight:30,
        background: '#FFFFFF',
        boxShadoe: '0px 14px 50px rgba(25, 43, 67, 0.08)',
        borderRadius: 14,
        marginBottom: 30,

    },
    paperRight: {
        padding: theme.spacing(4),
        color: theme.palette.text.secondary,
        marginTop: 30,
        marginLeft:30,
        marginRight:50,
        background: '#FFFFFF',
        boxShadoe: '0px 14px 50px rgba(25, 43, 67, 0.08)',
        borderRadius: 14,
        marginBottom: 30,

    },
    paperMidle: {
        padding: theme.spacing(4),
        color: theme.palette.text.secondary,
        // marginLeft:40,
        // marginRight:20,
        background: '#FFFFFF',
        boxShadoe: '0px 14px 50px rgba(25, 43, 67, 0.08)',
        borderRadius: 14,
        marginBottom: 30,
    },
    textHeader: {
        fontSize: 20,
        marginLeft: 2,
        color: '#2F70A6',
        fontWeight: 'bold',
    },
    textPrice: {
        fontSize: 30,
        marginLeft: 2,
        marginTop: 10,
        color: 'black',
        marginBottom: 10,
    },
    textMidle: {
        fontSize: 18,
        marginLeft: 2,
        color: 'gray',
    },
    textLine: {
        height: 3,
        borderWidth: 0,
        marginTop: 20,
        color: 'gray',
    },
    textPointHeader: {
        fontSize: 21,
        marginLeft: 2,
        marginTop: 20,
        color: 'black',
    },
    textPointText: {
        fontSize: 18,
        marginLeft: 2,
        marginTop: 10,
        color: 'black',
    },
    button: {
        fontSize: 18,
        margin: 'center',
        marginTop: 35,
        borderRadius: 20,
        // align: 'center',
        // color: 'black',
    },
    buttonUP: {
        fontSize: 18,
        margin: 'center',
        marginTop: 55,
        borderRadius: 60,
        // marginBottom: 25,
        // align: 'center',
        color: 'black',
        background: '##24285B',
        fontWeight: 'bold',
    },
    textHead: {
        fontSize: 65,
        marginLeft: 2,
        marginTop: 10,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textHeadDescription: {
        fontSize: 20,
        marginLeft: 2,
        marginTop: 10,
        color: 'white',
        textAlign: 'center',
    },
    buttonL: {
        fontSize: 18,
        marginTop: 35,
        marginBottom: 10,
        margin:0,
        left: '40%',
        borderRadius: 20,
        // align: 'center',
        color: '#66d9ff',
    },
    buttonI: {
        fontSize: 18,
        margin: 'center',
        borderRadius: 20,
        // align: 'center',
        // color: 'black',
    },
    paperSelect: {
        // padding: theme.spacing(4),
        color: theme.palette.text.secondary,
        // marginLeft: 40,
        // marginRight:20,
        background: '#DBF2FD',
        boxShadoe: '0px 14px 50px rgba(25, 43, 67, 0.08)',
        borderRadius: 55,
        marginBottom: 30,
        marginTop: 20,
        width: 300,
        height: 60,
        marginLeft: '40%',
    },
    buttonSelect: {
        fontSize: 18,
        margin: 'center',
        borderRadius: 20,
        background: '#24285B',
        // align: 'center',
        // color: 'black',
        // marginBottom: 80,
        marginTop: 10,
        marginLeft: '6%',
    },
}));

const Pricing = () => {

    const classes = useStyles();


    return <div className={classes.root} >

    <p className={classes.textHead}>
        Pricing
        
    </p>

    <p className={classes.textHeadDescription}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    <br /> ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa.        
    </p>


<Grid container spacing={3}>


      <Grid item xs>
    <Paper className={classes.paperSelect}>
    <Button variant="contained" color="primary" disableElevation className={classes.buttonSelect}>
                        MONTHLY
                        </Button>

    <Button variant="contained" color="primary" disableElevation className={classes.buttonSelect}>
                        YEARLY
                        </Button>
    </Paper>
    </Grid>
    </Grid>


        <Grid container spacing={3}>


            <Grid item xs>
                <Paper className={classes.paperLeft}>

                    <Typography className={classes.textHeader}>
                        Basic
                </Typography>

                    <Typography className={classes.textPrice}>
                        $99/mo
                </Typography>

                    <Typography className={classes.textMidle}>
                        Marketing analytics and website flow
                        optimization.
                </Typography>
                    <Typography className={classes.textMidle}>
                        optimization.
                </Typography>

                    <Typography className={classes.textLine}>
                        <hr class="mt-0" ></hr>
                    </Typography>

                    <Typography className={classes.textPointHeader}>
                        What’s included
                </Typography>

                    <Typography className={classes.textPointText}>
                        * 6-Month Data History
                </Typography>

                    <Typography className={classes.textPointText}>
                        * 100% support
                </Typography>

                    <Typography className={classes.textPointText}>
                        * Custom Reports
                </Typography>

                    <Typography className={classes.textPointText}>
                        * Funnel Optimization
                </Typography>

                    <Button variant="contained" color="primary" disableElevation className={classes.button}>
                        ADD TO CARD
    </Button>
                </Paper>
            </Grid>

{/* **************************** */}

            <Grid item xs>
                <Paper className={classes.paperMidle}>

                    <Typography className={classes.textHeader}>
                        Pro
</Typography>

                    <Typography className={classes.textPrice}>
                        $150/mo
</Typography>

                    <Typography className={classes.textMidle}>
                    Deep marketing channel analysis, website
</Typography>
                    <Typography className={classes.textMidle}>
                    optimization, and smart audiences for 
</Typography>
                    <Typography className={classes.textMidle}>
                    growing websites. 
</Typography>

                    <Typography className={classes.textLine}>
                        <hr class="mt-0" ></hr>
                    </Typography>

                    <Typography className={classes.textPointHeader}>
                        What’s included
</Typography>

                    <Typography className={classes.textPointText}>
                        * 1 Year Data History
</Typography>

                    <Typography className={classes.textPointText}>
                        * Journey Analysis
</Typography>

                    <Typography className={classes.textPointText}>
                        * 1:1 Onboarding
</Typography>

                    <Typography className={classes.textPointText}>
                        * Export Unlimited Smart Audiences
</Typography>

                    <Button variant="contained" color="primary" disableElevation className={classes.button}>
                        ADD TO CARD
</Button>
                </Paper>
            </Grid>

            {/* ************************************* */}


            <Grid item xs>
                <Paper className={classes.paperRight}>

                    <Typography className={classes.textHeader}>
                        Custom
</Typography>

                   

 <Typography className={classes.textPrice}>
 
<Button borderRadius="40" disableElevation className={classes.buttonUp}>
GET IN TOUCH ->
                        </Button>
</Typography>

                    <Typography className={classes.textMidle}>
                    Higher plans are better served by 
</Typography>
                    <Typography className={classes.textMidle}>
                    contacting Hypertarget.
</Typography>

                    <Typography className={classes.textLine}>
                        <hr class="mt-0" ></hr>
                    </Typography>

                    <Typography className={classes.textPointHeader}>
                        What’s included
</Typography>

                    <Typography className={classes.textPointText}>
                        * 2 Years Data History
</Typography>

                    <Typography className={classes.textPointText}>
                        * Budget Planning
</Typography>

                    <Typography className={classes.textPointText}>
                        * Advanced User Management
</Typography>

                    <Typography className={classes.textPointText}>
                        * Analytics Bootcamp
</Typography>

                    <Typography className={classes.textPointText}>
                        * Export Unlimited Events to Facebook, Google Ads & More
</Typography>

                    <Button variant="contained" color="primary" disableElevation className={classes.button}>
                        GET IN TOUCH ->
</Button>
                </Paper>
            </Grid>
        </Grid>
    </div>
}

export default Pricing

