import { GET_CURRENT_CRAFTER, GET_ALL_CRAFTERS, CRAFTER_LOADING, CLEAR_CURRENT_CRAFTER } from '../actions/types';

const initialState = {
  crafter: null,
  crafters: null,
  loading: false,
  allCrafters: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case CRAFTER_LOADING:
    return {
      ...state,
      loading: true
    };
    case GET_CURRENT_CRAFTER:
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
    case GET_ALL_CRAFTERS:
    return {
      ...state,
      allCrafters: action.payload,
      loading: false
    }
    default:
      return state;
  }
}
