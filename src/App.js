import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Miami" />
        <footer>
          This project was coded by
          <span className="coder">
            <strong> Celine Cambier</strong> and is{" "}
            <a
              href="https://github.com/CelineCambier/weather-app-react"
              className="github-link"
              target="_blank"
              rel="noreferrer"
            >
              Open-Sourced on GitHub
            </a>
            .
          </span>
        </footer>
      </div>
    </div>
  );
}
