import * as actionTypes from "../constants/carConstants";
import axios from "axios";

export const getAllCars = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_CARS_REQUEST });
    const { data } = await axios.get("/api/cars");
    dispatch({
      type: actionTypes.GET_CARS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CARS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCarById = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_CAR_REQUEST });
    const { data } = await axios.get(`/api/cars/${id}`);
    dispatch({
      type: actionTypes.GET_CAR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CAR_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
