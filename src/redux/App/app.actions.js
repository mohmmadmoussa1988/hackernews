import AppActionTypes from './app.types';

export const SetFilterValue = (value) => ({
    type: AppActionTypes.SET_FILTER_VALUE,
    payload : value
  });
  
  