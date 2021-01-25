import axios from "axios";
import {
    FETCH_DRINKS_DETAIL_REQUEST,
    FETCH_DRINKS_DETAIL_SUCCESS,
    FETCH_DRINKS_DETAIL_FAILURE
  } from './DrinksDetailTypes'

export const getDrinks = (drink) => {
  return (dispatch) => {
    dispatch(fetchDrinksDetailRequest());
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s==${drink}`)
      .then((response) => {
        const drinksDetail = response.data;
        dispatch(fetchDrinksDetailSuccess(drinksDetail));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchDrinksDetailFailure(error.message));
      });
  };
};

export const fetchDrinksDetailRequest = () => {
  return {
    type: FETCH_DRINKS_DETAIL_REQUEST,
  };
};

export const fetchDrinksDetailSuccess = (drinksDetail) => {
  return {
    type: FETCH_DRINKS_DETAIL_SUCCESS,
    payload: drinksDetail,
  };
};

export const fetchDrinksDetailFailure = (error) => {
  return {
    type: FETCH_DRINKS_DETAIL_FAILURE,
    payload: error,
  };
};
