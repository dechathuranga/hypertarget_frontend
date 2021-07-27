import React from "react"
import { Link } from "react-router-dom"
import { BrandButtonDefault } from "../../library/Button"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { borderRadius } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        // margin: 25,
        backgroundColor: '#24285B',
        borderRadius: 50,
        fontWeight: 'bold',
    },

}));

const SignUpButton = () => {

    const classes = useStyles();

    return <Link to="/signup" >
           <Button variant="contained" color="primary" disableElevation className={classes.root}>
                        Sign Up
                        </Button>
    </Link>

}


export default SignUpButton