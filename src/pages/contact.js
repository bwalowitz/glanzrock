import React from "react";

import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";

const Contact = () => (
  <Layout>
    <Header />
    <div className="contact content">
      <section className="project contact">
        {/* <h1>Contact</h1> */}

        <form method="POST" action="https://formspree.io/bwalowitz@gmail.com">
          <h2>Get in touch with us</h2>
          {/* <div className="hpot">
        <label>Leave this field empty: <input name="_next"></label>
      </div> */}
          <input type="hidden" name="_next" value="/contact-thanks.html" />
          <input
            name="name"
            type="text"
            className="feedback-input"
            placeholder="Name"
          />
          <input
            name="email"
            type="text"
            className="feedback-input"
            placeholder="Email"
          />
          <textarea
            name="textarea"
            className="feedback-input"
            placeholder="Comment"
          />
          <input type="submit" value="SUBMIT" />
        </form>
      </section>
    </div>
    <Footer />
  </Layout>
);

export default Contact;
