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

    return <div >


<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Hypertarget</title>
    {/* <!-- favicon --> */}
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
    {/* <!-- bootstrap  --> */}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"/>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    {/* <!-- owl carousel --> */}
    <link rel="stylesheet" href="https://localhost/assets/css/owl.carousel.min.css"/>
    <link rel="stylesheet" href="https://localhost/assets/css/owl.theme.default.min.css"/>
    {/* <!-- custom css --> */}
    <link rel="stylesheet" href="https://localhost/assets/css/steps.css"/>
    <link rel="stylesheet" href="https://localhost/assets/css/main.css"/>
    <link rel="stylesheet" href="https://localhost/assets/css/responsive.css"/>
    <link rel="stylesheet" href="https://localhost/assets/css/code.css"/>
</head>
<body>
{/* <!-- nav bar --> */}
<nav class="main-nav landing-nav">
    <div class="nav-wrapper">
        <div class="d-flex">
            <img src="https://localhost/assets/images/menu-bar.svg" class="menu-bar" alt=""/>
            <div class="logo-wrapper">
                <img src="https://localhost/assets/images/logo.svg" alt=""/>
            </div>
        </div>
        <ul class="nav-list">
            <li><a href="">About</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Help</a></li>
        </ul>
        <ul class="nav-btns">
            <li><a href="" class="cta-secondary">Sign In</a></li>
            <li><a href="" class="cta-primary">Sign Up</a></li>
        </ul>
    </div>
    <div class="mobile-nav">
        <div class="menu-header">
            <div class="logo-wrapper">
                <img src="https://localhost/assets/images/logo.svg" alt=""/>
            </div>
            <div class="close">
                <img src="https://localhost/assets/images/menu-close.svg" alt=""/>

            </div>
        </div>
        <ul class="nav-list">
            <li><a href="">About</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Help</a></li>
        </ul>
    </div>
</nav>

<section class="bg-bluegradient pt-100 pb-100">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 col-sm-12 text-center">
                <div class="c_card check-email-wrap">
             
                    <img style={{margin: 'auto'}} src="https://localhost/assets/images/email.svg" alt=""/>
             
                    <h4 class="c_head">Please check your email</h4>
                    <p class="c_para">
                        By using passwordless login it increases the security of your account
                    </p>
                </div>
            </div>
        </div>
        
    </div>
</section>


<footer class="main-footer">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                <img class="ft-logo" src="https://localhost/assets/images/logo.svg" alt=""/>
                <p class="para mt-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </p>
                <ul class="social-links">
                    <li><a href=""><i class="fab fa-facebook"></i></a></li>
                    <li><a href=""><i class="fab fa-twitter"></i></a></li>
                    <li><a href=""><i class="fab fa-instagram"></i></a></li>
                </ul>
                <p class="copy-text">
                    ©2021 HYPERTARGET
                </p>
            </div>
            <div class="col-lg-2 offset-lg-1 offset-md-1 col-md-2 col-sm-4 col-12">
                <h4 class="ft-head">
                    Product
                </h4>
                <ul class="ft-links">
                    <li><a href="">Download</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Locations</a></li>
                    <li><a href="">Server</a></li>
                    <li><a href="">Countries</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-4 col-12">
                <h4 class="ft-head">
                    Feature
                </h4>
                <ul class="ft-links">
                    <li><a href="">Menu 1</a></li>
                    <li><a href="">Menu 1</a></li>
                    <li><a href="">Menu 1</a></li>
                    <li><a href="">Menu 1</a></li>
                    <li><a href="">Menu 1</a></li>
                    <li><a href="">Menu 1</a></li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-4 col-12">
                <h4 class="ft-head">
                    Earn Money
                </h4>
                <ul class="ft-links">
                    <li><a href="">Affiliate</a></li>
                    <li><a href="">Become Partner</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>

{/* <!-- Jquery Script v --> */}
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
{/* <!-- bootstrp --> */}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></script>
<script src="https://localhost/assets/js/owl.carousel.min.js"></script>
{/* <!-- custom js --> */}
{/* <!-- <script src="https://localhost/assets/js/app.js"></script> -->
<script>
    $('.menu-bar').on('click', function () {
        $('.mobile-nav').addClass('active');
    });
    $('.close').on('click', function () {
        $('.mobile-nav').removeClass('active')
    })
</script> */}
</body>

       
    </div>
}

export default CheckEmail


