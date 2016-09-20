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
    WebView,
    AsyncStorage
}  from 'react-native';
import React  from 'react';
var Geolocation = require('Geolocation');
import KeyUrl from '../../constants/key.js';
import HeadView from '../../components/HeadView.js';
import Building from './building.js';

class VillageMap extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        this.state =  {
          initialPosition: 'unknown',
        };
    }
    onLeftPress(){
        this.props.navigator.pop();
    }
    componentDidMount(){

    }
    render() {
        return (
            <View style={styles.container}>
              <HeadView title='小区'
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

module.exports = VillageMap;
