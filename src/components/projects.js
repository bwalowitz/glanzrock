import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

const ALL_PROJECTS_QUERY = graphql`
  query AllProjectsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(projects)/.*.md$/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            intro
            slug
            poster
          }
        }
      }
    }
  }
`;

const Projects = () => (
  <StaticQuery
    query={ALL_PROJECTS_QUERY}
    render={({ allMarkdownRemark }) => (
      <section id="projects" className="featured">
        <h2>Projects</h2>
        <div className="feature-grid">
          {allMarkdownRemark.edges.map(edge => (
            <figure className="item" key={edge.node.frontmatter.slug}>
              <Link to={`/projects/${edge.node.frontmatter.slug}`}>
                <img src="images/tentcity-poster.png" alt="poster" />
                <figcaption className="item-caption">
                  <p>{edge.node.frontmatter.title}</p>
                </figcaption>
              </Link>
            </figure>
          ))}
        </div>
      </section>
    )}
  />
);

export default Projects;
