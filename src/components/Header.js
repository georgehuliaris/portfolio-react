import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../avatarComputer.png";
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
    }, 
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}));

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="George Huliaris" />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["George Huliaris"]} typeSpeed={210}/>
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5">
                <Typed 
                strings={[
                    "HTML/CSS",
                    "Web Design", 
                    "Web Development",
                    "Fullstack Developer", 
                    // "MERN Stack",
                    "React",
                    "umm...", 
                    "Apple Fanboy",
                    "Crypto Currency Enthusiast!", 
                    "... oh!",  
                    "... oh and!!!", 
                    "Restaurateur!",
                    "but also..."
                    
                ]} 
                typeSpeed={50}
                backSpeed={30}
                loop
                />
            </Typography>
        </Box>
    );
}

export default Header;
