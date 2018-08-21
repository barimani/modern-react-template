/* global require */
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import thunk from 'redux-thunk';

// Redux development tool extension for chrome
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store = null;

// Constructing store
if (reduxDevTools) {
    store = createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk),
            reduxDevTools,
        ),
    );
} else {
    store = createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk),
        ),
    );
}

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../../reducers', () => {
        // We need to require for hot reloading to work properly.
        const nextReducer = require('../../reducers/index'); // eslint-disable-line global-require
        store.replaceReducer(nextReducer);
    });
}

export default store;

