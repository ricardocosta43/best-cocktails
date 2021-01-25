import {
    FETCH_DRINKS_REQUEST,
    FETCH_DRINKS_SUCCESS,
    FETCH_DRINKS_FAILURE
  } from './DrinksTypes'
  
  const initialState = {
    loading: false,
    categories: [],
    error: ''
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DRINKS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_DRINKS_SUCCESS:
        return {
          loading: false,
          drinks: action.payload,
          error: ''
        }
      case FETCH_DRINKS_FAILURE:
        return {
          loading: false,
          drinks: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default reducer