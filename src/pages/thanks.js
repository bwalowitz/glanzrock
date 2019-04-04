import React from "react";

import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";

const Thanks = () => (
  <Layout>
    <Header />
    <section className="content project contact thanks">
      <div className="thanks-box">
        <h2 className="thanks-animation">Thanks for reaching out!</h2>
      </div>
    </section>
    <Footer />
  </Layout>
);

export default Thanks;
