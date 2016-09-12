'use strict';
import React, {
    Component
} from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    TextInput,
    Alert,
    TouchableOpacity
} from 'react-native';
import HeadView from '../../components/HeadView.js';

class SetPwdSuccess extends Component{
  constructor(props) {
    super(props);
    this.state={

    }
  }
  onLeftPress(){
    this.props.navigator.pop();
  }
  submit(){
    this.props.navigator.popToTop();
  }
  render(){
    return(
      <View style={styles.container}>
        <HeadView
          title='设置成功'
          leftText='返回'
          leftImg= {require('../../imgs/back.png')}
          rightText='收藏'
          onLeftPress={this.onLeftPress.bind(this)}
          leftButton={true}
          rightButton={false}
          navigator={this.props.navigator}/>
        <View style={styles.body}>
          <Image source={require('../../imgs/success.png')}/>
          <View style={styles.text}>
            <Text style={{fontSize:16}}>操作成功，去</Text>
            <TouchableOpacity onPress={this.submit.bind(this)}>
              <Text style={styles.login}>登录</Text>
            </TouchableOpacity>
          </View>
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
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    flexDirection:'row',
    marginTop:15
  },
  login:{
    fontSize:16,
    color:'#3DD1E0'
  }
})

module.exports = SetPwdSuccess
