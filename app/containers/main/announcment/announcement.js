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
import HeadView from '../../../components/HeadView.js';
import AnnouncementItem from './announcementItem.js';

class Announcement extends Component{
  constructor(props) {
    super(props);
    this.state={

    };
  }
  onLeftPress(){
      this.props.navigator.pop();
  }
  render(){
    return(
      <View style={styles.container}>
        <HeadView title='公告'
          leftText='返回'
          leftImg= {require('../../../imgs/back.png')}
          onLeftPress={this.onLeftPress.bind(this)}
          leftButton={true}
          rightButton={false}
          navigator={this.props.navigator} />
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
              image:'http://mta.zttit.com:8080/images/ZTT_1404756641470_image.jpg',
              title:'请啊打开噶觉得噶快来大家嘎达那个坑垃圾的噶快来都感觉卡了大姐夫',
              time:'2016-05-20',
              link:'http://www.lcode.org/react-native/'
            },
            {
              image:'http://mta.zttit.com:8080/images/ZTT_1404756641470_image.jpg',
              title:'请啊打开噶觉得噶快来大家嘎达那个坑垃圾的噶快来都感觉卡了大姐夫',
              time:'2016-05-20',
              link:'https://www.baidu.com/'
            },
            {
              image:'http://mta.zttit.com:8080/images/ZTT_1404756641470_image.jpg',
              title:'请啊打开噶觉得噶快来大家嘎达那个坑垃圾的噶快来都感觉卡了大姐夫',
              time:'2016-05-20',
              link:'https://www.hao123.com/'
            },
            {
              image:'http://mta.zttit.com:8080/images/ZTT_1404756641470_image.jpg',
              title:'请啊打开噶觉得噶快来大家嘎达那个坑垃圾的噶快来都感觉卡了大姐夫',
              time:'2016-05-20',
              link:'http://www.w3cplus.com/css3/a-guide-to-flexbox.html'
            },
            {
              image:'http://mta.zttit.com:8080/images/ZTT_1404756641470_image.jpg',
              title:'请啊打开噶觉得噶快来大家嘎达那个坑垃圾的噶快来都感觉卡了大姐夫',
              time:'2016-05-20',
              link:'http://cn.redux.js.org/docs/introduction/ThreePrinciples.html'
            },
            {
              image:'http://mta.zttit.com:8080/images/ZTT_1404756641470_image.jpg',
              title:'请啊打开噶觉得噶快来大家嘎达那个坑垃圾的噶快来都感觉卡了大姐夫',
              time:'2016-05-20',
              link:'http://www.w3school.com.cn/jsref/index.asp'
            }]),
        };
    },
    submit: function(data:{}, sectionID: number, rowID: number){
      this.props.navigator.push({
        name:'AnnouncementItem',
        component:AnnouncementItem,
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
              <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                <Text style={styles.title} numberOfLines={2}>{data.title}</Text>
              </View>
              <View style={{flex:1,flexDirection:'row',alignItems:'flex-end'}}>
                <Text style={styles.time}>发布于：</Text>
                <Text style={styles.time}>{data.time}</Text>
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
    flex:1,
    color:'#333333',
  },
  time:{

  },
  content:{
    textAlign:'left',
  }
});

module.exports = Announcement;
