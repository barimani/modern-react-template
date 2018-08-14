import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { auth } from './auth';

const reducers = {
    form: formReducer,
    auth
};

export default combineReducers(reducers);
