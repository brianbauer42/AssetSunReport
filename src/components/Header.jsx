import React from "react";
import logo from "./../sun.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>AssetSun</h1>
    </div>
  );
};

export default Header;
