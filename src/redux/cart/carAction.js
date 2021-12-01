import {
  ADD_ITEM,
  DELETE_ITEM,
  REMOVE_ITEM,
  TOGGLE_CART_HIDDEN,
} from './cartTypes';

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const deleteItem = id => ({
  type: DELETE_ITEM,
  payload: id,
});
