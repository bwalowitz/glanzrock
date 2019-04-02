import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";

import logo from "../images/Marco Barreto - Logo_B_symbol.png";
import headshot from "../images/andrew-gans-headshot.png";

const News = () => (
  <Layout>
    <Header />
    <section class="project">
      <h1>News</h1>
      <div class="project-flex news-flex">
        <div class="news-image">
          <img src="img/news-sample.jpg" alt="News Image" />
        </div>

        <div class="news-text">
          <h3 class="news-date">January 20, 2019</h3>
          <h3 class="news-source">Hollywood Reporter</h3>
          <a
            href="https://www.hollywoodreporter.com/news/here-are-young-men-ralph-ineson-susan-lynch-join-cast-1145987"
            target="_blank"
          >
            <h2 class="news-title">
              Ralph Ineson, Susan Lynch Join 'Here Are the Young Men'
              (Exclusive)
            </h2>
          </a>
        </div>
      </div>

      <div class="project-flex news-flex">
        <div class="news-image">
          <img src="img/news-sample.jpg" alt="News Image" />
        </div>

        <div class="news-text">
          <h3 class="news-date">January 20, 2019</h3>
          <h3 class="news-source">Hollywood Reporter</h3>
          <a
            href="https://www.hollywoodreporter.com/news/here-are-young-men-ralph-ineson-susan-lynch-join-cast-1145987"
            target="_blank"
          >
            <h2 class="news-title">
              Ralph Ineson, Susan Lynch Join 'Here Are the Young Men'
              (Exclusive)
            </h2>
          </a>
        </div>
      </div>

      <div class="project-flex news-flex">
        <div class="news-image">
          <img src="img/news-sample.jpg" alt="News Image" />
        </div>

        <div class="news-text">
          <h3 class="news-date">January 20, 2019</h3>
          <h3 class="news-source">Hollywood Reporter</h3>
          <a
            href="https://www.hollywoodreporter.com/news/here-are-young-men-ralph-ineson-susan-lynch-join-cast-1145987"
            target="_blank"
          >
            <h2 class="news-title">
              Ralph Ineson, Susan Lynch Join 'Here Are the Young Men'
              (Exclusive)
            </h2>
          </a>
        </div>
      </div>

      <div class="project-flex news-flex">
        <div class="news-image">
          <img src="img/news-sample.jpg" alt="News Image" />
        </div>

        <div class="news-text">
          <h3 class="news-date">January 20, 2019</h3>
          <h3 class="news-source">Hollywood Reporter</h3>
          <a
            href="https://www.hollywoodreporter.com/news/here-are-young-men-ralph-ineson-susan-lynch-join-cast-1145987"
            target="_blank"
          >
            <h2 class="news-title">
              Ralph Ineson, Susan Lynch Join 'Here Are the Young Men'
              (Exclusive)
            </h2>
          </a>
        </div>
      </div>
    </section>
    <Footer />
  </Layout>
);

export default News;
