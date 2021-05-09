import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../avatar.png";
import Typed from "react-typed"

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)

    },
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    }
}));

const Header = () => {
    const classes = useStyles()
    return (
        <Box>
            <Avatar className={classes.avatar} src={avatar} alt="George Huliaris" />
            <Typography className={classes.title} variant="h4">
                <Typed strings={["George Huliaris"]} typeSpeed={40}/>
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5">
                <Typed 
                strings={["Web Design", "Web Development", "MERN Stack", "umm...", "Crypto Currency Enthusiast!", "uhh... oh and!", "Restaurateur!" ]} 
                typeSpeed={40}
                backSpeed={75}
                loop
                />
            </Typography>
        </Box>
    );
}

export default Header;
