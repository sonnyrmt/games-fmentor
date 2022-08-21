import React from "react";
import s from "./Home.module.css";
import Button from "@mui/material/Button";
import BG from '../../img/1.webp'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={s.containerHome}>
      <div className={s.title}>
        <h1>Ready to get started ?</h1>
        <h3>Explore, buy and create</h3>
        <Link to='/platform'>
            <Button variant="contained" size="large">Enter Now</Button>
        </Link>
      </div>
      <div className={s.imgContainer}>
        <img src={BG} alt=""/>
      </div>
    </div>
  );
};

export default Home;
