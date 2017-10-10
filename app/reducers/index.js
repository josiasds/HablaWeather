import {combineReducers} from 'redux';
import locations from './locations';
import currentWeather from './currentWeather';

export default combineReducers({
  locations,
  currentWeather,
});
