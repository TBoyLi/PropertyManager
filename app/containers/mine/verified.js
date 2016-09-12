/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
/**
 * 资讯界面
 * @type {*|exports|module.exports}
 */
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    TouchableOpacity,
    TextInput,
}  from 'react-native';
import React  from 'react';
import HeadView from '../../components/HeadView.js';

class Verified extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        this.state =  {

        };
    }
    onLeftPress(){
        this.props.navigator.pop();
    }
    verified(){

    }
    render() {
        return (
            <View style={styles.container}>
              <HeadView title='实名认证'
                leftText='返回'
                leftImg= {require('../../imgs/back.png')}
                rightText='收藏'
                onLeftPress={this.onLeftPress.bind(this)}
                leftButton={true}
                rightButton={false}
                navigator={this.props.navigator} />
              <View style={styles.body}>
                <View style={styles.userName}>
                  <Text style={styles.text}>真实姓名</Text>
                  <TextInput style={styles.input}
                    underlineColorAndroid='transparent'
                    placeholder=''
                    keyboardType='default'/>
                </View>
                <View style={{height:1,backgroundColor:'#F0F0F0',marginLeft:30}}/>
                <View style={styles.idCardNum}>
                  <Text style={styles.text}>身份证号码</Text>
                  <TextInput style={styles.input}
                    underlineColorAndroid='transparent'
                    placeholder=''
                    keyboardType='numeric'/>
                </View>
                <View style={{height:1,backgroundColor:'#F0F0F0',marginLeft:30}}/>
                <View style={[styles.idCardTime,{height:40}]}>
                  <Text style={[styles.text]}>身份证有效期</Text>
                <Image source={require('../../imgs/JumpPage.png')}
                    style={{marginRight:20}}/>
                </View>
                <View style={{height:1,backgroundColor:'#F0F0F0',marginLeft:30}}/>
                <View style={styles.userNameSpell}>
                  <Text style={styles.text}>名字拼音</Text>
                  <TextInput style={styles.input}
                    underlineColorAndroid='transparent'
                    placeholder=''
                    keyboardType='default'/>
                </View>
                <View style={{height:1,backgroundColor:'#F0F0F0',marginLeft:30}}/>
                  <Text style={{marginTop:20,marginLeft:30}}>请上传您手持身份证正反面的照片</Text>
                <View style={styles.idCardImg}>
                  <Image style={styles.image}>
                    <Text>正面</Text>
                  </Image>
                </View>
              </View>
              <TouchableOpacity onPress={this.verified.bind(this)}>
                  <View style={[styles.submitBtn]}>
                      <Text style={styles.submitText}>开始验证</Text>
                  </View>
              </TouchableOpacity>
            </View>
        );
    }

};

var styles = {
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0'
    },
    body:{
      flex:1,
      backgroundColor:'#FFFFFF',
    },
    userName:{
      flexDirection:'row',
      marginTop:10,
      paddingLeft:10,
      backgroundColor:'#FFFFFF',
      alignItems:'center'
    },
    idCardNum:{
      flexDirection:'row',
      paddingLeft:10,
      marginTop:5,
      backgroundColor:'#FFFFFF',
      alignItems:'center'
    },
    idCardTime:{
      flexDirection:'row',
      paddingLeft:10,
      marginTop:5,
      backgroundColor:'#FFFFFF',
      alignItems:'center'
    },
    userNameSpell:{
      flexDirection:'row',
      padding:10,
      marginTop:5,
      backgroundColor:'#FFFFFF',
      alignItems:'center'
    },
    idCardImg:{
      flexDirection:'row',
      marginTop:10,
      padding:20,
      height:200,
      backgroundColor:'#adc'
    },
    image:{
      height:150,
      width:150,
      backgroundColor:'#FFFFFF'
    },
    text:{
      flex:1,
      // textAlign:'center'
      marginLeft:20
    },
    input:{
      flex:2,
      height: 40,
      borderColor: 'transparent',
      borderWidth: 0,
    },
    submitBtn:{
      backgroundColor:'#3DD1E0',
      height:44,
      borderRadius:0,
      justifyContent:'center',
      alignItems:'center'
    },
    submitText:{
      color:'#FFF',
      fontSize:17,
      alignSelf:'center'
    },
};

module.exports = Verified;
