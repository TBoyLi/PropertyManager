import * as ActionTypes from '../constants/actionTypes';

const initialState = {
    isConnected: void 0,
};

export function reducer(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case  ActionTypes.NETWORK_STATE_ONLINE:
      console.log('reducer','NETWORK_STATE_ONLINE');
      
      break;
    case ActionTypes.NETWORK_STATE_OFFLINE:
      console.log('reducer','NETWORK_STATE_OFFLINE');
      break;
  }
}
