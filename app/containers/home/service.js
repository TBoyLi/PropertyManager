'use strict';
import React, {
    Component
} from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Water from '../server/water/water.js';

var Service_News = React.createClass({
  getInitialState: function() {
    return {

    };
  },
  _pressData: ({}: {[key: number]: boolean}),
  componentWillMount: function() {

  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.headText}>服务</Text>
        </View>
        <View >
          <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
              <TouchableOpacity onPress={()=>{
                  this.props.navigator.push({
                    component:Water,
                    name:'Water'
                  })
                }}>
                  <View style={styles.row}>
                    <Image style={styles.thumb} source={require('../../imgs/Water.png')} />
                    <Text style={styles.text}>水费</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity>
                  <View style={styles.row}>
                    <Image style={styles.thumb} source={require('../../imgs/Electricity.png')} />
                    <Text style={styles.text}>电费</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity>
                  <View style={styles.row}>
                    <Image style={styles.thumb} source={require('../../imgs/Gascosts.png')} />
                    <Text style={styles.text}>燃气费</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity>
                  <View style={styles.row}>
                    <Image style={styles.thumb} source={require('../../imgs/Telephonefee.png')} />
                    <Text style={styles.text}>电话费</Text>
                  </View>
              </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
              <TouchableOpacity>
                  <View style={styles.row}>
                    <Image style={styles.thumb} source={require('../../imgs/TV.png')} />
                    <Text style={styles.text}>有线电视</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity>
                  <View style={styles.row}>
                    <Image source={require('../../imgs/more.png')} />
                  </View>
              </TouchableOpacity>
              <TouchableOpacity>
                  <View style={styles.row}>
                    <Image style={styles.thumb} source={null} />
                    <Text style={styles.text}></Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity>
                  <View style={styles.row}>
                    <Image style={styles.thumb} source={null} />
                    <Text style={styles.text}></Text>
                  </View>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  },
});
var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#F0F0F0',
  },
  head:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    backgroundColor:'#FFFFFF'
  },
  headText:{
    color:'#3DD1E0',
    fontWeight:'bold',
    fontSize:17,
  },
  list: {
    flex:1,
    marginTop:5,
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    justifyContent: 'center',
    padding: 5,
    margin: 0,
    width: 85,
    height: 85,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  thumb: {
    width: 45,
    height: 45
  },
  text: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold'
  },
});

module.exports = Service_News;
