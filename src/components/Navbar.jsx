import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/Contact"> Contact </Link>
        <Link to="/Cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};