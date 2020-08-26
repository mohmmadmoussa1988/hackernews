import AppActionTypes from './app.types';

export const fetchOffersStart = () => ({
    type: AppActionTypes.FETCH_OFFERS_START
  });
  
  export const fetchOffersSuccess = offers => ({
    type: AppActionTypes.FETCH_OFFERS_SUCCESS,
    payload: offers
  });
  
  export const fetchOffersFailure = errorMessage => ({
    type: AppActionTypes.FETCH_OFFERS_FAILURE,
    payload: errorMessage
  });
  
  export const setAddtohomescreenCounter = () => ({
    type: AppActionTypes.SET_ADD_TO_HOME_SCREEN_COUNTER
  });

  export const addtohomescreen = (status) => ({
    type: AppActionTypes.SET_ADD_TO_HOME_SCREEN,
    payload : status
  });

  export const getServerUrl = () => ({
    type: AppActionTypes.GET_SERVE_URL  });

  
    export const addMarketName = (name) =>({
      type: AppActionTypes.SET_MARKET_NAME,
      payload : name
    })

    export const OpenedCategory = (name) => ({
      type: AppActionTypes.SET_OPENED_CATEGORY,
      payload : name
    })
  


    export const order_submitted = () =>({
      type: AppActionTypes.CLEAR_ORDER_DATA
    })

    export const setReceiveNotification = (value) =>({
      type: AppActionTypes.SET_RECEIVE_NOTIFICATION_TRUE,
      payload: value
    })

    export const updateServerURL = (value) =>({
      type: AppActionTypes.UPDATE_SERVER_URL,
      payload: 'https://kamosarabi.se:4433'
    })



  export const fetchoffersStartAsync = (serverUrl) => {
    return dispatch => {
        dispatch(fetchOffersStart());
        dispatch(setAddtohomescreenCounter());
        fetch(serverUrl+"general/offers")
        .then(result => result.json())
        .then(result=>{
          dispatch(fetchOffersSuccess(result));
        }).catch(error=> {
          dispatch(fetchOffersFailure(error));
        });       
    };
  };
  