const API_KEY = 'c6caf2e78ddfc740ceea63478cb1b59a'; // shouldn't be in the commited files
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const buildWeatherURL = params =>
  `${BASE_URL}weather?q=${params}&appid=${API_KEY}&units=imperial`;
