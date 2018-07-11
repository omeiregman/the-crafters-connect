import { GET_CRAFTER, CRAFTER_LOADING, CLEAR_CURRENT_CRAFTER } from '../actions/types';

const initialState = {
  crafter: null,
  crafters: null,
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case CRAFTER_LOADING:
    return {
      ...state,
      loading: true
    };
    case GET_CRAFTER:
    return {
      ...state,
      crafter: action.payload,
      loading: false
    };
    case CLEAR_CURRENT_CRAFTER:
    return {
      ...state,
      crafter: null
    }
    default:
      return state;
  }
}
