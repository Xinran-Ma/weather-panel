const forecastWeatherReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_FORECAST_WEATHER':
      return [
        ...action.value
      ];
    default: 
      return state;
  }
}

export default forecastWeatherReducer;