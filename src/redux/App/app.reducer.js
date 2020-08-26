import AppActionTypes from './app.types';
const INITIAL_STATE = {
    filter_value:''
}


const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case AppActionTypes.SET_FILTER_VALUE : 
        return {
            ...state,
            filter_value : action.payload
        }
		  default:
        return state;
    }
  };
  
  export default appReducer;
  