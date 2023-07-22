import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "e48e1aab0acf4fc215c13f02ct8bo5ab";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

  Axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Thu</div>
          <WeatherIcon code="few-clouds-night" />
          <div className="WeatherForecastTemperatures">
            <span className="WeatherForecastTemperatureMax">19°</span>
            <span className="WeatherForecastTemperatureMin">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
