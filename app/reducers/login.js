'use strict';

import * as types from '../constants/actionTypes.js';

const initialState = {
    loading : false,
    data:''
}

export default function login(state = initialState, action){
    switch (action.type) {
        case types.PERFORM_LOGIN_ACTION:
            return Object.assign({}, state, {
                loading: true
            });
        case types.RECEIVE_LOGIN_ACTION:
            return Object.assign({}, state, {
                 loading: false,
                 data: action.data
            });
        case  types.RECEIVE_LOGIN_ERROR_ACTION:
        return Object.assign({}, state, {
             loading: false,
             data: action.data
        });
          break;
        default:
            return state;
    }
}
