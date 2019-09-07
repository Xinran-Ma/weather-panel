import React from "react";

const CurrentWeather = ({currentWeather}) => {
  return (
    <div className="current-weather">
      <div className="current-weather__top-area">
        <p className="temperature">{currentWeather.todayTemp}</p>
        <p className="weather-description">{currentWeather.todaySky}</p>
      </div>
      <div className="current-weather__bottom-area">
        <div className="humidity">
          <p className="humidity-title">Humidity</p>
          <p className="humidity-data">{currentWeather.todayHumidity}</p>
        </div>
        <div className="wind">
          <p className="wind-title">Wind</p>
          <p className="wind-data">{currentWeather.todayWind}</p>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather;