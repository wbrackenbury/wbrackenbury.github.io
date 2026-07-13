import React from "react";
import { useLocation } from "react-router-dom";
import HamburgerMenu from "./hamburger-menu";
import LinkMenu from "./link-menu";

import AboutPage from "./about";
import ResearchPage from "./research";

export const LINKS = [
  { title: "github", href: "https://github.com/wbrackenbury" },
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/will-brackenbury-336581a5/",
  },
];

// need to be fancy, in order to deal with routing
function getRoute(location) {
  if (location === "publications") {
    return <ResearchPage />;
  }
  if (location === "research") {
    return <ResearchPage />;
  }
  return <AboutPage />;
}

export default function RootApp() {
  const loc = useLocation();
  let locationSplit = (loc && loc?.hash?.split("/")[1]) || "about";
  return (
    <div className={`${locationSplit[locationSplit.length - 1]} root-wrapper`}>
      <HamburgerMenu />
      <div className="top-links">
        <div className="top-link-title">WILL BRACKENBURY</div>
        <LinkMenu />
      </div>
      <div className="left-panel">
        <div className="profpic-wrapper">
          <img
            className="profpic"
            src="/assets/profile_picture.jpg"
            alt="me on a boat"
          />
        </div>
        <div>
          <h1>Will Brackenbury</h1>
        </div>
        <div>
          <h2> Chicago, IL</h2>
        </div>
        <div className="social-links">
          {LINKS.map((link) => (
            <a className="social-link" key={link.title} href={link.href}>
              {link.title}
            </a>
          ))}
        </div>
      </div>
      <div className="right-panel">
        <LinkMenu />
        {getRoute(locationSplit)}
      </div>
    </div>
  );
}
