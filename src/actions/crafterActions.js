import axios from 'axios';

import { GET_CRAFTER, CRAFTER_LOADING, GET_ERRORS, CLEAR_CURRENT_CRAFTER } from './types';

const BASE_URL = "https://thecraftersconnectapi.herokuapp.com/api/";

//Get Current profile
export const getCurrentCrafter = () => dispatch => {
    dispatch(setCrafterLoading());
    axios.get(`${BASE_URL}crafter`)
    .then(res =>
      dispatch({
        type: GET_CRAFTER,
        payload: res.data
      })
    ).catch(err =>
      dispatch({
        type: GET_CRAFTER,
        payload: {}
      })
    );
}

//Crafter Loading
export const setCrafterLoading = () => {
  return {
    type: CRAFTER_LOADING
  }
}

//Clear Crafter
export const clearCurrentCrafter = () => {
  return {
    type: CLEAR_CURRENT_CRAFTER
  };
};
