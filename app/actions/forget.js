'use strict';
import * as types from '../constants/actionTypes.js';
import FetchHttpClient, { form,header } from 'fetch-http-client';
import {HOST,FOTGET_ACTION} from  '../constants/Request.js';
import { ToastShort } from '../util/ToastUtils.js';
const client = new FetchHttpClient(HOST);

export function doForget(password,passwordConfirm){
     return dispatch => {
        dispatch(performForget());
        client.addMiddleware(form());
        client.addMiddleware(request => {
          request.options.headers['appkey'] = '8a9283a0567d5bea01567d5beaf90000';
        });
        client.post(FOTGET_ACTION, {
            form: {
              password: password,
              passwordConfirm:passwordConfirm,
           },
        }).then(response => {
           return response.json();
        }).then((result)=>{
           if(result.code === '0'){
               //登录成功..
               ToastShort('修改密码成功...');
               dispatch(receiveForgetResult(result));
           }else{//异常
               ToastShort(result.msg);
               dispatch(receiveLoginResultError(error));
           }
        }).catch((error) => {//没有登进服务器
           ToastShort('修改密码失败，请重试...');
           dispatch(receiveForgetResultError(error));
        });
     }
}

function performForget() {
    return {
        type: types.PERFORM_FORGET_ACTION,
    }
}

function receiveForgetResult(result){
    return {
        type: types.RECEIVE_FORGET_ACTION,
        data: result
    }

}
function receiveForgetResultError(result){
  return {
      type: types.RECEIVE_FORGET_ERROR_ACTION,
      data: result
  }
}
