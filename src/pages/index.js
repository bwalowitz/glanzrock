import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import Projects from "../components/projects";

// import glanzrock3dBg from "../images/glanzrock-3d-bg.jpg";

const IndexPage = () => (
  <Layout>
    <Header />
    {/* <img className="home-logo" src={glanzrock3dBg} alt="glanzrock logo" /> */}
    <div className="home-logo"></div>
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

    {/* <Projects />  */}
    <Footer />
  </Layout>
);

export default IndexPage;
