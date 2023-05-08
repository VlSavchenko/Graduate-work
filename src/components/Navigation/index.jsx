import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <div className={`${styles.navigation} clear`}>
      <div className={styles.navWrapper}>
        <Link to="/">Главная</Link>
        <Link to="/about">Как это работает?</Link>
        {/* <a href="#second">Second</a> */}
        <Link to="/resume">Заполнить резюме</Link>
        <Link to="/CV1"> CV1</Link>
      </div>
    </div>
  );
}
