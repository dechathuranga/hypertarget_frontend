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

    return <div>
        
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Hypertarget</title>
    {/* <!-- favicon --> */}
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
    {/* <!-- bootstrap  --> */}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"/>
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
    {/* <!-- custom css --> */}
    <link rel="stylesheet" href="https://localhost/assets/css/steps.css"/>
    <link rel="stylesheet" href="https://localhost/assets/css/main.css"/>
    <link rel="stylesheet" href="https://localhost/assets/css/code.css"/>
</head>

<body class="bg-lightblue">
    <header>
        <nav class="main-nav">
            <div class="nav-wrapper">
                <div class="logo-wrapper">
                    <img src="https://localhost/assets/images/logo.svg" alt=""/>
                </div>
                <div class="right-side">
                    <div class="search-bar-wrapper">
                        <img src="https://localhost/assets/images/search-icon.png" alt=""/>
                        <input type="text" placeholder="Search" name="" id="" />
                    </div>
                    <span class="notifi">
                        <img src="https://localhost/assets/images/notifi.png" alt=""/>
                    </span>
                    <a href="">
                        <div class="profile-wrap">
                            <div class="profile-img">
                                <img src="https://localhost/assets/images/profile.jpg" alt=""/>
                            </div>
                            <div class="profile-det">
                                <h5 class="name">
                                    John Doe
                                </h5>
                                <p class="desig">CEO</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </nav>
    </header>
    <form id="contact" action="#">
        <div>
            <ul class="d-flex steps-wrap" 
           style={{ height: '8px' }}
            >
                <li class="active"></li>
                <li></li>
            </ul>
            <section>
                <div class="sec-wrapper">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-12 mt-100">
                                <div class="heading">
                                    <h3 class="title">Add Hypertarget to your HTML Website</h3>
                                    <p class="sub">It’s the only time you’ll be asked to use code.</p>
                                </div>
                                <div class="con-area">
                                    <div class="block-wrap">
                                        <a href="/SetupPixel">
                                        <div class="block animate__animated animate__fadeInUp">
                                            <div class="icon">
                                                <img src="https://localhost/assets/images/icon1.svg" alt=""/>
                                            </div>
                                            <p>
                                                I’m Ready to Add The
                                                Tracking Code
                                            </p>
                                        </div></a>
                                        <div class="block animate__animated animate__fadeInUp">
                                            <div class="icon">
                                                <img src="https://localhost/assets/images/icon2.svg" alt=""/>
                                            </div>
                                            <p>
                                                Send Installation
                                                Instructions Via Email
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

        </div>
    </form>

    {/* <!-- Jquery Script v --> */}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    {/* <!-- jquery step js --> */}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-steps/1.1.0/jquery.steps.js"></script>
    {/* <!-- jquery validate --> */}
    <script src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.15.0/jquery.validate.js"></script>
    {/* <!-- bootstrp --> */}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></script>
    {/* <!-- custom js --> */}
    <script src="https://localhost/assets/js/app.js"></script>
</body>
    </div>
}

export default AddSite


