import axios from 'axios';
import * as types from 'actions/types'
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const insertToken = token => {
    return {
        type: types.INSERT_TOKEN,
        payload: token
    }
};

export const authenticate = credentials => {
    return dispatch => axios.post('/login', credentials).then(({data}) => {
        dispatch(insertToken(data.token));
        cookies.set('token', data.token);
    });
};