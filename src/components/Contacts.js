import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box, Avatar } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";
import avatar from "../luckyme.png";


const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(15),
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
    <Box component="div" style={{ background: "#233", height: "100vh" }}>
        <Navbar />
      <Grid container justify="center">
      
        <Box component="form" className={classes.form}>
        <Avatar className={classes.avatar} src={avatar} alt="George Huliaris" />
          <Typography variant="h5" style={{color: "tomato", textAlign: "center", textTransform: "uppercase" }}>Hire or contact me!</Typography>
          <InputField
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
          <br />
          
          <a href="mailto:georgehuliaris@me.com" style={{ textDecoration: 'none' }}>
          <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
            contact me
          </Button></a>
          
        </Box>
      </Grid>
    </Box>
  );
};

export default Contacts;
