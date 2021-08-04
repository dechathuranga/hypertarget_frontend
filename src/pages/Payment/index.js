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


    return <div>

        <section className="pay-info-sec bg-bluegradient pt-20 pb-60 ml-16 mr-16">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-left" style={{marginLeft:100}}>
                        <ul className="breadcrumbs">
                            <li>
                                <a href>
                                    Plans >
                </a>
                            </li>
                            <li>
                                <img src="assets/images/bread-arrow.svg" alt="" />
                            </li>
                            <li className="active"><a href>
                                Checkout
                </a></li>
                        </ul>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-8 col-sm-12 text-center">
                        <h3 className="sec-head white-color mb-20">
                            Enter Your Payment Details Below
            </h3>
                    </div>
                </div>
            </div>
        </section>
        <section className="pay-info-wrap">
            <div className="container">
                <div className="row justify-content-center">
                    <Grid container spacing={2}>
                        <Grid item xs>
                            <div className="col-md-7 col-lg-7 col-12 col-sm-12 ml-24" style={{width:500, marginLeft:200 }}>
                                <div className="c_card">
                                    <h3 className="head">
                                        Payment Information
              </h3>
                                    <form action>
                                        <div className="form-group">
                                            <label htmlFor>Name *</label>
                                            <div className="c_input-group">
                                                <input type="text" name placeholder="Enter your full name" id />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor>Email *</label>
                                            <div className="c_input-group">
                                                <input type="text" name placeholder="Enter your email address" id />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor>Card Details *</label>
                                            <div className="c_input-group card-input">
                                                <img src="assets/images/card-icon.svg" alt="" />
                                                <input type="text" name placeholder="0000 0000 0000 000" id />
                                                <div className="card-det">
                                                    <input type="text" placeholder="MM/YY" />
                                                    <input type="text" placeholder="CVV" />
                                                    <input type="text" placeholder="ZIP Code" />
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="c_submit-btn"  >
                                        <Grid container spacing={2}>
                        <Grid item xs>
                                        Submit
                                        </Grid>
                                        <Grid item xs>
                                            <svg style={{marginLeft:0 , marginTop : 4   }}  width={22} height={15} viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.8913 1L20.5 7.5M13.8913 14L20.5 7.5M20.5 7.5H1.5" stroke="#192B43" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            </Grid>
                                            </Grid>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            </Grid>

            <Grid item xs>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12 ml-8" >
                                <div className="price-card c_card">
                                    <div className="price-header">
                                        <p className="price-cat">
                                            You have to pay
                </p>
                                        <h4 className="main-price">
                                            $99/mo
                </h4>
                                    </div>
                                    <div className="price-body">
                                        <h5 className="head">
                                            What’s included
                </h5>
                                        <ul className="price-inc-list">
                                            <li>6-Month Data History</li>
                                            <li>100% support</li>
                                            <li>Custom Reports</li>
                                            <li>Funnel Optimization</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </section>

    </div>
}

export default Payment


