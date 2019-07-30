import axios from 'axios';

import { GET_EVENTS, EVENT_LOADING, REGISTER_FOR_EVENT, EVENT_REGISTRATION_FAILED ,DELETE_EVENT_SUCCESS,DELETE_EVENT_FAILED} from './adminTypes';

const BASE_URL = "https://thecraftersconnectapi.herokuapp.com/api/";


//Get EVENTS

export const getEvents = () => dispatch => {
  dispatch(setEventLoading());
  axios.get(`${BASE_URL}events/all`)
    .then(res => {
      dispatch({
        type: GET_EVENTS,
        payload: res.data.events
      });
    }
    ).catch(err =>
      dispatch({
        type: GET_EVENTS,
        payload: {}
      })
    );
}
export const registerEvent = (eventData) => dispatch => {
  //dispatch(setEventLoading());
  axios.post(`${BASE_URL}events/register`, eventData)
    .then(res => {
      dispatch({
        type: REGISTER_FOR_EVENT,
        payload: res.data
      });
      
    }
    ).catch(err => {
      dispatch({
        type: EVENT_REGISTRATION_FAILED,
        payload: err.response.data
      })
     // alert(err.response.data.error)
    }
    );
}
export const deleteEvent=(id)=>dispatch=>{
  axios.delete(`${BASE_URL}events/${id}`)
  .then(res=>{
    getEvents();
    return dispatch({
    type:DELETE_EVENT_SUCCESS,
    payload:res.data,
   
  })}
  )
  .catch(err=>{
    dispatch({
      type:DELETE_EVENT_FAILED,
      payload:err.response.data
    })
  })
}
//Event Loading
export const setEventLoading = () => {
  return {
    type: EVENT_LOADING
  }
}
