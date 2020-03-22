import * as actionType from './constants';

export const setLoadingPage = value => ({
  type: actionType.IS_LOADING_PAGE,
  payload: value
});

export const setOpenPanel = value => ({
  type: actionType.IS_OPEN_PANEL,
  payload: value
});
