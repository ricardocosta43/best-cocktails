import axios from "axios";
import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE
  } from './CategoriesTypes'

export const getCategories = () => {
  return (dispatch) => {
    dispatch(fetchCategoriesRequest());
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then((response) => {
        const categories = response.data;
        dispatch(fetchCategoriesSuccess(categories));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchCategoriesFailure(error.message));
      });
  };
};

export const fetchCategoriesRequest = () => {
  return {
    type: FETCH_CATEGORIES_REQUEST,
  };
};

export const fetchCategoriesSuccess = (categories) => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories,
  };
};

export const fetchCategoriesFailure = (error) => {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: error,
  };
};
