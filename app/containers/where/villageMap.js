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
import AMapLocation from 'react-native-amap-location';
import { ToastShort } from '../../util/ToastUtils.js';
import KeyUrl from '../../constants/key.js';
import HeadView from '../../components/HeadView.js';
import Building from './building.js';

class VillageMap extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        this.state =  {
          url:'http://vczero.github.io/webview/index.html?',
          position:'unknown',
          marks:'unknown',
        };
    }
    onLeftPress(){
        this.props.navigator.pop();
    }
    componentDidMount(){
      AMapLocation.startLocation({
        accuracy: 'HighAccuracy',
        killProcess: true,
        needDetail: true,
      });
      this.listener = AMapLocation.addEventListener((data) => {
        if (data) {//获取定位
          var position = data.longitude + ',' + data.latitude;
          var url = KeyUrl.searchURL + 'key=' + KeyUrl.WEB_KEY + '&location=' + position +'&keywords=' + '住宅区' + '&extensions=base';
          AMapLocation.stopLocation();
          this.listener.remove();
          this.doGetData(position,url);
        }else {
          ToastShort('定位失败','bottom');
        }
      });
    }
    doGetData(position,url){
      var marks = '';
      this.setState({
        position:position
      });
      return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('Json',responseJson);
        for (var i = 0; i < responseJson.pois.length; i++) {
          if (i <= 9) {
            marks +=(responseJson.pois[i].location + ',')
          }
        }
        this.setState({
          marks:marks
        });
      })
      .catch((error) => {
        console.error(error);
      });
    }
    render() {
      var allUrl;
      if (this.state.position) {
        allUrl = this.state.url + 'pos=' + this.state.position + '&markers=' + this.state.marks;
      }
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
          <WebView source={{uri: allUrl}}/>
        </View>
      );
    }
    componentWillUnmount() {
      // AMapLocation.stopLocation();
      // this.listener.remove();
    }
};

var styles = {
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0'
    }
};

module.exports = VillageMap;
