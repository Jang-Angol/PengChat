import React from "react";

import "./Header.css";
import logoImg from "../assets/animal-kingdom.svg";
import userImg from "../assets/user.svg";

const Header = ({user}) => {
  return (
    <header className="header">
      <div className="logo">
        <img className="logoImg" src={logoImg} />
        <span className="title">Pengchat</span>
      </div>
      <div className="user">
        <img className="userImg" src={userImg} />
        <span className="userName">{user.peng_name}</span>
        <button className="logout">logout</button>
      </div>
    </header>
  );
};

export default Header;
