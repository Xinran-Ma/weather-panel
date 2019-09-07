const UPDATE_CURRENT_WEATHER = "UPDATE_CURRENT_WEATHER";
const FETCH_ADD_FAILED = "FETCH_ADD_FAILED";

const fetchToday = (location) => dispatch => {
  return fetch("https://api.openweathermap.org/data/2.5/weather?APPID=79f2614dda20dcff14201b1cf1762e02&units=metric&q=" + location)
    .then(response => response.json())
    .then(today => {
      dispatch({
        type: UPDATE_CURRENT_WEATHER,
        value: today
      }).then(console.log(today));
    })
    .catch(e => {
      dispatch({
        type: FETCH_ADD_FAILED,
        e: e
      });
    });
};

// const dispatchFetchToday = dispatch(fetchToday())

export default fetchToday;