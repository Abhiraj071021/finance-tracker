import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav>
      <ul className="navbar glasscard">
        <li
          style={
            location.pathname === "/home"
              ? { color: "#000", borderBottom: "2px solid #000" }
              : { color: "#ffae00" }
          }
          className="navbar-item"
        >
          <Link to="/home">Home</Link>
        </li>
        <li
          style={
            location.pathname === "/transactions"
              ? { color: "#000", borderBottom: "2px solid #000" }
              : { color: "#ffae00" }
          }
          className="navbar-item"
        >
          <Link to="/transactions">Transactions</Link>
        </li>
        <li
          style={
            location.pathname === "/dashboard"
              ? { color: "#000", borderBottom: "2px solid #000" }
              : { color: "#ffae00" }
          }
          className="navbar-item"
        >
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
