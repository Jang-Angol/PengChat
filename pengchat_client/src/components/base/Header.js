import React from "react";

import styles from "./Header.module.css";
import logoImg from "../../assets/animal-kingdom.svg";
import userImg from "../../assets/user.svg";

const Header = ({user}) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src={logoImg} />
        <span className={styles.title}>Pengchat</span>
      </div>
      <div className={styles.user}>
        <img className={styles.userImg} src={userImg} />
        <span className={styles.userName}>{user.peng_name}</span>
        <button className={styles.logout}>logout</button>
      </div>
    </header>
  );
};

export default Header;
