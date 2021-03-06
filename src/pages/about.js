import React from "react";

import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";

import logo from "../images/Marco Barreto - Logo_B_symbol.png";
import headshot from "../images/andrew-gans-headshot.png";

const About = () => (
  <Layout>
    <div class="about-hero">
      <Header />
      <div class="about-box">
        <div class="about-heading">
          <h2>
            Glanzrock Productions is a film and television company, led by
            Andrew Davies Gans, that develops, produces, and finances projects
            at all stages of development.
          </h2>
          <div class="about-text">
            <p>
              Based in Los Angeles, Glanzrock was launched in 2018. We strive to
              work with exceptional directors, writers, actors, and producers to
              create visually stunning and enthralling tales from all over the
              globe and of all genres.
            </p>
            <p>
              Glanzrock prides itself in the support and discovery of original,
              unique and compelling voices. We guide content with confidence,
              relying on our experience and collaborative efforts with creative
              teams to release the highest quality content in the industry.
            </p>
          </div>
        </div>
      </div>
    </div>

    <section>
      <div class="logo-flex">
        <div class="logo-text">
          <img src={logo} alt="glanzrock logomark" />
          <h2>The legend of the logo</h2>
          <p>
            Inspired by the notion that we’re who we are today because of who we
            were yesterday, the Glanzrock logo is a symbol representing the
            infinite power and potential within us all.
          </p>
          <p>
            Glanzrock is a family name. Two generations back, Andrew’s
            grandfather changed it to Gans for show business. The strong center
            line of the logo represents the Glanzrock line. Each subsequent line
            and dash are members of the Gans family. The dashes are morse code
            for their names.{" "}
          </p>
          <p>
            The circle encompassing these delicate lines is an Ouroboros, an
            ancient symbol of the eternal unity of all things, the cycle of
            birth and death from which the alchemist sought release and
            liberation, wholeness and infinity.
          </p>
        </div>
      </div>
    </section>

    <section class="logo-flex white">
      <div class="team-text">
        <img src={headshot} alt="Andrew Gans headshot" />
        <h3 class="name">Andrew Davies Gans</h3>
        <h3 class="title">Founder | CEO</h3>
        <p>
          Andrew was born in southern California, but for the majority of his
          childhood he was raised in Las Vegas, Nevada. Before film, Andrew’s
          dream was to become a major league baseball player. As a high school
          senior he was drafted to play professionally by the Tampa Bay Rays.
          Like his father before him, a career ending injury brought the dream
          of baseball to an end. Built from the same drive, resilience, and
          vision that led his father, Danny Gans, to be "The Man of Many
          Voices", Andrew found his way back to Los Angeles pursuing a career in
          the film industry where he’d begin writing, and producing.
        </p>
        <p>
          Andrew started his career when he founded the company, Brackish Dream
          Entertainment. There he produced films such as, “Get Out If You Can”
          with Oscar nominee, Ed Harris in a supporting role, and the genre
          film, “It lives Below”. Andrew also co-wrote the successful comic book
          franchise, “Solomon’s Men”, published by IDW.
        </p>
        <p>
          As a filmmaker Andrew expects to bridge the gap between the indie and
          studio film, telling intimate stories with strong universal themes on
          a large scale. In challenging what has been established, the goal is
          to inspire a new perspective on modern filmmaking.
        </p>
      </div>
    </section>
    <Footer />
  </Layout>
);

export default About;
