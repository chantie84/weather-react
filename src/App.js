import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather app</h1>
        <WeatherSearch />
      </header>
      <a
        href="https://github.com/chantie84/weather-react"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open-sourced on GitHub
      </a>
      ;
    </div>
  );
}

export default App;
