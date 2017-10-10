import * as types from '../actions/types';

const initialState = {};

const locations = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        [action.data.id]: action.data,
      };
    default:
      return state;
  }
};

export default locations;
