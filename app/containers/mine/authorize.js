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
    Image
}  from 'react-native';
import React  from 'react';
import HeadView from '../../components/HeadView.js';

class Authorize extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        this.state =  {

        };
    }
    onLeftPress(){
        this.props.navigator.pop();
    }
    render() {
        return (
            <View style={styles.container}>
              <HeadView title='我的授信'
                leftText='返回'
                leftImg= {require('../../imgs/back.png')}
                rightText='收藏'
                onLeftPress={this.onLeftPress.bind(this)}
                leftButton={true}
                rightButton={false}
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

module.exports = Authorize;
