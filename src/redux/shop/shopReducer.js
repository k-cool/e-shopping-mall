import {
  FETCH_COLLECTINOS_FAILURE,
  FETCH_COLLECTINOS_START,
  FETCH_COLLECTINOS_SUCCESS,
} from './shopTypes';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTINOS_START:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_COLLECTINOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };

    case FETCH_COLLECTINOS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};
