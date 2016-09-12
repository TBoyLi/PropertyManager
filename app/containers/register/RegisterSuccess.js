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

class RegisterSuccess extends Component{
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
      if (pwd.length == 0) {
        Alert.alert('提示','密码不能为空！');
      }
      if (confirmPwd == 0) {
        Alert.alert('提示','密码不能为空！');
      }
      if (pwd === confirmPwd) {
        this.props.navigator.popToTop();
      }else {
        Alert.alert('提示','两次输入的密码不一致！');
      }
    }else {
      Alert.alert('提示','请输入密码！');
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <HeadView
          title='手机快速注册'
          leftText='返回'
          leftImg= {require('../../imgs/back.png')}
          rightText='收藏'
          onLeftPress={this.onLeftPress.bind(this)}
          leftButton={true}
          rightButton={false}
          navigator={this.props.navigator}/>
        <View style={styles.body}>
          <Text style={styles.text} alignSelf='center'>验证成功</Text>
          <TextInput style={styles.pwd}
            placeholder='请设置密码'
            secureTextEntry={true}
            underlineColorAndroid={'transparent'}  onChangeText={(text)=>{this.setState({pwd:text})}}/>
          <TextInput style={styles.confirmPwd}
            placeholder='请再次输入密码'
            secureTextEntry={true}
            underlineColorAndroid={'transparent'}  onChangeText={(text)=>{this.setState({confirmPwd:text})}}/>
          <Text style={styles.textExplain}>备注：请将密码设置为6-20位，并且由字母，数字和符号两种以上组合</Text>
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

module.exports = RegisterSuccess;
