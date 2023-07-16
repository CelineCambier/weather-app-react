import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This page was coded by
        <span className="coder">
          <strong> Celine Cambier</strong> and is
          <a
            href="https://github.com/CelineCambier/weather-app-react"
            className="github-link"
            target="_blank"
            rel="noreferrer"
          > Open-Sourced on GitHub
          </a>
          .
        </span>
      </p>
    </div>
  );
}