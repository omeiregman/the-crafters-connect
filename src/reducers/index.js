import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import crafterReducer from './crafterReducer';


export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  crafter: crafterReducer
});
