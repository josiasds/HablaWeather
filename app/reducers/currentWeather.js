import * as types from '../actions/types';

const initialState = {
  isLoading: false,
  data: null,
};

const currentWeather = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_WEATHER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    case types.FETCH_WEATHER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default currentWeather;
