import DIRECTORY_DATA from './DIRECTORY_DATA';

const INITIAL_STATE = {
  sections: DIRECTORY_DATA,
};

export const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
