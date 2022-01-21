import React from "react";
import "./App.css";
import { Route, Link, NavLink } from "react-router-dom";
import TourDates from "./TourDates"
import SocialFollow from "./SocialFollow"

function NavBar() {
  return (
    <div>
    <NavLink style={{color: "white"}}to="/">Home</NavLink>&nbsp;
    <NavLink style={{color: "white"}}to="/tourdates">Tour Dates</NavLink>&nbsp;
    <NavLink style={{color: "white"}}to="/store">Store</NavLink>&nbsp;
    <NavLink style={{color: "white"}}to="/bio">Bio</NavLink>&nbsp;
    <NavLink style={{color: "white"}}to="/releases">Listen</NavLink>&nbsp;
    <NavLink style={{color: "white"}}to="/archive">Archive</NavLink>&nbsp;
  </div>
    );
  }


export default NavBar;