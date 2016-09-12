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
    TouchableOpacity,
    ListView
}  from 'react-native';
import React  from 'react';
import HeadView from '../../components/HeadView.js';
var home = 0;
class House extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        this.state =  {

        };
    }

    onLeftPress(){
        this.props.navigator.pop();
    }
    submit(){

    }
    delete(){

    }
    componentDidMount(){

    }
    render() {
        return (
            <View style={styles.container}>
              <HeadView title='我的房屋'
                leftText='返回'
                leftImg= {require('../../imgs/back.png')}
                rightText='收藏'
                onLeftPress={this.onLeftPress.bind(this)}
                leftButton={true}
                rightButton={false}
                navigator={this.props.navigator} />
              <View style={styles.body}>
                <View style={styles.bodyHead}>
                  <View style={styles.bodyHeadLeft}>
                    <Image style={styles.bodyHeadLeftImg} source={require('../../imgs/houses2.png')}/>
                    <Text style={styles.bodyHeadLeftText}>我的房屋</Text>
                  </View>
                  <View style={styles.bodyHeadRight}>
                    <Text style={styles.bodyHeadRightImg}>总数: </Text>
                  <Text style={styles.bodyHeadRightText}>{home}</Text>
                  </View>
                </View>
                <View style={styles.bodyCenter}>
                  <ListViewDemo/>
                </View>
                <View style={styles.bodyBottom}>
                  <TouchableOpacity onPress={this.submit.bind(this)}
                    style={{flex:1}}>
                      <View style={styles.submitBtn}>
                          <Text style={styles.submitText}>增加</Text>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.delete.bind(this)}
                    style={{flex:1}}>
                      <View style={[styles.submitBtn,{backgroundColor:'#DE6569'}]}>
                          <Text style={styles.submitText}>删除</Text>
                      </View>
                  </TouchableOpacity>
                </View>
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
              village:'滨江俊园',
              build:'D1',
              unit:'一单元',
              room:'2309',
              user:'3356'
            },
            {
              village:'滨江俊园1',
              build:'D2',
              unit:'二单元',
              room:'2310',
              user:'3378'
            },
            {
              village:'滨江俊园2',
              build:'D3',
              unit:'三单元',
              room:'2398',
              user:'3309'
            },
            {
              village:'滨江俊园3',
              build:'D4',
              unit:'四单元',
              room:'2380',
              user:'3330'
            },
            {
              village:'滨江俊园4',
              build:'D5',
              unit:'一单元',
              room:'2334',
              user:'3323'
            },
            {
              village:'滨江俊园',
              build:'D1',
              unit:'一单元',
              room:'2309',
              user:'3356'
            },
            {
              village:'滨江俊园',
              build:'D1',
              unit:'一单元',
              room:'2309',
              user:'3356'
            },
            {
              village:'滨江俊园',
              build:'D1',
              unit:'一单元',
              room:'2309',
              user:'3356'
            },
            {
              village:'滨江俊园',
              build:'D1',
              unit:'一单元',
              room:'2309',
              user:'3356'
            }]),
        };
    },
    _submit: function(data:{}, sectionID: number, rowID: number) {
      alert('小区：'+data.village+rowID);
    },
    _renderRow: function(data:{}, sectionID: number, rowID: number) {
    return (
        <TouchableHighlight onPress={this._submit.bind(this, data, sectionID, rowID)}
          underlayColor='#3DD1E0'>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>小区： {data.village}</Text>
            <Text style={styles.listItemText}>楼号： {data.build}</Text>
            <Text style={styles.listItemText}>单元： {data.unit}</Text>
            <Text style={styles.listItemText}>房间： {data.room}</Text>
            <Text style={styles.listItemText}>户号： {data.user}</Text>
          </View>
        </TouchableHighlight>
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

var styles = {
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0'
    },
    body:{
      flex:1,
    },
    bodyHead:{
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:'#F0F0F0',
      alignItems:'center',
      padding:10,
    },
    bodyHeadLeft:{
      flexDirection:'row',
      alignItems:'center',
    },
    bodyHeadLeftImg:{
      marginLeft:10,
    },
    bodyHeadLeftText:{
      color:'#333333',
      fontSize:16,
      marginLeft:10,
    },
    bodyHeadRight:{
      flexDirection:'row',
      alignItems:'center',
    },
    bodyHeadRightImg:{
      color:'#333333',
      fontSize:16,
      marginRight:5,
    },
    bodyHeadRightText:{
      marginRight:10,
      color:'#333333',
      fontSize:16,
    },
    bodyCenter:{
      flex:1,
    },
    bodyBottom:{
      flexDirection:'row',
    },
    submitBtn:{
      flex:1,
      backgroundColor:'#3DD1E0',
      height:44,
      borderRadius:0,
      justifyContent:'center',
      alignItems:'center'
    },
    submitText:{
      color:'#FFF',
      fontSize:17,
      alignSelf:'center'
    },
    listItem:{
      backgroundColor:'#FFFFFF',
      padding:10,
      flex:1,
      marginTop:5,
    },
    listItemText:{
      fontSize:16,
      marginLeft:10,
    }
};

module.exports = House;
