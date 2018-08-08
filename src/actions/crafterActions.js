import axios from 'axios';

import { GET_CRAFTER, CRAFTER_LOADING, GET_ERRORS, CLEAR_CURRENT_CRAFTER } from './types';

const BASE_URL = "https://thecraftersconnectapi.herokuapp.com/api/";

//Get Current crafter
export const getCurrentCrafter = () => dispatch => {
    dispatch(setCrafterLoading());
    console.log("Get current crafter running from Actions");
    axios.get(`${BASE_URL}crafters`)
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

//Create Crafter
export const createCrafter = (crafterData, history) => dispatch => {
  axios.post(`${BASE_URL}crafters`, crafterData)
  .then(res => history.push("crafters/dashboard"))
  .catch(err => 
  dispatch({
    type: GET_ERRORS,
    payload: err.response.data
    })
  );
};

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
