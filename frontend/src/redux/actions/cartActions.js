import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/cars/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: data._id,
      name: data.name,
      manufacturer: data.manufacturer,
      price: data.price,
      imageUrl: data.imageUrl,
      quantity: quantity,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const clearCart = () => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.CLEAR_CART,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
