import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-style">
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
