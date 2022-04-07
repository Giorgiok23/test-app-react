import React from "react";
import logo from "../../logo.svg";
import "./header.scss";

function Header() {
  return (
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      <div className="app-title">My React Blog</div>
    </header>
  );
}

export default Header;
