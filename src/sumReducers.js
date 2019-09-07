import { combineReducers } from 'redux';

import CurrentWeatherReducer from './CurrentWeather/currentWeatherReducer';
import ForecastWeatherReducer from './ForecastWeather/forecastWeatherReducer';
import LocationReducer from './Location/locationReducer';
import { CountryReducer } from './Location/locationReducer';
import NewsReducer from './RetrieveNews/newsReducer';

const rootReducer = combineReducers({
  currentWeather: CurrentWeatherReducer,
  forecast: ForecastWeatherReducer,
  location: LocationReducer,
  country: CountryReducer,
  news: NewsReducer
})

export default rootReducer;