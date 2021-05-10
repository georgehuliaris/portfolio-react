import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
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



const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height:"100%"
    },
    cardContainer: {
        maxWidth: 345,
        // margin: "3rem"
        margin: "5rem auto"
    }
})

const Portfolio = () => {
    const classes = useStyles()
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              />

              <CardContent>
                <Typography gutterBottom variant="h5">
                  My First Professional Portfolio
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Needless to say, I've come a long way!
                </Typography>
              </CardContent>
            </CardActionArea>
              <CardActions>
              
              <a href="https://github.com/georgehuliaris/Profile/tree/master" target="_blank">
                <Button size="small" color="primary">
                  GitHub
                </Button>
                </a>
                <a href="https://georgehuliaris.github.io/Profile/" target="_blank">
                <Button size="small" color="primary">
                  Visit Page
                </Button>
                </a>
              </CardActions>
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={project2}
              />

              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem Ipsum Put some stuff here about your project and dont
                  forget!
                </Typography>
              </CardContent>
            </CardActionArea>
              <CardActions>
              <a href="https://github.com/georgehuliaris/password_gen" target="_blank">
                <Button size="small" color="primary">
                  GitHub
                </Button>
                </a>
                <a href="https://georgehuliaris.github.io/password_gen/" target="_blank">
                <Button size="small" color="primary">
                  Visit Page
                </Button>
                </a>
              </CardActions>
          </Card>
        </Grid>
        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 3"
                height="140"
                image={project3}
              />

              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 3
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem Ipsum Put some stuff here about your project and dont
                  forget!
                </Typography>
              </CardContent>
            </CardActionArea>
              <CardActions>
              <a href="https://github.com/georgehuliaris/missedOpts" target="_blank">
                <Button size="small" color="primary">
                  GitHub
                </Button>
                </a>
                <a href="https://georgehuliaris.github.io/missedOpts/" target="_blank">
                <Button size="small" color="primary">
                  Visit Page
                </Button>
                </a>
              </CardActions>
          </Card>
        </Grid>
        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={project4}
              />

              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 4
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem Ipsum Put some stuff here about your project and dont
                  forget!
                </Typography>
              </CardContent>
            </CardActionArea>
              <CardActions>
              <a href="https://github.com/srfujii/Experience_Next/" target="_blank">
                <Button size="small" color="primary">
                  GitHub
                </Button>
                </a>
                <a href="https://fathomless-citadel-02367.herokuapp.com/" target="_blank">
                <Button size="small" color="primary">
                  Visit Page
                </Button>
                </a>
              </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
