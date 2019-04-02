import { Link } from "gatsby";
import React from "react";

import glanzrockNameWhite from "../images/glanzrock-name-white.png";

const Header = () => (
  <div className="sticky">
    <header>
      <Link to="/">
        <img src={glanzrockNameWhite} />
      </Link>
      <nav>
        <Link to="/#projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/news">News</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  </div>
);

export default Header;
