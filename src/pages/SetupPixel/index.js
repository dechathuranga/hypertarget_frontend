import React, { useState, Component } from "react"
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
import NoConnectionModal from './NoConnectionModal';


const useStyles = makeStyles((theme) => ({
}));

// const SetupPixel = () => {
    class SetupPixel extends Component {


    // const classes = useStyles();

    constructor() {
        super();
        this.state = {
          show: true
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
      }
    
      showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };
    
      componentDidMount() {
        const script = document.createElement("script"); script.async = true;  
        
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js";  
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery-steps/1.1.0/jquery.steps.js";  
        script.src = "https://ajax.aspnetcdn.com/ajax/jquery.validate/1.15.0/jquery.validate.js";  
        script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js";  
        script.src = "assets/js/app.js";  

    }

    render() {
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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    {/* <!-- custom css --> */}
    <link rel="stylesheet" href="https://localhost/assets/css/steps.css"/>
    <link rel="stylesheet" href="https://localhost/assets/css/main.css"/>
    <link rel="stylesheet" href="https://localhost/assets/css/code.css"/>
</head>

<body class="bg-lightblue step-2page">
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
            <ul class="d-flex steps-wrap step-2" 
            style={{ height: '8px' }}
            >
                <li class="active"></li>
                <li class="active"></li>
            </ul>

            <section>
                <div class="sec-wrapper">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-12 mt-60">
                                <div class="c_card">
                                    <div class="card-header">
                                        <div class="heading">
                                            <h3 class="title">Add Hypertarget to your HTML Website</h3>
                                            <p class="sub">It’s the only time you’ll be asked to use code.</p>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <a href="#" class="cta" onclick="copyToClipboard('#code-area')">COPY CODE</a>
                                        <p class="theme-p">
                                            Copy and paste the snippet below before your website’s closing <span>
                                            <span style={{color: 'blue'}}>
                            &lt; /head&gt; </span> 
                                                </span> tag. Once installed, Hypertarget will automatically
                                                    start receiving data. </p> <div class="code-editor-wrapper block">
                                                    <div class="code-header">
                                                        <p>HTML</p>
                                                    </div>
                                                    <div class="code-body" id="code-area">
                                                        <textarea readonly>
                                                        <sript></sript>
                                                        </textarea>
                                                    </div>
                                    </div>
                                    <a href="/checkEmail" class="plan-cta">Email Code instructions</a>
                                    <div class="d-flex justify-content-end">

                                        <a href="/dashboard" class="cta" id="test-connection" data-bs-toggle="modal"
                                           onClick={this.showModal} data-bs-target="#connectionFail">Test Connection</a>

  {/* <button type="button" onClick={this.showModal} href="/dashboard">
                            <a  data-bs-toggle="NoConnectionModal" data-bs-target="#connectionFail" class="cta">
                            <i class="fa fa-plus">
                            </i>&nbsp;Test Connection</a>
        </button> */}
 

                                    </div>
                                    <NoConnectionModal show={this.state.show} handleClose={this.hideModal}>
        
                                   </NoConnectionModal>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </section>


        </div>


        {/* <!-- Modal connectionPass --> */}

        <div class="modal info-modal fade" id="connectionPass" tabindex="-1" aria-labelledby="connectionPassLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <img src="https://localhost/assets/images/check-big.svg" alt=""/>
                        <h4 class="high-text">Installation Complete</h4>
                        <a href="" class="cta">Create your first journey</a>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Modal connectionFail --> */}

        <div class="modal info-modal fade" id="connectionFail" tabindex="-1" aria-labelledby="connectionPassLabel"
            aria-hidden="true">
            <div class="modal-dialog more-wide">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <img src="https://localhost/assets/images/connectionFail.png" alt=""/>
                        <h4 class="no-connection">No Connection Found</h4>
                        <p class="p-big">HYPERTARGET only identifies the tracking code once there is activity on your
                            website.</p>
                        <p class="help">NEED HELP? </p>
                        <p class="p-small">Try opening your site on a new tab, and then refresh your hypertarget
                            account.</p>
                    </div>
                </div>
            </div>
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

    {/* <!-- Code copy -->
    <script>
        function copyToClipboard(element) {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($(element).text()).select();
            document.execCommand("copy");
            $temp.remove();
        }
    </script> */}

    {/* <!-- Multiple popup connection Pass/ Fail -->
    <script>
        $('#test-connection').click(function(e) {
            e.preventDefault();
            window.open('userjourney1-layer-10.html');
            window.open('http://yoururl2.com');
        });
    </script> */}
</body>

    </div>
}
    }

export default SetupPixel


