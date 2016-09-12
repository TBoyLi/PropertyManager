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
    View,
    Image,
    InteractionManager
}  from 'react-native';
import React  from 'react';
import {height, width} from '../../util/screen.js';
import Login from '../login.js';

class Guide extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        this.state =  {

        };
    }
    componentDidMount () {
      const {navigator} = this.props;
      this.timer = setTimeout(() => {
        InteractionManager.runAfterInteractions(() => {
          navigator.resetTo({
            component: Login,
            name: 'Login',
          });
        });
      }, 1500);
    }
    componentWillUnmount() {
      this.timer && clearTimeout(this.timer);
    }
    render() {
        return (
            <View style={styles.container}>
              <Image style={{flex: 1, width: width, height: height}} source={require('../../imgs/reddit_splash.png')}/>
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

module.exports = Guide;
