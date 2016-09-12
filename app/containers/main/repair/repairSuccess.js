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
}  from 'react-native';
import React  from 'react';
import HeadView from '../../../components/HeadView.js';

class RepairSuccess extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        this.state =  {

        };
    }
    onLeftPress(){
        this.props.navigator.pop();
    }
    submit(){
      this.props.navigator.popToTop();
    }
    render() {
        return (
            <View style={styles.container}>
              <HeadView title='申请成功'
                leftText='返回'
                leftImg= {require('../../../imgs/back.png')}
                rightText='收藏'
                onLeftPress={this.onLeftPress.bind(this)}
                leftButton={true}
                rightButton={false}
                navigator={this.props.navigator} />
              <View style={styles.body}>
                <View style={styles.image}>
                  <Image source={require('../../../imgs/success.png')} />
                </View>
                <Text style={styles.repair}>申请成功</Text>
                <View style={styles.foot}>
                  <TouchableOpacity onPress={this.submit.bind(this)}>
                      <View style={styles.submitBtn}>
                          <Text style={styles.submitText}>完成</Text>
                      </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.tel}>
                  <Text>紧急情况请拨打：</Text>
                  <Text>0877-12345678</Text>
                </View>
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
    body:{
      flex: 1,
      backgroundColor: '#FFFFFF',
      justifyContent:'center',
    },
    image:{
      alignItems:'center'
    },
    repair:{
      marginTop:20,
      alignSelf:'center'
    },
    tel:{
      flexDirection:'row',
      marginTop:20,
      justifyContent:'center'
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
    },
};

module.exports = RepairSuccess;
