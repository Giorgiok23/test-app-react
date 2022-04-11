import React from "react";
import logo from "../logo.svg";

function Header() {
  return (
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      <div className="app-title">My React Blog</div>
    </header>
  );
}

export default Header;
