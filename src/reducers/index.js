import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import crafterReducer from './crafterReducer';
import eventReducer from './eventReducer';
import adminReducer from './adminReducer';


export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  crafter: crafterReducer,
  events: eventReducer,
  admin: adminReducer
});
