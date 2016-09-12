'use strict';
import * as types from '../constants/actionTypes.js';
import FetchHttpClient, { form,header } from 'fetch-http-client';
import {HOST,LOGIN_ACTION} from  '../constants/Request.js';
import { ToastShort } from '../util/ToastUtils.js';
const client = new FetchHttpClient(HOST);

export function doLogin(username,password){
     return dispatch => {
        dispatch(performLogin());
        client.addMiddleware(form());
        client.addMiddleware(request => {
          request.options.headers['appkey'] = '8a9283a0567d5bea01567d5beaf90000';
        });
        client.post(LOGIN_ACTION, {
            form: {
              username: username,
              password: password,
           },
        }).then(response => {
           return response.json();
        }).then((result)=>{
           if(result.code === '0'){
               //登录成功..
               ToastShort('登录成功...');
               dispatch(receiveLoginResult(result));
           }else{//异常
               ToastShort(result.msg);
               ToastShort('登录失败，请重试...');
               dispatch(receiveLoginResultError(error));
           }
        }).catch((error) => {//没有登进服务器
           ToastShort('登录失败，请重试...');
           dispatch(receiveLoginResultError(error));
        });
     }
}

function performLogin() {
    return {
        type: types.PERFORM_LOGIN_ACTION,
    }
}

function receiveLoginResult(result){
    return {
        type: types.RECEIVE_LOGIN_ACTION,
        data: result
    }

}
function receiveLoginResultError(result){
  return {
      type: types.RECEIVE_LOGIN_ERROR_ACTION,
      data: result
  }
}
