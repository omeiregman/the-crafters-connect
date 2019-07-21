import { GET_EVENTS, EVENT_LOADING,REGISTER_FOR_EVENT,EVENT_REGISTRATION_FAILED ,DELETE_EVENT_SUCCESS,DELETE_EVENT_FAILED} from '../actions/adminTypes';

const initialState = {
  events: {},
  loading: false,
  eventregistered:'',
  deleted:''
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
    case DELETE_EVENT_SUCCESS:
      return{
        ...state,
        deleted:action.payload.message,
        loading:false
      }
      case DELETE_EVENT_FAILED:
        return{
          ...state,
          deleted:action.payload.error,
          loading:false
        }
    default:
    return state;
  }
}
