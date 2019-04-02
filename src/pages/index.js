import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";

import glanzrock3dBg from "../images/glanzrock-3d-bg.jpg";

const IndexPage = () => (
  <Layout>
    <Header />
    <img className="home-logo" src={glanzrock3dBg} alt="glanzrock logo" />
    <div className="back-black">
      <section className="project home">
        <div className="flex">
          <div className="hero-2">
            <h2>It is our nature to create, innovate, and collaborate.</h2>
            <p>
              We share stories. In their potential ability to touch the humanity
              and hearts of other people, to provoke moral indignation, instill
              compassion, and inspire action, we believe movies can ignite a
              sense of purpose and can allow our most audacious dreams to take
              flight.
            </p>
            <p className="learnabout">
              <Link to="/about">Learn more</Link>
            </p>
          </div>
        </div>
      </section>
    </div>

    <section id="projects" className="featured">
      <h2>Projects</h2>
      <div className="feature-grid">
        <figure className="item">
          <a href="changingthegame.html">
            <img src="images/tentcity-poster.png" />
            <figcaption className="item-caption">
              <p>Tent City</p>
            </figcaption>
          </a>
        </figure>

        <figure className="item">
          <a href="changingthegame.html">
            <img src="images/tentcity-poster.png" />
            <figcaption className="item-caption">
              <p>Changing The Game</p>
            </figcaption>
          </a>
        </figure>
        <figure className="item">
          <a href="changingthegame.html">
            <img src="images/tentcity-poster.png" />
            <figcaption className="item-caption">
              <p>Here Are The Young Men</p>
            </figcaption>
          </a>
        </figure>
        <figure className="item">
          <a href="changingthegame.html">
            <img src="images/tentcity-poster.png" />
            <figcaption className="item-caption">
              <p>1989</p>
            </figcaption>
          </a>
        </figure>
        <figure className="item">
          <a href="changingthegame.html">
            <img src="images/tentcity-poster.png" />
            <figcaption className="item-caption">
              <p>Dark As Night</p>
            </figcaption>
          </a>
        </figure>
      </div>
    </section>
    <Footer />
  </Layout>
);

export default IndexPage;
