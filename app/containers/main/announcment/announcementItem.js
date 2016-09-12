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
    ProgressBarAndroid,
}  from 'react-native';
import React  from 'react';
import HeadView from '../../../components/HeadView.js';
import Loading from '../../../components/LoadingModal.js';
const BusyIndicator = require('react-native-busy-indicator');
const loaderHandler = require('react-native-busy-indicator/LoaderHandler');

var count = 0;

class AnnouncementItem extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        this.state =  {
          loading:true,
          link:void 0,
        };
    }
    componentDidMount(){
      this.setState({
        link:this.props.link,
      });
      loaderHandler.showLoader("Loading");
    }
    onLeftPress(){
        this.props.navigator.pop();
    }
    render() {
        return (
            <View style={styles.container}>
              <HeadView title='消息'
                leftText='返回'
                leftImg= {require('../../../imgs/back.png')}
                rightText='收藏'
                onLeftPress={this.onLeftPress.bind(this)}
                leftButton={true}
                rightButton={false}
                navigator={this.props.navigator} />
              <WebView style={styles.web}
                source={{uri:this.state.link}}
                javaScriptEnabled={true}
                scalesPageToFit={true}
                automaticallyAdjustContentInsets={true}
                onLoadStart={()=>{

                }}
                onLoadEnd={()=>{
                  ++count;
                  if (count === 2) {
                    count = 0;
                    loaderHandler.hideLoader();
                    this.setState({
                      loading:false,
                    });
                  }
                }}/>
                <BusyIndicator />
              {/* <Loading visible={this.state.loading} content='加载中……'/> */}
            </View>
        );
    }

};

var styles = {
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0'
    },
    web:{
      flex:1,
    }
};

module.exports = AnnouncementItem;
