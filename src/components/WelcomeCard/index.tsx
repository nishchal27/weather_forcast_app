import React from "react";
import { Weather } from '../../types/weather';
import './WelcomeCard.css';

const WelcomeCard = () => (
  <>
    <div className="widget weather-detail-card">
      <h2 data-testid="city-name">{"Search weather details of your city"}</h2>
      <img className="icon" src={`https://openweathermap.org/img/wn/02d@2x.png`} alt={"icon"} />
      <p>{"openWeather API"}</p>
      <p>{""}</p>
    </div>
  </>
);

export default WelcomeCard;
