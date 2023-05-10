import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <div className={`${styles.navigation} clear`}>
      <div className={styles.navWrapper}>
        <Link to="/Graduate-work/">Главная</Link>
        <Link to="/Graduate-work/about">Кэр</Link>
        {/* <a href="#second">Second</a> */}
        <Link to="/Graduate-work/resume">Зр</Link>
        <Link to="/Graduate-work/CV1"> CV1</Link>
        <Link to="/Graduate-work/CV2"> CV2</Link>
        <Link to="/Graduate-work/CV3"> CV3</Link>
      </div>
    </div>
  );
}
