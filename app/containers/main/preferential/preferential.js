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
    ListView,
    Dimensions,
    TouchableOpacity,
}  from 'react-native';
import React  from 'react';
import HeadView from '../../../components/HeadView.js';
import PreferentialItem from './preferentialItem.js'
const {height,width} = Dimensions.get('window');

class Preferential extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        this.state =  {

        };
    }
    onLeftPress(){
        this.props.navigator.pop();
    }
    render() {
        return (
            <View style={styles.container}>
              <HeadView title='优惠'
                leftText='返回'
                leftImg= {require('../../../imgs/back.png')}
                rightText='收藏'
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
          dataSource: ds.cloneWithRows([
            {
              image:'http://atth.eduu.com/album/201203/12/1475134_1331559643qMzc.jpg',
              name:'名胜小吃名胜小吃',
              type:'小吃',
              address:'云南旅游职业学院',
              tel:'1568348394',
              preferential:'8.8',
            },
            {
              image:'http://pic51.nipic.com/file/20141022/19779658_171157758000_2.jpg',
              name:'名胜小吃名胜旅游',
              type:'旅游',
              address:'云南旅游职业学院',
              tel:'1568348394',
              preferential:'8.8',
            },
            {
              image:'http://f.hiphotos.baidu.com/image/pic/item/e824b899a9014c08838032ab087b02087bf4f401.jpg',
              name:'名胜小吃名胜电影',
              type:'电影',
              address:'新建设电影院',
              tel:'1568348394',
              preferential:'8.8',
            },
            {
              image:'http://www.pp3.cn/uploads/allimg/111124/155ASV8-8.jpg',
              name:'名胜小吃名胜酒店',
              type:'酒店',
              address:'新建设酒店',
              tel:'1568348394',
              preferential:'8.8',
            },
            {
              image:'http://i2.cqnews.net/car/attachement/jpg/site82/20120817/5404a6b61e3c1197fb211d.jpg',
              name:'未来时空KTV',
              type:'KTV',
              address:'未来时空KTV',
              tel:'1568348394',
              preferential:'8.8',
            },
            {
              image:'http://www.chinagirlol.cc/data/attachment/forum/201412/03/233758hw7o7h08kkozkcwi.jpg',
              name:'未来时空美发',
              type:'美发',
              address:'未来时空美发',
              tel:'1568348394',
              preferential:'8.8',
            }]),
        };
    },
    submit: function(data:{}, sectionID: number, rowID: number){
      this.props.navigator.push({
        name:'PreferentialItem',
        component:PreferentialItem,
        params:{
          image:data.image,
          name:data.name,
          type:data.type,
          address:data.address,
          tel:data.tel,
          preferential:data.preferential,
        }
      });
    },
    _renderRow: function(data:{}, sectionID: number, rowID: number) {
    return (
        <TouchableOpacity onPress={this.submit.bind(this,data,sectionID,rowID)}>
          <View style={styles.row}>
            <Image style={styles.image} source={{uri:data.image}}/>
            <View style={styles.rowRight}>
              <Text style={styles.name}>{data.name}</Text>
              <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end'}}>
                <Text style={styles.preferential}>{data.preferential}</Text>
                <Text style={styles.preferential}>折</Text>
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
    alignItems:'center',
    backgroundColor:'#FFFFFF',
    marginTop:10
  },
  rowRight:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:15,
  },
  image: {
    width: width,
    height: 150,
  },
  name:{
    flex:1,
    color:'#333333',
  },
  preferential:{
    color:'#3DD1E0',
    fontWeight:'bold',
  },
  content:{
    textAlign:'left',
  }
});

module.exports = Preferential;
