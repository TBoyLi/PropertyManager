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
    AsyncStorage
}  from 'react-native';
import React  from 'react';
var Geolocation = require('Geolocation');
import KeyUrl from '../../constants/key.js';
import HeadView from '../../components/HeadView.js';

class VillageMap extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        this.state =  {

        };
    }
    onLeftPress(){
        this.props.navigator.pop();
    }
    _doGetData(){
      var that = this;
      Util.getJSON(url, function(data){
        if(data.status && data.info === 'OK'){
          var count = data.pois.length > 10? 10: data.pois.length;
          that._addStorage(data);
          that.setState({
            list: data.pois,
            count: count
          });
        }else{
          alert('没有查询到相应的数据');
        }
      });
    }
    componentDidMount(){
      Geolocation.getCurrentPosition(function(data){
        var lnglat = data.coords.longitude + ',' + data.coords.latitude;
        AsyncStorage.setItem('pos', lnglat);
        var url = KeyUrl.searchURL + 'key=' + KeyUrl.WEB_KEY + '&keywords='
          + '小区' + '&extensions=base';
        if(_GEO_OPEN){
          url += '&location=' + lnglat;
          // this._doGetData(url);
        }else{
          url += '&location=' + _GEO_TEST_POS;
          // this._doGetData(url);
        }
      }, function(err){
        alert('定位失败，请重新开启应用定位');
      });
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
