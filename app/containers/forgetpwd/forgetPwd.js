/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';
import {
    StyleSheet,
    Alert,
  	Text,
  	View,
  	TouchableHighlight,
    Image,
    TextInput,
    NativeModules,
    AsyncStorage,
    Modal,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import HeadView from '../../components/HeadView.js';
import InputTelCode from './inputTelCode.js';
var telphone = '';
var code = '';

class ForgetPwd extends React.Component{
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
        telphone:void 0,
    };
  }
  onLeftPress(){
      this.props.navigator.pop();
  }
  _submit(){
    if (telphone && code) {
      if (telphone.length == 11 && code.length == 4) {
        this.props.navigator.push({
          name:'InputTelCode',
          component:InputTelCode,
          params:{
            telphone:telphone,
          }
        });
      }else {
        if (telphone.length < 11
          || telphone.length > 0) {
          Alert.alert('提示','手机格式不正确！');
        }
        if (code.length < 4 || code.length > 0) {
          Alert.alert('提示','验证码不正确！');
        }
      }
    }else {
      if (!telphone) {
        Alert.alert('提示','请输入手机号码！');
      }else {
        Alert.alert('提示','验证码不能为空！');
      }
    }
  }
  refreshCode(){
    alert('刷新验证码');
  }
  render() {
      return (
        <View style={styles.container}>
            <HeadView title='找回密码'
                      leftText='返回'
                      leftImg= {require('../../imgs/back.png')}
                      rightText='收藏'
                      onLeftPress={this.onLeftPress.bind(this)}
                      leftButton={true}
                      rightButton={false}
                      navigator={this.props.navigator} />
            <View style={styles.container}>
              <View style={[styles.inputView]}>
                  <View style={styles.title}>
                      <TextInput
                          style={styles.searchTextInput}
                          keyboardType='numeric'
                          placeholder={'请输入手机号码'}
                          onChangeText={(text)=>{telphone = text}}
                          maxLength = {11}
                          underlineColorAndroid={'transparent'}/>
                  </View>
              </View>
              <View style={[styles.inputView, {marginTop:10}]}>
                  <View style={[styles.title, {flexDirection:'row'}]}>
                      <TextInput
                          style={styles.searchTextInput}
                          keyboardType='numeric'
                          placeholder={'请输入验证码'}
                          onChangeText={(text)=>{code = text}}
                          maxLength = {11}
                          underlineColorAndroid={'transparent'}/>
                        <TouchableOpacity onPress={this.refreshCode}>
                          <View>
                            <Image style={styles.imageCode} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                          </View>
                        </TouchableOpacity>
                  </View>
              </View>
              <View style={styles.foot}>
                <TouchableOpacity onPress={this._submit.bind(this)}>
                    <View style={styles.submitBtn}>
                        <Text style={styles.submitText}>下一步</Text>
                    </View>
                </TouchableOpacity>
              </View>
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
      alignSelf:'center'
    },
    inputView:{
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
    imageCode:{
      height:40,
      width:80,
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
    }
});

module.exports = ForgetPwd;
