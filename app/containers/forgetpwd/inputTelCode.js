'use strict';
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Alert,
    TextInput,
} from 'react-native';
import HeadView from '../../components/HeadView.js';
import SetNewPwd from './setNewPwd.js';

class InputTelCode extends Component {
    constructor(props) {
        super(props);
        this.state={
          telphone:void 0,
          verification_code:void 0,
          second:59,
        };
    }
    onLeftPress(){
        this.props.navigator.pop();
    }
    componentDidMount(){
      this.setState({
        telphone:this.props.telphone,
      });
      let {second} = this.state;
      this.timer = setInterval(()=>{
        if(this.state.second == 1){
          clearInterval(this.timer);
          this.setState({
            second:'验证码已过期'
          });
        }
        this.setState({
          second:second--
        })
      },1000);
    }
    componentWillUnmount(){
      clearInterval(this.timer);
    }
    _submit(){
      let code = this.state.verification_code;
      if (code) {
        if (code.length == 4) {
          this.props.navigator.push({
            name:'SetNewPwd',
            component:SetNewPwd,
          });
        }else {
          Alert.alert('提示','验证码格式不正确！');
        }
      }else {
          Alert.alert('提示','验证码不能为空！');
      }
    }
    render() {
        return (
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
            <View style={styles.boby}>
              <Text>验证码已发送到{ this.state.telphone }</Text>
              <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:1,height:45}}>
                  <TextInput style={{flex:1,borderWidth:1,textAlign:'center'}} keyboardType='numeric' onChangeText={(text)=>{this.setState({verification_code:text})}}/>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Text>{this.state.second}</Text>
                  <Text>S后重新发送</Text>
                </View>
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#FFFFFF'
    },
    boby:{
      justifyContent:'center',
      flex:1,
      padding:30
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

module.exports = InputTelCode;
