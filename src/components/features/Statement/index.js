import React from "react"
import { Link } from "react-router-dom"
import { BrandButtonDefault } from "../../library/Button"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// const UniqueValueStatement = () => (
//     <p className="xs:text-2xl 
//                   sm:text-4xl
//                   md:text-5xl
//                   font-helvetica font-bold text-6xl text-center text-brand-dark leading-snug">
//         Create Apps Test
//         <span className="text-brand"> Test</span>
//         <br />
//         Test Code
//     </p>
// )

// const GetStartedButton = () => (
//     <Link to="/signin" tabIndex="-1">
//         <BrandButtonDefault
//             type="button"
//             value="Create First App"
//             classes="xs:py-3 xs:px-4 xs:text-sm
//                      sm:py-3 sm:px-4 sm:text-sm
//                      w-auto px-8 py-4 mt-8"
//         />
//     </Link>)

// export default UniqueValueStatemen

// const classes = useStyles();
// export {GetStartedButton}


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


const UniqueValueStatement = () => {

    const classes = useStyles();


    return <div>


        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Hypertarget</title>
            {/* <!-- favicon --> */}
            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            {/* <!-- bootstrap  --> */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" />

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            {/* <!-- owl carousel --> */}
            <link rel="stylesheet" href="https://localhost/assets/css/owl.carousel.min.css" />
            <link rel="stylesheet" href="https://localhost/assets/css/owl.theme.default.min.css" />
            {/* <!-- custom css --> */}
            <link rel="stylesheet" href="https://localhost/assets/css/steps.css" />
            <link rel="stylesheet" href="https://localhost/assets/css/main.css" />
            <link rel="stylesheet" href="https://localhost/assets/css/responsive.css" />
            <link rel="stylesheet" href="https://localhost/assets/css/code.css" />
        </head>

        <body>

        {/* <!-- nav bar --> */}
        <nav class="main-nav landing-nav">
            <div class="nav-wrapper">
                <div class="d-flex">
                    <img src="https://localhost/assets/images/menu-bar.svg" class="menu-bar" alt="" />
                    <div class="logo-wrapper">
                        <img src="https://localhost/assets/images/logo.svg" alt="" />
                    </div>
                </div>
                <ul class="nav-list">
                    <li><a href="">About</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href="">Help</a></li>
                </ul>
                <ul class="nav-btns">
                    <li><a href="signin.html" class="cta-secondary">Sign In</a></li>
                    <li><a href="pricing.html" class="cta-primary">Sign Up</a></li>
                </ul>
            </div>
            <div class="mobile-nav">
                <div class="menu-header">
                    <div class="logo-wrapper">
                        <img src="https://localhost/assets/images/logo.svg" alt="" />
                    </div>
                    <div class="close">
                        <img src="https://localhost/assets/images/menu-close.svg" alt="" />

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

        <header class="landing-header-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="banner-con">
                            <h1 class="heading-1 mb-20">
                                Transforming
                                Business Intelligence with Insightful Analytics
                    </h1>
                            <p class="para mb-40">
                                Learn what your audience is doing on your website to make smart, informed decisions. Let
                                Hypertarget accelerate your business growth with an insightful dashboard that delivers
                                actionable, visual insights. Our data analytics software is here to help you out!
                    </p>
                            <a href="/pricing" class="cta-primary cta-shadow cta-lg">Get Started</a>
                        </div>
                    </div>
                    {/* <!-- col-2 --> */}
                    <div class="col-lg-6 col-md-6 col-sm-12 ">
                        <div class="banner-img-wrapper">
                            <img src="https://localhost/assets/images/banner-img.svg" alt="banner img" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div class="banner-bottom-logos-area">
            <div class="container">
                <div class="logos-wrapper">
                    <div class="logos">
                        <img src="https://localhost/assets/images/logos/Mask Group.png" alt="" />
                    </div>
                    <div class="logos">
                        <img src="https://localhost/assets/images/logos/Mask Group-1.png" alt="" />
                    </div>
                    <div class="logos">
                        <img src="https://localhost/assets/images/logos/Mask Group-2.png" alt="" />
                    </div>
                    <div class="logos">
                        <img src="https://localhost/assets/images/logos/Mask Group-3.png" alt="" />
                    </div>
                    <div class="logos">
                        <img src="https://localhost/assets/images/logos/Mask Group-4.png" alt="" />
                    </div>

                </div>
            </div>
        </div>

        {/* <!-- banner-bottom content --> */}
        <section class="sec2 pb-60">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <img src="https://localhost/assets/images/banner-bottom.svg" class="img-fluid" alt="" />
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <h3 class="heading-2 with-design">
                            Data Analytics Made Simple
                </h3>
                        <p class="para mt-20">
                            Whether you’re an IT company, financial analysts, marketers, sales executives, or more, Hypertarget
                            offers specific and general data analytics to help understand the market climate and compare it to
                            your competitors for detailed market insights. Navigate the market based on custom, enhance team
                            collaborations, or set personalized alerts to make sure you remain on your toes and tackle trends
                    better. <br />
                            Hypertarget helps you target your goals specifically and tailor analytics to help you visualize key
                            market elements so that you stay informed and ready to tackle any risk that may come your way.
                            Converting raw data to perceptive visualizations and make refined decisions accordingly with just a
                            few clicks and drive operations to the skies!
        
                </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="sec3 bg-grey">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h4 class="heading-3">
                            Our Straightforward, Hyper-Targeted Analytics Solutions
                </h4>
                        <p class="para mt-20">
                            Data has now become one of the most valuable resources for businesses. Manufacturing costs, process
                            efficiency, market demand, e-commerce sales, advertising ROI, social media performance, normal and
                            abnormal loss ratios, and more — analyzing it all can help you closely understand how your business
                            is performing and where it is lacking.
                </p>
                        <p class="para">
                            However, scattered data might not be of much use to any business. It needs to be compiled,
                            processed, and presented in a user-friendly manner to help analysts and business owners make sound,
                            informed, and targeted decisions. Let Hypertarget help you do that and enable you to translate
                            business and market data into crisp, straightforward analytical dashboards and improve business
                            standing.
        
                </p>
                        <p class="para">
                            Our business analytics solutions stand out from the crowd because:
                </p>
                    </div>
                </div>
                <div class="row align-items-center mt-60 mb-60">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12 text-center">
                        <img class="img0" src="https://localhost/assets/images/img01.png" class="img-fluid" alt="" />
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <h4 class="heading-3">
                            Enabling You to Do More With Less
                </h4>
                        <p class="para mt-20">
                            This is where customizability and data analytics meet. View your business with a new perspective via
                            advanced, detailed charts and maps. Find drill-downs, recommendations, insights, and more in a
                            single, human-centric interface that empowers employees to do more, even with no expertise in BI.
                </p>
                    </div>
                </div>
                <div class="row align-items-center mt-60 mb-60 flex-column-reverse flex-sm-row flex-md-row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <h4 class="heading-3">
                            Contextual Data Analytics at Your Fingertips
                </h4>
                        <p class="para mt-20">
                            Data processing just became a whole lot easier thanks to Hypertarget’s data analytics and
                            context-based interpretations, guiding you and your staff with to-the-point and interactive data
                            stories that blend data from different sources and explains it with a connected narrative.
        
                </p>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12 text-center">
                        <img class="img0" src="https://localhost/assets/images/img02.png" class="img-fluid" alt="" />
                    </div>
                </div>
                <div class="row align-items-center mt-60 mb-60">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12 text-center">
                        <img class="img0" src="https://localhost/assets/images/img03.png" class="img-fluid" alt="" />
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <h4 class="heading-3">
                            Presenting Data at the Right Time to the Right Person
                </h4>
                        <p class="para mt-20">
                            Encourage teamwork by making sure everyone has access to data at all times in a format they want and
                            understand. Easy availability of data encourages teamwork and empowers employees, enabling them to
                            be more independent.
        
                </p>
                    </div>
                </div>
                <div class="row align-items-center mt-60 mb-60 flex-column-reverse flex-sm-row flex-md-row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <h4 class="heading-3">
                            Convert Raw Data to Detailed Insights Within Minutes
                </h4>
                        <p class="para mt-20">
                            Hypertarget data analytics uses minimal resources to convert raw data to detailed insights quickly,
                            along with presenting data in a format that speaks to you. So, whether you prefer pie charts, bar
                            graphs, candlestick charts, or any other data visualization technique, we’ve got you covered!
        
                </p>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12 text-center">
                        <img class="img0" src="https://localhost/assets/images/img04.png" class="img-fluid" alt="" />
                    </div>
                </div>
                <div class="row align-items-center mt-60 mb-60">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12 text-center">
                        <img class="img0" src="https://localhost/assets/images/img05.png" class="img-fluid" alt="" />
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <h4 class="heading-3">
                            Customize Data Analytics & Business Intelligence Your Way
                </h4>
                        <p class="para mt-20">
                            Our powerful analytics tools help you view data the way you want it, and this includes data
                            according to custom targets, missions, critical points, comparisons, etc. View your data your way by
                            making changes with just a few clicks. With Hypertarget, YOU are in control of the data.
                </p>
                        <ul class="theme-list">
                            <li>Refine your data by including and removing elements</li>
                            <li>Speculate decision impacts by simulating future events</li>
                            <li>Add or remove data points and filter data as per need</li>
                            <li>Annotate charts and points for discussion & reference</li>
                            <li>Govern your data to control who has access to what</li>
                        </ul>
                    </div>
                </div>

                {/* <!-- carousel area --> */}
                <div class="row">
                    <div class="col-12">
                        <h4 class="heading-3">
                            Hypertarget Where Every Bit of Data Tells a Story
                </h4>
                        <div class="owl-carousel owl-theme">
                        <Grid container spacing={2}>
                        <Grid item xs>
                            <div class="item">
                                <div class="check-card-wrap">
                                    <div class="check">
                                        <img src="https://localhost/assets/images/check.svg" alt="" />
                                    </div>
                                    <div class="check-details">
                                        <p class="para">
                                            Data analytics has a whole new meaning. It’s not just about analyzing the past to
                                            predict the future but has become a lot more powerful now. With Hypertarget’s
                                            flexible range of data presentation and insights, you get to combine different
                                            events, cards, texts, highlights, images, and pins on your dashboard to create
                                            contingencies for potential events, preparing yourself and your team for the same.
                                </p>
                                    </div>
                                </div>
                            </div>
                            </Grid>
                                        <Grid item xs>
                            <div class="item">
                                <div class="check-card-wrap">
                                    <div class="check">
                                        <img src="https://localhost/assets/images/check.svg" alt="" />
                                    </div>
                                    <div class="check-details">
                                        <p class="para">
                                            Data analytics has a whole new meaning. It’s not just about analyzing the past to
                                            predict the future but has become a lot more powerful now. With Hypertarget’s
                                            flexible range of data presentation and insights, you get to combine different
                                            events, cards, texts, highlights, images, and pins on your dashboard to create
                                            contingencies for potential events, preparing yourself and your team for the same.
                                </p>
                                    </div>
                                </div>
                            </div>
                            </Grid>
                                        <Grid item xs>
                            <div class="item">
                                <div class="check-card-wrap">
                                    <div class="check">
                                        <img src="https://localhost/assets/images/check.svg" alt="" />
                                    </div>
                                    <div class="check-details">
                                        <p class="para">
                                            Data analytics has a whole new meaning. It’s not just about analyzing the past to
                                            predict the future but has become a lot more powerful now. With Hypertarget’s
                                            flexible range of data presentation and insights, you get to combine different
                                            events, cards, texts, highlights, images, and pins on your dashboard to create
                                            contingencies for potential events, preparing yourself and your team for the same.
                                </p>
                                    </div>
                                </div>
                            </div>
                            </Grid>
                                        {/* <Grid item xs>
                            <div class="item">
                                <div class="check-card-wrap">
                                    <div class="check">
                                        <img src="https://localhost/assets/images/check.svg" alt="" />
                                    </div>
                                    <div class="check-details">
                                        <p class="para">
                                            Data analytics has a whole new meaning. It’s not just about analyzing the past to
                                            predict the future but has become a lot more powerful now. With Hypertarget’s
                                            flexible range of data presentation and insights, you get to combine different
                                            events, cards, texts, highlights, images, and pins on your dashboard to create
                                            contingencies for potential events, preparing yourself and your team for the same.
                                </p>
                                    </div>
                                </div>
                            </div>
                            </Grid> */}
                                        {/* <Grid item xs>
                            <div class="item">
                                <div class="check-card-wrap">
                                    <div class="check">
                                        <img src="https://localhost/assets/images/check.svg" alt="" />
                                    </div>
                                    <div class="check-details">
                                        <p class="para">
                                            Data analytics has a whole new meaning. It’s not just about analyzing the past to
                                            predict the future but has become a lot more powerful now. With Hypertarget’s
                                            flexible range of data presentation and insights, you get to combine different
                                            events, cards, texts, highlights, images, and pins on your dashboard to create
                                            contingencies for potential events, preparing yourself and your team for the same.
                                </p>
                                    </div>
                                </div>
                            </div>
                            </Grid>
                                        <Grid item xs>
                            <div class="item">
                                <div class="check-card-wrap">
                                    <div class="check">
                                        <img src="https://localhost/assets/images/check.svg" alt="" />
                                    </div>
                                    <div class="check-details">
                                        <p class="para">
                                            Data analytics has a whole new meaning. It’s not just about analyzing the past to
                                            predict the future but has become a lot more powerful now. With Hypertarget’s
                                            flexible range of data presentation and insights, you get to combine different
                                            events, cards, texts, highlights, images, and pins on your dashboard to create
                                            contingencies for potential events, preparing yourself and your team for the same.
                                </p>
                                    </div>
                                </div>
                            </div>
                            </Grid>
                                        <Grid item xs>
                            <div class="item">
                                <div class="check-card-wrap">
                                    <div class="check">
                                        <img src="https://localhost/assets/images/check.svg" alt="" />
                                    </div>
                                    <div class="check-details">
                                        <p class="para">
                                            Data analytics has a whole new meaning. It’s not just about analyzing the past to
                                            predict the future but has become a lot more powerful now. With Hypertarget’s
                                            flexible range of data presentation and insights, you get to combine different
                                            events, cards, texts, highlights, images, and pins on your dashboard to create
                                            contingencies for potential events, preparing yourself and your team for the same.
                                </p>
                                    </div>
                                </div>
                            </div>
                            </Grid> */}
                            </Grid>
                        </div>
                    </div>
                </div>

                {/* <!-- quote section --> */}
                <section class="quote-sec">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 text-center">
                                <div class="quote-wrapper">
                                    <h2>Use our collection of in-app analytical solutions to highlight your KPIs, regardless of
                                        your industry!
                            </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>

        <div class="banner-cta-wrap">
            <div class="container">
                <div class="banner-cta">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-lg-5 col-md-5 col-sm-12 col-12">
                            <h4 class="heading-3">
                                Are you ready to start making informed decisions and scaling your business with the help of real-time insights?
                    </h4>
                        </div>
                        <div class="col-lg-6 d-flex justify-content-end offset-lg-1 offset-md-1 col-md-6 col-sm-12 col-12 banner-cta-contain">
                            <a href="" class="cta-primary cta-lg cta-shadow">
                                Partner with Hypertarget Today!
                    </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer class="main-footer">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                        <img class="ft-logo" src="https://localhost/assets/images/logo.svg" alt="" />
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
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> */}

        {/* <!-- bootstrp --> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></script>
        <script src="https://localhost/assets/js/owl.carousel.min.js"></script>
        {/* <!-- custom js --> */}
        <script src="https://localhost/assets/js/app.js"></script>
        <script>
            {/* $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2.5
            },
            1000: {
                items: 3
            }
        }
    });
    $('.menu-bar').on('click', function(){
        $('.mobile-nav').addClass('active');
    });
    $('.close').on('click', function(){
        $('.mobile-nav').removeClass('active')
    }) */}
        </script>
</body>

    </div >
}

const GetStartedButton = () => (
    <div></div>
    // <Link to="/signin" tabIndex="-1">
    //     <BrandButtonDefault
    //         type="button"
    //         value="Create First App"
    //         classes="xs:py-3 xs:px-4 xs:text-sm
    //                  sm:py-3 sm:px-4 sm:text-sm
    //                  w-auto px-8 py-4 mt-8"
    //     />
    // </Link>
)

export default UniqueValueStatement
export { GetStartedButton }
