const currentWeatherReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_WEATHER':
      console.log(action.value);
      return {
        todayTemp: Math.ceil(action.value.main.temp) + '°C', 
        todaySky: action.value.weather[0].main,
        todayHumidity: action.value.main.humidity + '%',
        todayWind: Math.ceil(action.value.wind.speed * 3.6) + 'KM/h',
      };
    default: 
      return state;
  }
}

export default currentWeatherReducer;