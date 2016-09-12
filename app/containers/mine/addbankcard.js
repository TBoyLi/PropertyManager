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
}  from 'react-native';
import React  from 'react';
import HeadView from '../../components/HeadView.js';

class AddBankCard extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        this.state =  {

        };
    }
    componentDidMount(){

    }
    onLeftPress(){
        this.props.navigator.pop();
    }
    onRightPress(){
      this.props.navigator.push({
        name:'Account',
        component:Account,
      });
    }
    render() {
        return (
            <View style={styles.container}>
              <HeadView title='添加银行卡'
                leftButton={true}
                rightButton={false}
                leftText=''
                leftImg= {require('../../imgs/back.png')}
                rightText=''
                rightImg= {require('../../imgs/plus.png')}
                onLeftPress={this.onLeftPress.bind(this)}
                onRightPress={this.onRightPress.bind(this)}
                navigator={this.props.navigator} />
              <View style={styles.body}>
                <Text style={styles.bodyHeadText}>请绑定持卡人本人的银行卡</Text>
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
      padding:10,
    },
    bodyHeadText:{
      color:'#666666',
      marginLeft:10,
    },
};

module.exports = AddBankCard;
