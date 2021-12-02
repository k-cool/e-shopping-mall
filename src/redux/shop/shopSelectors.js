import { createSelector } from 'reselect';

const selectShop = rootState => rootState.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);
