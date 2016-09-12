/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';
import {
    StyleSheet,
  	Text,
  	View,
  	TouchableHighlight,
    Image,
    TextInput,
    AsyncStorage,
    Modal,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { ToastShort } from '../util/ToastUtils.js';

import {doLogin} from '../actions/login.js';
import Register from './register/Register';
import Forget from './forgetpwd/forgetPwd.js';
import Main from './main.js';
import {NativeModules} from 'react-native';
var EncryptionModule = NativeModules.EncryptionModule;
var username = '';
var password = '';

class Login extends React.Component{
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
        username:void 0,
        password:void 0,
        animationType: 'none',
        modalVisible: false
    };
  }
  _login(){
    let {dispatch} = this.props;
    if(username === ''){
       ToastShort('用户名不能为空...');
       return;
    }
    if(password === ''){
       ToastShort('密码不能为空...');
       return;
    }
    EncryptionModule.MD5ByCallBack(password,(msg)=>{
       dispatch(doLogin(username,msg));
    },(error)=>{
         ToastShort('密码加密失败...');
     });
  }
  _register(){
    this.props.navigator.push({
        name:"Register",
        component:Register,
    });
  }
  _forget(){
    this.props.navigator.push({
        name:"Forget",
        component:Forget,
    });
  }
  componentWillReceiveProps(){
    let {login, navigator} = this.props;
    //测试没有登陆也跳转，（正式把 ！ 去掉）
    if (!login.loading) {
      navigator.resetTo({
        name:'Main',
        component:Main
      });
    }
  }
  render() {
    const {login} = this.props;
    return (
      <View style={styles.container}>
          <Modal
            animationType={this.state.animationType}
            transparent={true}
            visible={login.loading}
            onRequestClose={() => {}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <View style={{flexDirection:'column',backgroundColor:'#222',padding:20}}>
                    <ActivityIndicator
                      animating={true}
                      size="large"/>
                    <Text style={{color:'#FFF',marginTop:10}}>登录中...</Text>
                </View>
            </View>
          </Modal>
          <Text style={styles.headLeabel}>请先登录</Text>
          <View style={[styles.inputView]}>
              <View style={styles.title}>
                  <TextInput
                      style={styles.searchTextInput}
                      placeholder={'请输入用户名'}
                      onChangeText={(text)=>{username = text}}
                      maxLength = {30}
                      underlineColorAndroid={'transparent'}>
                  </TextInput>
              </View>
              <View style={styles.title}>
                  <TextInput
                      style={styles.searchTextInput}
                      placeholder={'请输入密码'}
                      onChangeText={(text)=>{password = text}}
                      maxLength = {30}
                      underlineColorAndroid={'transparent'}>
                  </TextInput>
              </View>
          </View>
          <View style={styles.foot}>
            <TouchableOpacity onPress={this._login.bind(this)}>
                <View style={styles.submitBtn}>
                    <Text style={styles.submitText}>登陆</Text>
                </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.tip]}>
              <TouchableOpacity onPress={this._register.bind(this)}>
                  <Text style={styles.register}>快速注册</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._forget.bind(this)}>
                  <Text style={styles.forget}>忘记密码</Text>
              </TouchableOpacity>
          </View>
      </View>
    );
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    headLeabel:{
      color:'rgba(0,0,0,0.88)',
      alignSelf:'center',
      fontSize:17,

    },
    inputView:{
      marginTop:105,
      paddingLeft:30,
      paddingRight:30
    },
    title:{
        flex:1,
        borderBottomWidth:1,
        borderColor:'#E8E8E8',
        paddingRight:15,
        height:44,
        justifyContent:'center'
    },
    searchTextInput:{
        fontSize:16,
        flex:1
    },
    foot:{
        paddingLeft:30,
        paddingRight:30,
        marginTop:65,
    },
    submitBtn:{
        flex:1,
        backgroundColor:'#3DD1E0',
        height:44,
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center'
    },
    submitText:{
        color:'#FFF',
        fontSize:17,
        alignSelf:'center'
    },
    tip:{
      marginTop:20,
      flexDirection:'row',
      paddingLeft:30,
        paddingRight:30,
      justifyContent:'space-between'
    },
    register:{
      color:'#3DD1E0',
      fontSize:17
    },
    forget:{
      fontSize:17,
    }

});

function mapStateToProps(state) {
  const { login } = state;
  return {
    login
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     doLogin: (...args) => dispatch(actions.doLogin(...args))
//     // doLogin: bindActionCreators(doLogin, dispatch)
//   }
// }

export default connect(mapStateToProps)(Login);
// module.exports = Login;
