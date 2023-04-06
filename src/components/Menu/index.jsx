import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import camera from "../../images/camera.png";

export const Menu = () => {
  return (
    <>
      <div className="title">
        <NavLink to="/home">
          <img src={camera} className="logo"></img>
        </NavLink>
        <span className="titleName">Movie magazine</span>
      </div>

      <nav className="menu">
        <NavLink to="/home" className="menu_link ">
          Home
        </NavLink>
        <span> </span>
        <NavLink to="/reviews" className="menu_link">
          Reviews
        </NavLink>
        <span> </span>
        <NavLink to="/articles" className="menu_link">
          Articles
        </NavLink>
        <span> </span>
        <NavLink to="/movies" className="menu_link">
          Movies
        </NavLink>
        <span> </span>
      </nav>
    </>
  );
};
