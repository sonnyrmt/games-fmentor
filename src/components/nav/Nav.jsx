import s from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "./Menu";

const Nav = () => {
  const [isOpen, setHamburguerOpen] = useState(false);

  const toggleHamburguer = (e) => {
    e.preventDefault();
    setHamburguerOpen(!isOpen);
  };

  return (
    <div className={s.nav}>
      <Menu clicked={isOpen} />
      <div className={s.containerBrandSearch}>
        <h1 className={s.brand}><span>G</span>app.</h1>
        <input className={s.searchBar} type="text" placeholder="Search..." />
      </div>
      <div className={s.navigation}>
        <h3>Explore</h3>
        <Link to="/home/create">
          <h3 className={s.createGame}>Create</h3>
        </Link>
      </div>
      <div className={s.hamburguer} onClick={toggleHamburguer}>
        <MenuIcon />
      </div>
    </div>
  );
};

export default Nav;
