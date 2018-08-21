import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {queriedEntityReducer, detailedEntityReducer} from 'rest-react-redux'
import { auth } from './auth';

const reducers = {
    form: formReducer,
    auth,

    contacts: queriedEntityReducer('contact'),
    contact: detailedEntityReducer('contact')
};

export default combineReducers(reducers);
