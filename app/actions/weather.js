import * as types from './types';
import {buildWeatherURL, buildWeatherCoordsURL} from '../lib/api';

export const fetchWeather = location => (dispatch, getState) => {
  dispatch(fetchWeatherRequest());
  const url = buildWeatherURL(encodeURIComponent(location));

  fetch(url)
    .then(response => response.json())
    .then(data => dispatch(fetchWeatherSuccess(data)))
    .catch(error => dispatch(fetchWeatherFailure(error)));
};

export const fetchWeatherByCoords = (latitude, longitude) => (dispatch, getState) => {
  dispatch(fetchWeatherRequest());
  const url = buildWeatherCoordsURL(latitude, longitude);

  fetch(url)
    .then(response => response.json())
    .then(data => dispatch(fetchWeatherSuccess(data)))
    .catch(error => dispatch(fetchWeatherFailure(error)));
};

const fetchWeatherRequest = location => ({
  type: types.FETCH_WEATHER_REQUEST,
  location,
});

const fetchWeatherSuccess = data => ({
  type: types.FETCH_WEATHER_SUCCESS,
  data,
});

const fetchWeatherFailure = error => ({
  type: types.FETCH_WEATHER_FAILURE,
  error,
});
