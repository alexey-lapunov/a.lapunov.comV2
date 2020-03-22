import * as actionType from './constants';

const initialState = {
  isLoadingPage: true,
  isOpenPanel: false
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.IS_LOADING_PAGE: {
      return {
        ...state,
        isLoadingPage: action.payload
      };
    }
    case actionType.IS_OPEN_PANEL: {
      return {
        ...state,
        isOpenPanel: action.payload
      };
    }

    default: {
      return state;
    }
  }
};
