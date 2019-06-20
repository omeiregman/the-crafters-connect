import { GET_EVENTS, EVENT_LOADING,REGISTER_FOR_EVENT,EVENT_REGISTRATION_FAILED } from '../actions/types';

const initialState = {
  events: {},
  loading: false,
  eventregistered:''
}

export default function(state = initialState, action) {
  switch(action.type) {
    case EVENT_LOADING:
    return {
      ...state,
      loading: true
    }
    case GET_EVENTS:
    return {
      ...state,
      events: action.payload,
      loading: false
    };
    case REGISTER_FOR_EVENT:
    return {
      ...state,
      eventregistered: action.payload.message,
      loading:false
    }
    case EVENT_REGISTRATION_FAILED:
    return{
      ...state,
      eventregistered:action.payload.error,
      loading:false
    }
    default:
    return state;
  }
}
