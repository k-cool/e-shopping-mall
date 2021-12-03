import { createSelector } from 'reselect';

const selectShop = rootState => rootState.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = routeName =>
  createSelector([selectCollections], collections => collections[routeName]);
