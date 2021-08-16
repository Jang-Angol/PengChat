import React from "react";

import "./header.css"
import logoImg from "../assets/animal-kingdom.svg";
import userImg from "../assets/user.svg";

const Header = ({ User }) => {
  return (
    <header className="header">
      <div className="logo">
        <img className="logoImg" src={logoImg} />
        <span className="title">Pengchat</span>
      </div>
      <div className="user">
        <img className="userImg" src={userImg} />
        <span className="userName">{User.nickname}</span>
        <button className="logout">logout</button>
      </div>
    </header>
  );
};

export default Header;
