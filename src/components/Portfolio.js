import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
import project1 from "../images/portfolio.png";
import project2 from "../images/password_gen.png";
import project3 from "../images/cryptostock.png";
import project4 from "../images/ExpressNext.png";
import avatar from "../thankfulme.png";
import LaunchIcon from "@material-ui/icons/Launch";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "500vh",
    opacity: ".96",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />

      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            
            <CardMedia
              component="img"
              alt="Project 1"
              height="140"
              image={project1}
            />

            <CardContent>
              <Typography gutterBottom variant="h5">
                My First Portfolio
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Needless to say, I've come a long way, all thanks to Trilogy
                Bootcamp.
              </Typography>
            </CardContent>
            
            <CardActions>
            
                <Button 
                href="https://github.com/georgehuliaris/Profile/tree/master"
                target="_blank"
                size="small" 
                color="tomato"
                variant="contained"
                startIcon={<GitHubIcon />}>
                  GitHub
                </Button>
              
              
                <Button
                
                size="small"
                color="tomato"
                href="https://georgehuliaris.github.io/Profile/"
                target="_blank"
                variant="contained"
                startIcon={<LaunchIcon />}
              >
                Visit Page
              </Button>
              
            </CardActions>
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardMedia
              component="img"
              alt="Project 2"
              height="140"
              image={project2}
            />

            <CardContent>
              <Typography gutterBottom variant="h5">
                Password Generator
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                It's time to update that Password123 to something a bit more
                secure.
              </Typography>
            </CardContent>

            <CardActions>
              
                <Button 
                href="https://github.com/georgehuliaris/password_gen"
                target="_blank"
                size="small" 
                color="tomato"
                variant="contained"
                startIcon={<GitHubIcon />}>
                  GitHub
                </Button>
              
              
                <Button
                size="small"
                color="tomato"
                href="https://georgehuliaris.github.io/password_gen/"
                target="_blank"
                variant="contained"
                startIcon={<LaunchIcon />}
              >
                Visit Page
              </Button>
             
            </CardActions>
          </Card>
        </Grid>

        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardMedia
              component="img"
              alt="Project 3"
              height="140"
              image={project3}
            />

            <CardContent>
              <Typography gutterBottom variant="h5">
                Missed Opportunities
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                How much money could you have made if you invested into Bitcoin
                or Apple Stocks.
              </Typography>
            </CardContent>

            <CardActions>
              <Button
              href="https://github.com/georgehuliaris/missedOpts"
                size="small"
                color="tomato"
                target="_blank"
                variant="contained"
                startIcon={<GitHubIcon />}
              >
                GitHub
              </Button>

              <Button
                size="small"
                color="tomato"
                href="https://georgehuliaris.github.io/missedOpts/"
                target="_blank"
                variant="contained"
                startIcon={<LaunchIcon />}
              >
                Visit Page
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardMedia
              component="img"
              alt="Project 2"
              height="140"
              image={project4}
            />

            <CardContent>
              <Typography gutterBottom variant="h5">
                ExperienceNext
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Connecting you to safe in home experiences so that you don't go
                crazy during quarantine.
              </Typography>
            </CardContent>

            <CardActions>
              
                <Button 
                href="https://github.com/srfujii/Experience_Next/"
                target="_blank"
                size="small" 
                color="tomato"
                variant="contained"
                startIcon={<GitHubIcon />}>
                  GitHub
                </Button>

              
                
                <Button
                
                size="small"
                color="tomato"
                href="https://fathomless-citadel-02367.herokuapp.com/"
                target="_blank"
                variant="contained"
                startIcon={<LaunchIcon />}
              >
                Visit Page
              </Button>
              
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Avatar className={classes.avatar} src={avatar} alt="George Huliaris" />
    </Box>
  );
};

export default Portfolio;
