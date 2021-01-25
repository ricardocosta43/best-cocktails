import {
    FETCH_DRINKS_DETAIL_REQUEST,
    FETCH_DRINKS_DETAIL_SUCCESS,
    FETCH_DRINKS_DETAIL_FAILURE
  } from './DrinksDetailTypes'
  
  const initialState = {
    loading: false,
    categories: [],
    error: ''
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DRINKS_DETAIL_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_DRINKS_DETAIL_SUCCESS:
        return {
          loading: false,
          drinksDetails: action.payload,
          error: ''
        }
      case FETCH_DRINKS_DETAIL_FAILURE:
        return {
          loading: false,
          drinksDetails: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default reducer