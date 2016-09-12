'use strict';
import  {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    ScrollView,
    PullToRefreshViewAndroid,
    RefreshControl,
    ListView,
    TouchableOpacity,
    Image,
    ToastAndroid,
    NativeModules,
    BackAndroid,
    NetInfo,
  	Platform,
    PanResponder
} from 'react-native';
import React from 'react';
import { connect } from 'react-redux';
import TabNavigator from 'react-native-tab-navigator';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import CustomTabBar from '../components/CustomTabBar.js';
import {isNetWork} from '../actions/networkState.js';
import {ToastShort, ToastLong} from '../util/ToastUtils.js';
import Navigator from '../components/defaultNavigator.js';
import Main_News from './home/main.js';
import Service_News from './home/service.js';
import Message_News from './home/message.js';
import Mine_News from './home/mine.js';

class Main extends React.Component {
    // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
          selectedTab:1,
          networkState:void 0
      };
    }

    goBack(navigator){
      // console.log(typeof(navigator.getCurrentRoutes()[0].name));
      if (navigator && navigator.getCurrentRoutes().length > 1) {
  			navigator.pop();
  			return true;
  	  }
  		if (navigator && navigator.getCurrentRoutes()[0].name === 'Main') {
  			ToastShort('再按一次退出程序','center');
  			return true;
  	  }
  	  return false;
  	}

    componentDidMount(){
      NetInfo.isConnected.fetch().done(this._handleConnectionInfoChange.bind(this));
      NetInfo.isConnected.addEventListener('isConnected',this._handleConnectionInfoChange.bind(this));

      if (Platform.OS === 'android') {
        BackAndroid.addEventListener('hardwareBackPress', this.goBack.bind(this,this.props.navigator));
      }
    }
    componentWillUnmount(){
      NetInfo.isConnected.removeEventListener('isConnected',this._handleConnectionInfoChange.bind(this));
    }
    _handleConnectionInfoChange(isConnected){
      // console.log('isConnected  ',isConnected);
      if (!isConnected) {
        ToastLong('请检查网络……','bottom')
      }
    }
    render() {
      return(
        //不支持左右滑动
        // <TabNavigator style={{backgroundColor:'#F0F0F0',flex:1}}>
        //      <TabNavigator.Item
        //        selected={this.state.selectedTab === 1}
        //        title="首页"
        //        selectedTitleStyle ={{'color':'#3DD1E0'}}
        //        renderIcon={() => <Image source={require('../imgs/home.png')} />}
        //        renderSelectedIcon={() => <Image source={require('../imgs/homeClick.png')} />}
        //        onPress={() => this.setState({ selectedTab: 1 })}>
        //        <Main_News navigator={this.props.navigator} index = {this.state.selectedTab}/>
        //      </TabNavigator.Item>
        //      <TabNavigator.Item
        //        selected={this.state.selectedTab === 2}
        //        title="服务"
        //        selectedTitleStyle ={{'color':'#3DD1E0'}}
        //        renderIcon={() => <Image source={require('../imgs/service.png')} />}
        //        renderSelectedIcon={() => <Image source={require('../imgs/serviceClick.png')} />}
        //        onPress={() => this.setState({ selectedTab: 2 })}>
        //        <Service_News navigator={this.props.navigator} index = {this.state.selectedTab}/>
        //      </TabNavigator.Item>
        //      <TabNavigator.Item
        //        selected={this.state.selectedTab === 4}
        //        title="消息"
        //        selectedTitleStyle ={{'color':'#3DD1E0'}}
        //        renderIcon={() => <Image source={require('../imgs/message.png')} />}
        //        renderSelectedIcon={() => <Image source={require('../imgs/messageClick.png')} />}
        //        onPress={() => this.setState({ selectedTab: 4 })}>
        //        <Message_News navigator={this.props.navigator} index = {this.state.selectedTab}/>
        //      </TabNavigator.Item>
        //      <TabNavigator.Item
        //        selected={this.state.selectedTab === 5}
        //        title="我"
        //        selectedTitleStyle ={{'color':'#3DD1E0'}}
        //        renderIcon={() => <Image source={require('../imgs/me.png')} />}
        //        renderSelectedIcon={() => <Image source={require('../imgs/meClick.png')} />}
        //        onPress={() => this.setState({ selectedTab: 5 })}>
        //        <Mine_News navigator={this.props.navigator} index = {this.state.selectedTab}/>
        //      </TabNavigator.Item>
        // </TabNavigator>

        //支持左后滑动
        <ScrollableTabView
          initialPage={0}
          tabBarPosition='bottom'
          scrollWithoutAnimation={true}
          //渲染所有卡片会导致切换卡片时tab切换慢
          // prerenderingSiblingsNumber={Infinity}
          renderTabBar={() => <CustomTabBar />}>
          <Main_News navigator={this.props.navigator} tabLabel="首页"/>
          <Service_News navigator={this.props.navigator} tabLabel="服务"/>
          <Message_News navigator={this.props.navigator} tabLabel="消息"/>
          <Mine_News navigator={this.props.navigator} tabLabel="我"/>
        </ScrollableTabView>
      )
    }
};

function mapStateToProps(state) {
	return state;
}
export default connect(mapStateToProps)(Main);
module.exports = Main;
