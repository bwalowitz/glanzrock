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

const AboutLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query AboutSiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
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

export default AboutLayout;
