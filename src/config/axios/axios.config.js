import axios from 'axios';
import store from '../store/index';
import Cookies from 'universal-cookie';
import {insertToken} from "actions/auth";
const cookies = new Cookies();


const UrlMap = {
    develop: 'http://mydev.com',
    staging: 'http://mystaging.com',
    production: 'http://myproduction.com'
};


const configureAxios = () => {
    const isProduction = process.env.NODE_ENV === 'production';


    let baseURL = UrlMap[BUILD_TYPE];
    if (!baseURL) baseURL = UrlMap.develop;

    axios.defaults.baseURL = baseURL + '/api';

    /**
     * Axios listens to store token
     * **/
    store.subscribe(setTokenToHeader);

    /**
     * Mock Server mounts here. Inline import is used to avoid loading mock data in distribution
     * **/
    if (!isProduction) {
        import('./mock-adapter').then(mockAdapter => {
            mockAdapter.default();
        });
    }
    /**
     * Interceptor
     * */
    axios.interceptors.response.use(
        res => res,
        error => {
            if (error.response && error.response.status === 401) {
                cookies.remove('token',  {path: '/'});

                store.dispatch(insertToken(null));
                window.location.replace("/");

            }
            return Promise.reject(error);
    });
};

export const setTokenToHeader = (token = store.getState().auth.token) => {
    if (token) axios.defaults.headers.common.Authorization = 'Bearer ' + token;
};

export default configureAxios;



