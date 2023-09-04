import React from "react";
import { Weather } from '../../types/weather';
import './WeatherInfo.css';

type Props = {
  data: Weather
};

const WeatherInfo: React.FC<Props> = ({ data }) => (
  <>
    <div className="widget weather-detail">
      {console.log("data from Info", data)}
      <h2 data-testid="city-name">{data.city}</h2>
      <img className="icon" src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} alt={"icon"} />
      <p>{data.description}</p>
      <h3>{data.temp}º</h3>
      <p>{data.main}</p>
    </div>
    <div className="weather-extra-wrapper my-other-step">
      <div className="widget weather-extra bg-extra1">
        <p><span>Temp</span> | <span>{data.temp}º</span></p>
        <p><span>Feels like</span> | <span>{data.feels_like}º</span></p>
      </div>
      <div className="widget weather-extra bg-extra2">
        <p><span>Humidity</span> | <span>{data.humidity}</span></p>
        <p><span>Pressure</span> | <span>{data.pressure}</span></p>
      </div>
      <div className="widget weather-extra bg-extra3">
        <p><span>Temp max</span> | <span>{data.temp_max}º</span></p>
        <p><span>Temp min</span> | <span>{data.temp_min}º</span></p>
      </div>
    </div>
  </>
);

export default WeatherInfo;
