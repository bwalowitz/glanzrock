/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import "./reset.css";
import "./layout.css";

import glanzrockNameWhite from "../images/glanzrock-name-white.png";
import glanzrock3dBg from "../images/glanzrock-3d-bg.jpg";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="sticky">
          <header>
            <a href="index.html">
              <img src={glanzrockNameWhite} />
            </a>
            <nav>
              <a href="#projects">Projects</a>
              <a href="about.html">About</a>
              <a href="news.html">News</a>
              <a href="contact.html">Contact</a>
            </nav>
          </header>
        </div>
        <div className="content">
          <div className="container">
            <img
              className="home-logo"
              src={glanzrock3dBg}
              alt="glanzrock logo"
            />
            {children}
          </div>
        </div>

        <footer>
          <p>Copyright &copy; 2019 Glanzrock Productions</p>
        </footer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
