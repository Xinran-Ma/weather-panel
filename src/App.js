import React from 'react';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { connect, Provider } from 'react-redux';

import sumReducers from './sumReducers';
import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';
import RetrieveNews from './RetrieveNews'

import Location from './Location';
import fetchToday from './CurrentWeather/fetchToday';
import fetchForecast from './ForecastWeather/fetchForecast';
import fetchNews from './RetrieveNews/fetchNews';

const UPDATE_LOCATION = 'UPDATE_LOCATION';
const UPDATE_COUNTRY = 'UPDATE_COUNTRY';

let store = createStore(sumReducers, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
store.dispatch(updateSydney);

/****************
 * Implement Data Update Actions
 ***************/
export function updateSydney() {
  store.dispatch({type: UPDATE_LOCATION, value: 'Sydney'});
  store.dispatch({type: UPDATE_COUNTRY, value: 'AU'});
  store.dispatch(fetchToday('Sydney'));
  store.dispatch(fetchForecast('Sydney'));
  store.dispatch(fetchNews('AU'));
};

export function updateTokyo() {
  store.dispatch({type: UPDATE_LOCATION, value: 'Tokyo'})
  store.dispatch(fetchToday('Tokyo'));
};

export function updateBeijing() {
  store.dispatch({type: UPDATE_LOCATION, value: 'Beijing'})
  store.dispatch(fetchToday('Beijing'));
  
};

export function updateLondon() {
  store.dispatch({type: UPDATE_LOCATION, value: 'London'})
  store.dispatch(fetchToday('London'));
};


/****************
 * Add Connection Between UI & Store
 ***************/

const ConnectedCurrentWeather = connect(
  state => state
)(CurrentWeather);

const ConnectedForecastWeather = connect(
  state => state
)(ForecastWeather);

const ConnectedLocation = connect(
  state => state
)(Location);

const ConnectedNews = connect(
  state => state
)(RetrieveNews);

function App() {
  return (
    <Provider store={store}>
      <div id="weather-panel">
        <div className="top-area">
          <ConnectedCurrentWeather />
          <ConnectedLocation />
        </div>
        <div className="bottom-area">
          <ConnectedNews />
          <ConnectedForecastWeather />
        </div>
      </div>
    </Provider>
  );
}

export default App;
