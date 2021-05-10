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
import project1 from "../images/html-css-javascript-lg.jpg";

const Portfolio = () => {
  return (
    <Box component="div">
      <Navbar />
      <Grid container justify="center" alignItems="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>

        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Project 1"
              height="140"
              image={project1}
              />

            <CardContent>
              <Typography gutterBottom variant="h5">
                Project 1
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem Ipsum Put some stuff here about your project and dont forget!
              </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Live Demo
                </Button>
            </CardActions>
          </CardActionArea>
        </Card>
              </Grid>
      </Grid>
      Hello from Portfolio
    </Box>
  );
};

export default Portfolio;
