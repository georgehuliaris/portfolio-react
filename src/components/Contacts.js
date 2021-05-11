import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box, Avatar } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";
import avatar from "../luckyme.png";
import Particles from "react-particles-js";


const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    opacity: ".95",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(9),
},
  
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tomato",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contacts = () => {
  const classes = useStyles();
  return (
    <Box component="div" style={{ background: "#233", height: "150vh", opacity: ".95" }}>
        <Navbar />
        <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "star",
              stroke: {
                width: 3,
                color: "tomato",
              },
            },
            size: {
              value: 6,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                size_min: 0.1,
                sync: true,
              },
            },
            opacity: {
              value: .01,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
          },
        }}
      />
      <Grid container justify="center">
      
        <Box component="form" className={classes.form}>
        <Avatar className={classes.avatar} src={avatar} alt="George Huliaris" />
          <Typography variant="h5" style={{color: "tomato", textAlign: "center", textTransform: "uppercase" }}>Hire or contact me!</Typography>
          {/* <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Company"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br /> */}
          
          <a href="mailto:georgehuliaris@me.com?subject=You're hired!&body=Hello, future employee! We saw your portfolio and would like to offer you a job starting at $1,000,000 USD per year, but we're willing to negotiate." style={{ textDecoration: 'none' }}>
          <Button 
          className={classes.button} 
          variant="outlined" 
          fullWidth={true} 
          endIcon={<SendIcon />}>
            start a conversation
          </Button>
          </a>
          
        </Box>
      </Grid>
    </Box>
  );
};

export default Contacts;
