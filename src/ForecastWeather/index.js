import React from "react";

const ForecastWeather = ({forecast}) => {
  return (
    <div className="forecast-weather">
    {
      forecast.map((singleItem) => (forecast.indexOf(singleItem) + 1) % 8 === 0 ? (
        <div key={singleItem.dt} className="forecast-single">
          
          <h3 className="forecast-weather--status">{singleItem.weather[0].main}</h3>
          <p className="forecast-weather--temperature">{Math.ceil(singleItem.main.temp) + '°C'}</p>
          {/* <img className="forecast-weather--sky" src={getWeatherIcon(singleItem.weather[0].main)} alt={singleItem.weather[0].main}/> */}
          <p className="forecast-weather--sky-description">{singleItem.weather[0].description}</p>
        </div>
      ) : true
      )
    }
    </div>
  )
}

export default ForecastWeather;