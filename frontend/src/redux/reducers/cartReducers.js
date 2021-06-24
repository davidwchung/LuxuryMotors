import * as actionTypes from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const car = action.payload;

      const carExists = state.cartItems.find((x) => x.id === car.id);

      if (carExists) {
        car.quantity++;
        return {
          cartItems: state.cartItems.map((x) =>
            x.id === carExists.id ? car : x
          ),
        };
      } else {
        return {
          cartItems: [...state.cartItems, car],
        };
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };
    case actionTypes.CLEAR_CART:
      return {
        cartItems: [],
      };
    default:
      return state;
  }
};
