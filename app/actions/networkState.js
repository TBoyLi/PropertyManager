import * as types from '../constants/actionTypes.js';

export function isNetWork(isConnected){
  if (isConnected) {
    console.log('action','NETWORK_STATE_ONLINE');
    return{
      type:types.NETWORK_STATE_ONLINE
    }
  }else {
    console.log('action','NETWORK_STATE_ONLINE');
    return{
      type:types.NETWORK_STATE_OFFLINE
    }
  }

}
