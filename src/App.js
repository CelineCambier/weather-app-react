import React from "react";
import Weather from "./Weather.js";
import Footer from "./Footer.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <h1>Weather App</h1>
       <Weather city="Miami"/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
