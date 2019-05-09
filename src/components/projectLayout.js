import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "./layout";
import Header from "./header";
import Footer from "./footer";

import Lightbox from "react-images";

export default class projectLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { lightboxIsOpen: false, currentImage: 0 };
  }
  render() {
    const { markdownRemark } = this.props.data;

    const images = markdownRemark.frontmatter.images.map(image => {
      return { src: image };
    });

    const closeLightbox = () => {
      this.setState({
        lightboxIsOpen: false
      });
    };

    const openLightbox = () => {
      this.setState({
        lightboxIsOpen: true
      });
    };

    const nextImage = () => {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    };

    const prevImage = () => {
      this.setState({
        currentImage: this.state.currentImage - 1
      });
    };

    return (
      <Layout>
        <Header />
        <section className="project content">
          <div className="project-flex">
            <div className="project-text">
              <h2>{markdownRemark.frontmatter.title}</h2>
              <p className="project-synopsis">
                {markdownRemark.frontmatter.intro}
              </p>
              <p>{markdownRemark.frontmatter.description}</p>
              {markdownRemark.frontmatter.credits.length > 1 ? (
                <div className="credit">
                  <h3 className="credit-heading">Credits</h3>
                  {markdownRemark.frontmatter.credits.map(credit => (
                    <p className="credit-info" key={credit}>
                      {credit}
                    </p>
                  ))}
                </div>
              ) : (
                ""
              )}
              <div className="category">
                <p>{markdownRemark.frontmatter.category}</p>
              </div>
            </div>
            <div className="project-image">
              <Lightbox
                images={images}
                isOpen={this.state.lightboxIsOpen}
                currentImage={this.state.currentImage}
                onClickPrev={prevImage}
                onClickNext={nextImage}
                onClose={closeLightbox}
              />
              <img
                src={markdownRemark.frontmatter.poster}
                alt={`${markdownRemark.frontmatter.title} Poster`}
                onClick={openLightbox}
              />
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
        order
        intro
        description
        slug
        poster
        credits
        category
        images
      }
    }
  }
`;
