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

        <form
          method="POST"
          netlify="true"
          name="contact"
          netlify-honeypot="bot-field"
        >
          <h2>Get in touch with us</h2>
          <input name="bot-field" type="text" style={{ display: "none" }} />
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
