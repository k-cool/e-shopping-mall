import { createSelector } from 'reselect';

const selectCart = rootState => rootState.cart;

export const selectHidden = createSelector([selectCart], cart => cart.hidden);

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
);
