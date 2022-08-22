import React from "react";
import s from "./Welcome.module.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const Welcome = () => {
  return (
    <div className={s.containerHome}>
      <div className={s.title}>
        <h1>Ready to get started ?</h1>
        <h3>Explore, buy and publish your own games</h3>
        <Link to='/home'>
            <Button variant="contained" size="large" endIcon={<SportsEsportsIcon />}>Enter to the platform</Button>
        </Link>
      </div>
      <Carousel />
    </div>
  );
};

export default Welcome;
