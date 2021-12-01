import { ADD_ITEM, TOGGLE_CART_HIDDEN } from './cartTypes';
import { addItemTocart } from './cartUtils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemTocart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};
