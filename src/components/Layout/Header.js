import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import headerImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Food Test (Can Change)</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImage} alt="A table full of food you want" />
      </div>
    </React.Fragment>
  );
};

export default Header;
