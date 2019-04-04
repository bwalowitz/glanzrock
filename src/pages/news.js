import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";

const ALL_NEWS_QUERY = graphql`
  query AllNewsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(news)/.*.md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            url
            source
          }
        }
      }
    }
  }
`;

const News = () => (
  <Layout>
    <Header />
    <StaticQuery
      query={ALL_NEWS_QUERY}
      render={({ allMarkdownRemark }) => (
        <section className="project">
          <h1>News</h1>
          {allMarkdownRemark.edges.map(edge => (
            <div class="project-flex news-flex" key={edge.node.frontmatter.url}>
              <div class="news-image">
                <img src="img/news-sample.jpg" alt="News" />
              </div>

              <div class="news-text">
                <h3 class="news-date">{edge.node.frontmatter.date}</h3>
                <h3 class="news-source">{edge.node.frontmatter.source}</h3>
                <a
                  href={edge.node.frontmatter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 class="news-title">{edge.node.frontmatter.title}</h2>
                </a>
              </div>
            </div>
          ))}
        </section>
      )}
    />
    <Footer />
  </Layout>
);

export default News;
