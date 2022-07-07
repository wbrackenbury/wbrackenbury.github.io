import React from "react";

import { ABOUT, NEWS } from "../constants";

class AboutPage extends React.Component {
  render() {
    return (
      <div className="page about-page">
        <div className="text-block">{ABOUT}</div>
        <h3>News</h3>
        <div className="text-block">
          {NEWS.map((n, idx) => (
            <li key={idx}>{n}</li>
          ))}
        </div>
        <div className="footer" />
      </div>
    );
  }
}
AboutPage.displayName = "App";
export default AboutPage;
