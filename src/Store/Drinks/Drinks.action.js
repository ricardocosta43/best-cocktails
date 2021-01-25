import axios from "axios";
import {
    FETCH_DRINKS_REQUEST,
    FETCH_DRINKS_SUCCESS,
    FETCH_DRINKS_FAILURE
  } from './DrinksTypes'

export const getDrinks = (category) => {
  console.log(category);
  return (dispatch) => {
    dispatch(fetchDrinksRequest());
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => {
        console.log(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
        const drinks = response.data;
        console.log(drinks);
        dispatch(fetchDrinksSuccess(drinks));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchDrinksFailure(error.message));
      });
  };
};

export const fetchDrinksRequest = () => {
  return {
    type: FETCH_DRINKS_REQUEST,
  };
};

export const fetchDrinksSuccess = (drinks) => {
  return {
    type: FETCH_DRINKS_SUCCESS,
    payload: drinks,
  };
};

export const fetchDrinksFailure = (error) => {
  return {
    type: FETCH_DRINKS_FAILURE,
    payload: error,
  };
};
