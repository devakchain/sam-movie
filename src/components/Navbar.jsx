import React from "react";
import "../style/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Sam movie</h1>
      <div className="navbar_links">
        <NavLink to="/">Popular</NavLink>
        <NavLink to="/top_rated">Top rated</NavLink>
        <NavLink to="/upcoming">Upcoming</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
