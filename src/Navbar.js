import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink
        exact
        to="/"
        style={{ color: "#000", textDecoration: "none", marginRight: "20px" }}
      >
        Item
      </NavLink>
      <NavLink
        exact
        to="/cart"
        style={{ color: "#000", textDecoration: "none", marginRight: "20px" }}
      >
        Cart
      </NavLink>
    </div>
  );
};

export default Navbar;
