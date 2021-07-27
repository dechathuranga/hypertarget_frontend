import React from "react"
import { Link } from "react-router-dom"
import { BrandButtonDefault } from "../../library/Button"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { borderRadius } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        marginRight: 25,
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 50,
        
    },

}));

const SignInButton = () => {

    const classes = useStyles();

    return <Link to="/signin" >
           <Button variant="contained" color="primary" disableElevation className={classes.root}>
                        Sign In
                        </Button>
    </Link>

}


export default SignInButton