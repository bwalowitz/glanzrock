import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "./layout";
import Header from "./header";
import Footer from "./footer";

export default class projectLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;

    return (
      <Layout>
        <Header />
        <section className="project">
          <div className="project-flex">
            <div className="project-text">
              <h2>{markdownRemark.frontmatter.intro}</h2>
              <p
                className="project-synopsis"
                dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
              />
              <div className="credit">
                <h3 className="credit-heading">Credits</h3>
                <p className="credit-info">Written by Josh Allen</p>
                <p className="credit-info">Directed by Andrew Fairbanks</p>
                <p className="credit-info">Produced by Josh Allen</p>
              </div>
            </div>
            <div className="project-image">
              <img src="img/TentCity-Poster.png" alt="Tent City Poster" />
            </div>
          </div>
        </section>
        <Footer />
      </Layout>
    );
  }
}

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        intro
        slug
      }
    }
  }
`;
