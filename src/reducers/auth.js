import * as types from 'actions/types'

const defaultState = {token: undefined, profile: {}};

/**
 * Authentication reducer
 * @param {Object} state IS the branch (or part) of the store that is related to authentication.
 * This object is passed by the library react-redux
 * @param {Object} action is the object passed by the components as an event. actions must have type and payload property
 * @returns {Object} a mutated state object to be replaced by the previous one in the store
 */
export const auth = (state = defaultState, action) => {
    switch (action.type) {
        case types.INSERT_TOKEN : {
            return {...state, token: action.payload}
        }
        default:
            return state;
    }
};
