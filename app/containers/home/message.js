'use strict';
import React, {
    Component
} from 'react';
import {
    View,
    StyleSheet,
    Text,
    ListView,
    TouchableOpacity,
    Image,
    uri,
    Dimensions,
} from 'react-native';
import MessageItem from '../message/messageItem.js';

class Message_News extends Component{
  constructor(props) {
    super(props);
    this.state={

    };
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.headText}>消息</Text>
        </View>
        <View style={styles.body}>
          <ListViewDemo navigator={this.props.navigator}/>
        </View>
      </View>
    );
  }
};

var ListViewDemo = React.createClass({
    getInitialState: function() {
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
          width:Dimensions.get('window').width,
          dataSource: ds.cloneWithRows([
            {
              image:'http://img4.duitang.com/uploads/item/201306/23/20130623131414_yMzvr.thumb.600_0.jpeg',
              link:'http://www.lcode.org/react-native/',
              title:'haihailu',
              time:'16:45',
              content:'请啊打开噶觉得噶快来大家嘎达那个坑垃圾的噶快来都感觉卡了大姐夫'
            },
            {
              image:'http://sc.jb51.net/uploads/allimg/150713/14-150G3101312O9.jpg',
              link:'https://www.baidu.com/',
              title:'haihailu',
              time:'16:45',
              content:'请啊打开噶觉得噶快来大家嘎达那个坑垃圾的噶快来都感觉卡了大姐夫'
            },
            {
              image:'http://d.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=7253025a524e9258a6618eeaa9b2fd6e/b7003af33a87e9504e5a195214385343fbf2b4bb.jpg',
              link:'https://www.hao123.com/',
              title:'haihailu',
              time:'16:45',
              content:'请啊打开噶觉得噶快来大家嘎达那个坑垃圾的噶快来都感觉卡了大姐夫'
            },
            {
              image:'http://sc.jb51.net/uploads/allimg/150820/14-150R0154223F5.jpg',
              link:'http://www.w3cplus.com/css3/a-guide-to-flexbox.html',
              title:'haihailu',
              time:'16:45',
              content:'请啊打开噶觉得噶快来大家嘎达那个坑垃圾的噶快来都感觉卡了大姐夫'
            },
            {
              image:'http://cdn.duitang.com/uploads/item/201510/24/20151024142711_WmywH.thumb.700_0.jpeg',
              link:'http://cn.redux.js.org/docs/introduction/ThreePrinciples.html',
              title:'haihailu',
              time:'16:45',
              content:'请啊打开噶觉得噶快来大家嘎达那个坑垃圾的噶快来都感觉卡了大姐夫'
            },
            {
              image:'http://scimg.jb51.net/allimg/151116/14-151116151559593.jpg',
              link:'http://www.w3school.com.cn/jsref/index.asp',
              title:'haihailu',
              time:'16:45',
              content:'请啊打开噶觉得噶快来大家嘎达那个坑垃圾的噶快来都感觉卡了大姐夫'
            }]),
        };
    },
    submit: function(data:{}, sectionID: number, rowID: number){
      this.props.navigator.push({
        name:'MessageItem',
        component:MessageItem,
        params:{
          link:data.link,
        }
      });
    },
    _renderRow: function(data:{}, sectionID: number, rowID: number) {
    return (
        <TouchableOpacity onPress={this.submit.bind(this,data,sectionID,rowID)}>
          <View style={styles.row}>
            <Image style={styles.image} source={{uri:data.image}}/>
            <View style={styles.rowRight}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.time}>{data.time}</Text>
              </View>
              <View style={{flex:1,justifyContent:'flex-end'}}>
                <Text numberOfLines={1}
                  style={styles.content}>
                  {data.content}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
    );
   },
    render: function() {
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      );
    }
});

const styles = StyleSheet.create({
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
  body:{
    flex:1
  },
  row: {
    flexDirection: 'row',
    alignItems:'center',
    padding: 10,
    backgroundColor:'#FFFFFF',
    marginTop:3
  },
  rowRight:{
    flex:1,
    marginLeft:5
  },
  image: {
    width: 80,
    height: 60,
  },
  title:{
    fontSize:16,
    color:'#333333',
  },
  time:{

  },
  content:{
    textAlign:'left',
  }
});

module.exports = Message_News;
