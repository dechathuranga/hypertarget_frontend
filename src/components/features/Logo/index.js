import React from "react"
import { Link } from "react-router-dom"
import { HOME } from "../../../constants/routes"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    text: {
        // flexGrow: 1,
        marginLeft: 50,
        marginRight: 90,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        
    },

}));

const Logo = () => {

    const classes = useStyles();

    return <Link to={HOME.link} className="font-bold text-white text-2xl ">
       <Typography className={classes.text}>
                        HYPERTARGET
</Typography>
    </Link>
}

export default Logo