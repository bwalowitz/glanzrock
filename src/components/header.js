import { Link } from "gatsby";
import React from "react";

import glanzrockNameWhite from "../images/glanzrock-name-white.png";

const Header = () => (
  <div>
    <div className="sticky">
      <header>
        <Link to="/">
          <img src={glanzrockNameWhite} alt="glanzrock" />
        </Link>
        <nav>
          {/* <Link to="/#projects">Projects</Link> */}
          <Link to="/about">About</Link>
          {/* <Link to="/news">News</Link> */}
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    </div>
  </div>
);

export default Header;
