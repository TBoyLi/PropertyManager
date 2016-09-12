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
    TouchableOpacity,
    Dimensions
}  from 'react-native';
import React  from 'react';
import HeadView from '../../../components/HeadView.js';
import HousekeepingItem from './housekeepingItem.js';
var {width,height} = Dimensions.get('window');

var data = [
  {
    image:'http://atth.eduu.com/album/201203/12/1475134_1331559643qMzc.jpg',
    name:'洪丁家政服务有限公司',
    type:'家政服务',
    address:'云南旅游职业学院',
    tel:'1568348394',
    preferential:'8.8',
  },
  {
    image:'http://pic51.nipic.com/file/20141022/19779658_171157758000_2.jpg',
    name:'兴家家政服务有限公司',
    type:'家政服务',
    address:'云南旅游职业学院',
    tel:'1568348394',
    preferential:'8.8',
  },
  {
    image:'http://f.hiphotos.baidu.com/image/pic/item/e824b899a9014c08838032ab087b02087bf4f401.jpg',
    name:'及时雨家政服务有限公司',
    type:'家政服务',
    address:'新建设电影院',
    tel:'1568348394',
    preferential:'8.8',
  },
  {
    image:'http://www.pp3.cn/uploads/allimg/111124/155ASV8-8.jpg',
    name:'兴家家政服务有限公司',
    type:'家政服务',
    address:'新建设酒店',
    tel:'1568348394',
    preferential:'8.8',
  },
  {
    image:'http://i2.cqnews.net/car/attachement/jpg/site82/20120817/5404a6b61e3c1197fb211d.jpg',
    name:'鑫居乐家政服务有限公司',
    type:'家政服务',
    address:'未来时空KTV',
    tel:'1568348394',
    preferential:'8.8',
  },
  {
    image:'http://www.chinagirlol.cc/data/attachment/forum/201412/03/233758hw7o7h08kkozkcwi.jpg',
    name:'完美家政保洁清洗服务有限公司',
    type:'家政服务',
    address:'未来时空美发',
    tel:'1568348394',
    preferential:'8.8',
  }];
var ds;
class Housekeeping extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        ds = new ListView.DataSource({
          rowHasChanged:(oldRow,newRow) => oldRow !==newRow,
        });
        this.state =  {
          loadMore:false,
          dataSource: ds.cloneWithRows(data)
        };
    }
    onLeftPress(){
        this.props.navigator.pop();
    }
    render() {
        return (
            <View style={styles.container}>
              <HeadView title='家政服务'
                leftText='返回'
                leftImg= {require('../../../imgs/back.png')}
                rightText='收藏'
                onLeftPress={this.onLeftPress.bind(this)}
                leftButton={true}
                rightButton={false}
                navigator={this.props.navigator} />
              <ListView
                dataSource={this.state.dataSource}
                enableEmptySections={true}
                renderRow={this._renderRow.bind(this)}
                onEndReached={this.loadMore.bind(this)}
                onEndReachedThreshold={20}
                renderFooter={()=>{
                  return(
                    <TouchableOpacity onPress={this.loadMore.bind(this)} style={styles.loadMore}>
                      <Text>点击查看更多商家</Text>
                      <Image style={styles.loadMoreImage} source={require('../../../imgs/more2.png')}/>
                    </TouchableOpacity>
                  )
                }}/>
            </View>
        );
    }
    _renderRow(data:{}, sectionID: number, rowID: number){
      return(
        <TouchableOpacity onPress={this.submit.bind(this,data,sectionID,rowID)}>
          <View style={styles.list}>
            <Image style={styles.image} source={{uri:data.image}}/>
            <View style={styles.rowRight}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={styles.supermarket}>{data.name}</Text>
              </View>
              <View style={{flex:1,justifyContent:'center'}}>
                <Text numberOfLines={1}
                  style={styles.type}>
                  {data.type}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )
    }
    loadMore(){
      data.push({
        image:'http://atth.eduu.com/album/201203/12/1475134_1331559643qMzc.jpg',
        name:'鑫居乐家政服务有限公司',
        type:'家政服务',
        address:'云南旅游职业学院',
        tel:'1568348394',
        preferential:'8.8',
      });
      this.setState({
        dataSource: ds.cloneWithRows(data),
      });
    }
    submit(data:{}, sectionID: number, rowID: number){
      this.props.navigator.push({
        name:'HousekeepingItem',
        component:HousekeepingItem,
        params:{
          image:data.image,
          name:data.name,
          type:data.type,
          address:data.address,
          tel:data.tel,
          preferential:data.preferential,
        }
      });
    }
};

var styles = {
    container: {
      flex: 1,
      backgroundColor: '#F0F0F0'
    },
    body:{
      flex: 1,
      backgroundColor: '#F0F0F0'
    },
    list: {
      flexDirection: 'row',
      alignItems:'center',
      padding: 10,
      backgroundColor:'#FFFFFF',
      marginTop:3
    },
    image: {
      width: 100,
      height: 80,
    },
    rowRight:{
      flex:1,
      marginLeft:10
    },
    supermarket:{
      fontSize:16,
      color:'#333333',
    },
    type:{

    },
    loadMore:{
      height:60,
      width:width,
      backgroundColor:'#F0F0F0',
      alignItems:'center',
      justifyContent:'center'
    },
    loadMoreImage:{
      marginTop:10,
    }
};

module.exports = Housekeeping;
