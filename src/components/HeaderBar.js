import React from "react";
import "./HeaderBar.css";

const HeaderBar = () => (
  <header>
    <h1>Dark Leak (Imitation)</h1>
    <div className="header-actions">
      <input type="text" placeholder="Search" />
      <button className="primary">Become a seller</button>
      <button className="secondary">Log In</button>
      <button className="secondary">Register</button>
    </div>
  </header>
);

export default HeaderBar;