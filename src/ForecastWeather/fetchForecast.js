const UPDATE_FORECAST_WEATHER = "UPDATE_FORECAST_WEATHER";
const FETCH_ADD_FAILED = "FETCH_ADD_FAILED";

const fetchForecast = (location) => dispatch => {
  return fetch("https://api.openweathermap.org/data/2.5/forecast?APPID=79f2614dda20dcff14201b1cf1762e02&units=metric&q=" + location)
    .then(response => response.json())
    .then(forecast => {
      dispatch({
        type: UPDATE_FORECAST_WEATHER,
        value: forecast.list
      }).then(console.log(forecast));
    })
    .catch(e => {
      dispatch({
        type: FETCH_ADD_FAILED,
        e: e
      });
    });
};


export default fetchForecast;