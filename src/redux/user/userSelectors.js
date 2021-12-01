import { createSelector } from 'reselect';

const selectUser = rootState => rootState.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
