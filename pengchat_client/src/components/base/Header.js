import React from "react";

import styles from "./Header.module.css";
import logoImg from "../../assets/animal-kingdom.svg";
import userImg from "../../assets/user.svg";

const Header = ({ user }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.imgWrap}>
          <img className={styles.logoImg} src={logoImg} />
        </div>
        <div className={styles.textWrap}>
          <span className={styles.title}>Pengchat</span>
        </div>
      </div>
      <div className={styles.user}>
        <div className={styles.imgWrap}>
          <img className={styles.userImg} src={userImg} />
        </div>
        <div className={styles.textWrap}>
          <span className={styles.userName}>{user.peng_name}</span>
        </div>
        <div className={styles.textWrap}>
          <button className={styles.logout}>logout</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
