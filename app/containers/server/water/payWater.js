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
    TextInput,
    TouchableOpacity
}  from 'react-native';
import React  from 'react';
import CheckBox from 'react-native-checkbox';
import HeadView from '../../../components/HeadView.js';

class PayWater extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        this.state =  {
          checkbox:false
        };
    }
    onLeftPress(){
        this.props.navigator.pop();
    }
    _submit(){
      if (this.state.checkbox) {
        alert('下一步');
      }
    }
    render() {
        return (
            <View style={styles.container}>
              <HeadView title='水费缴费'
                leftText='返回'
                leftImg= {require('../../../imgs/back.png')}
                rightText='收藏'
                onLeftPress={this.onLeftPress.bind(this)}
                leftButton={true}
                rightButton={false}
                navigator={this.props.navigator} />
              <View style={styles.head}>
                <View style={styles.headName}>
                  <Image source={require('../../../imgs/Water.png')}/>
                  <Text style={styles.headNameText}>水费</Text>
                </View>
                <View style={{height:1,backgroundColor:'#F0F0F0',marginLeft:20}}/>
                <View style={styles.headBottom}>
                  <Text style={styles.pay}>176.00</Text>
                  <Text style={styles.pay}>元</Text>
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

};

var styles = {
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0'
    },
    head:{
      backgroundColor:'#FFFFFF',
      marginTop:5
    },
    headName:{
      flexDirection:'row',
      alignItems:'center',
      padding:10,
      marginLeft:10
    },
    headNameText:{
      marginLeft:10,
      color:'#333333',
      fontSize:16
    },
    headBottom:{
      flexDirection:'row',
      justifyContent:'center',
      backgroundColor:'#FFFFFF',
      padding:20
    },
    headBottomText:{
      color:'#333333',
      fontSize:16
    },
    headBottomInput:{
      marginLeft:10,
      flex:1,
      fontSize:16
    },
    pay:{
      fontSize:24,
      color:'#333333'
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
};

module.exports = PayWater;
