import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../avatarComputer.png";
import Typed from "react-typed";
import Particles from "react-particles-js";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div style={{ background: "#233", height: "150vh", opacity: ".95" }}>
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
              value: 0.01,
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
      <Box className={classes.typedContainer}>
        <Grid container justify="center">
          <Avatar
            className={classes.avatar}
            src={avatar}
            alt="George Huliaris"
          />
        </Grid>
        <Typography className={classes.title} variant="h4">
          <Typed
            strings={["George Huliaris"]}
            typeSpeed={210}
            onComplete={(self) => self.cursor.remove()}
          />
        </Typography>
        <br />
        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={[
              "...",
              "HTML/CSS",
              "Web Design",
              "Web Development",
              "Fullstack Developer",
              "MERN Stack",
              "React",
              "Material",
              "umm...",
              "Apple Fanboy",
              "Crypto Currency Enthusiast!",
              "... oh!",
              "... oh and!!!",
              "Restaurateur!",
              "...but also...",
              "...",
            ]}
            startDelay={4700}
            typeSpeed={50}
            backSpeed={30}
            backDelay={1200}
            loop
          />
        </Typography>

        <Grid container justify="center">
          <Typography className={classes.title} variant="h5">
            A hardworking, enthusiastic full stack web developer <br />
            with a keen interest in tech.
            <br />I offer a range of expertise alongside a successful record of
            leadership <br />
            and collaboration. An irrevocable passion for life long learning{" "}
            <br />
            and the pursuit of new knowledge.{" "}
          </Typography>
        </Grid>
      </Box>
    </div>
  );
};

export default Header;
