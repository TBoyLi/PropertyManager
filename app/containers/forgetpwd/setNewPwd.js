'use strict';
import React, {
    Component
} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Alert,
    TouchableOpacity
} from 'react-native';
import HeadView from '../../components/HeadView.js';
import SetPwdSuccess from './setPwdSuccess.js';

class SetNewPwd extends Component{
  constructor(props) {
    super(props);
    this.state={
      pwd:void 0,
      confirmPwd: void 0,
    }
  }
  onLeftPress(){
      this.props.navigator.pop();
  }
  _submit(){
    let pwd = this.state.pwd;
    let confirmPwd = this.state.confirmPwd;
    if (pwd && confirmPwd) {
      if (pwd === confirmPwd) {
        this.props.navigator.push({
          name:'SetPwdSuccess',
          component:SetPwdSuccess,
        });
      }else {
        Alert.alert('提示','两次输入的密码不一致！');
      }
    }else {
      if (!pwd) {
        Alert.alert('提示','请输入密码！');
      }else {
        Alert.alert('提示','请再次输入密码！');
      }
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <HeadView
          title='找回密码'
          leftText='返回'
          leftImg= {require('../../imgs/back.png')}
          rightText='收藏'
          onLeftPress={this.onLeftPress.bind(this)}
          leftButton={true}
          rightButton={false}
          navigator={this.props.navigator}/>
        <View style={styles.body}>
          <Text style={styles.text} alignSelf='center'>请设置新的密码</Text>
          <TextInput style={styles.pwd}
            placeholder='请设置新密码'
            secureTextEntry={true}
            underlineColorAndroid={'transparent'}  onChangeText={(text)=>{this.setState({pwd:text})}}/>
          <TextInput style={styles.confirmPwd}
            placeholder='请再次输入新的密码'
            secureTextEntry={true}
            underlineColorAndroid={'transparent'}  onChangeText={(text)=>{this.setState({confirmPwd:text})}}/>
          <Text style={styles.textExplain}>备注：请将密码设置为6－20位，并且由字母，数字和
符号两种以上组合，不能与旧密码相同</Text>
        </View>
        <View style={styles.foot}>
          <TouchableOpacity onPress={this._submit.bind(this)}>
              <View style={styles.submitBtn}>
                  <Text style={styles.submitText}>完成</Text>
              </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFFFFF',
    flex:1
  },
  body:{
    padding:30
  },
  text:{
    color:'#333333'
  },
  pwd:{

  },
  confirmPwd:{

  },
  textExplain:{
    color:'#333333',
    marginTop:30
  },
  foot:{
      paddingLeft:30,
      paddingRight:30,
      marginTop:60,
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

module.exports = SetNewPwd;
