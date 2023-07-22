import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Thu</div>
          <WeatherIcon code="few-clouds-night"/>
          <div className="WeatherForecastTemperatures">
            <span className="WeatherForecastTemperatureMax">19°</span>
            <span className="WeatherForecastTemperatureMin">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
