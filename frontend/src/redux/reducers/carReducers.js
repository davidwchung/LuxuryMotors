import * as actionTypes from "../constants/carConstants";

export const getAllCarsReducer = (state = { cars: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_CARS_REQUEST:
      return {
        loading: true,
        cars: [],
      };
    case actionTypes.GET_CARS_SUCCESS:
      return {
        loading: false,
        cars: action.payload,
      };
    case actionTypes.GET_CARS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};

export const getCarByIdReducer = (state = { car: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_CAR_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_CAR_SUCCESS:
      return {
        loading: false,
        car: action.payload,
      };
    case actionTypes.GET_CAR_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};
