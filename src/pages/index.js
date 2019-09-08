import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/font-icons.scss";
import "../styles/site.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1 className="greeting">
      <span className="greeting__prefix">hi! i'm <span className="name">kim</span></span>
    </h1>
    <div className="text">web &middot; apps &middot; games</div>
    <ul className="social-network-links">
      <li><a href="mailto:hello@kimf.se" className="social-network-link icon-mail-alt"></a></li>
      <li><a href="https://github.com/foke/" className="social-network-link icon-github"></a></li>
      <li><a href="http://www.linkedin.com/in/fouchenette" className="social-network-link icon-linkedin"></a></li>
    </ul>
  </Layout>
)

export default IndexPage
