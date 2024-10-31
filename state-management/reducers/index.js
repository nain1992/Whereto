import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import errorReducer from './errorReducer';
export default combineReducers({
    main: mainReducer,
    errors: errorReducer,
    
})