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
import AddBankCard from './addbankcard.js';

class BankCard extends React.Component {
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
        name:'AddBankCard',
        component:AddBankCard,
      });
    }
    render() {
        return (
            <View style={styles.container}>
              <HeadView title='银行卡'
                leftButton={true}
                rightButton={true}
                leftText=''
                leftImg= {require('../../imgs/back.png')}
                rightText=''
                rightImg= {require('../../imgs/plus.png')}
                onLeftPress={this.onLeftPress.bind(this)}
                onRightPress={this.onRightPress.bind(this)}
                navigator={this.props.navigator} />
            </View>
        );
    }

};

var styles = {
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0'
    }
};

module.exports = BankCard;
