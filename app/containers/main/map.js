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
    WebView
}  from 'react-native';
import React  from 'react';

import Geolocation from 'Geolocation';
import HeadView from '../../components/HeadView.js';
import {ToastLong} from '../../util/ToastUtils.js';


class Map extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        this.state =  {
          initialPosition: 'unknown',
          lastPosition: 'unknown',
          url:'',
        };
    }
    componentDidMount(){
      console.log(Geolocation);
      Geolocation.getCurrentPosition(
        (position) => {
          console.log('position',JSON.stringify(position));
          var initialPosition = JSON.stringify(position);
          this.setState({initialPosition});
        },
        (error) => {
          console.log('error',error.message);
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );
    }
    onLeftPress(){
        this.props.navigator.pop();
    }
    render() {
        return (
            <View style={styles.container}>
              <HeadView title='地图'
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
    componentWillUnmount(){

    }
};

var styles = {
    container: {
      flex: 1,
      backgroundColor: '#F0F0F0'
    },
};

module.exports = Map;
