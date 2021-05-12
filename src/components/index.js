import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    opacity: "0.3",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Header />
    </>
  );
};

export default Home;
