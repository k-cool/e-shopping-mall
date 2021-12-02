import { createSelector } from 'reselect';

const selectDirectory = rootState => rootState.directory;

export const selectSections = createSelector(
  [selectDirectory],
  directory => directory.sections
);
