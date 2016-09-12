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
    ScrollView,
    TouchableOpacity,
}  from 'react-native';
import React from 'react';
import Scanner from '../main/scanner/scanner.js';
import Preferential from '../main/preferential/preferential.js';
import Announcement from '../main/announcment/announcement.js';
import Repair from '../main/repair/repair.js';
import Supermarket from '../main/supermarket/supermarket.js';
import Advisory from '../main/advisory/advisory.js';
import Fresh from '../main/fresh/fresh.js';
import Housekeeping from '../main/housekeeping/housekeeping.js';

class Main_News extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        this.state =  {

        };
    }
    onPressSwitch(whitch:string){
      switch (whitch) {
        case 'Scanner'://扫一扫
            this.props.navigator.push({
              name:'Scanner',
              component:Scanner,
            });
          break;
        case 'preferential'://优惠
            this.props.navigator.push({
              name:'Preferential',
              component:Preferential,
            });
            break;
        case 'announcement'://重要公告
            this.props.navigator.push({
              name:'Announcement',
              component:Announcement,
            });
            break;
        case 'repair'://报修
            this.props.navigator.push({
              name:'Repair',
              component:Repair,
            });
            break;
        case 'supermarket'://超市
            this.props.navigator.push({
              name:'Supermarket',
              component:Supermarket,
            });
          break;
        case 'advisory'://咨询物管
            this.props.navigator.push({
              name:'Advisory',
              component:Advisory,
            });
          break;
        case 'fresh'://生鲜水果
            this.props.navigator.push({
              name:'Fresh',
              component:Fresh,
            });
          break;
        case 'forum'://小区论坛
            alert('小区论坛');
          break;
        case 'housekeeping'://家政服务
            this.props.navigator.push({
              name:'Housekeeping',
              component:Housekeeping,
            });
          break;
        case 'expressdelivery'://快递
            // alert('快递');
          break;
        default:

      }

    }
    render() {
        return (
            <View style={styles.container}>
              <View style={styles.head}>
                <Text style={styles.headText}>社区</Text>
                <View style={styles.bodyHead}>
                    <TouchableOpacity style={styles.bodyHeadItem}
                      onPress={this.onPressSwitch.bind(this, 'Scanner')}>
                      <View style={styles.bodyHeadItem}>
                        <Image source={require('../../imgs/sweep.png')}/>
                        <Text style={styles.bodyHeadText}>扫一扫</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bodyHeadItem}
                      onPress={this.onPressSwitch.bind(this, 'preferential')}>
                      <View style={styles.bodyHeadItem}>
                        <Image source={require('../../imgs/Preferential.png')}/>
                        <Text style={styles.bodyHeadText}>优惠</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bodyHeadItem}
                      onPress={this.onPressSwitch.bind(this, 'announcement')}>
                      <View style={styles.bodyHeadItem}>
                        <Image source={require('../../imgs/announcement.png')}/>
                        <Text style={styles.bodyHeadText}>重要公告</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
              </View>
              <ScrollView
                showsVerticalScrollIndicator={false}>
                <View style={{flex:1}}>
                  <View style={styles.bodyCenter}>
                    <Text style={{margin:10}}>总资产(元)</Text>
                    <Text style={{color:'#3DD1E0',fontSize:20}}>1234.00</Text>
                    <View style={{margin:10,flexDirection:'row'}}>
                      <Text>昨日收益: </Text>
                      <Text style={{color:'#3DD1E0'}}>33.00</Text>
                    </View>
                  </View>
                  <View>
                    <View style={styles.bodyBottomItem}>
                        <TouchableOpacity onPress={this.onPressSwitch.bind(this, 'repair')}>
                            <View style={styles.row}>
                              <Image style={styles.thumb} source={require('../../imgs/Repair.png')} />
                              <Text style={styles.text}>报修</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressSwitch.bind(this, 'supermarket')}>
                            <View style={styles.row}>
                              <Image style={styles.thumb} source={require('../../imgs/Supermarket.png')} />
                              <Text style={styles.text}>超市</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressSwitch.bind(this, 'advisory')}>
                            <View style={styles.row}>
                              <Image style={styles.thumb} source={require('../../imgs/advisory.png')} />
                              <Text style={styles.text}>咨询物管</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressSwitch.bind(this, 'fresh')}>
                            <View style={styles.row}>
                              <Image style={styles.thumb} source={require('../../imgs/Fresh.png')} />
                              <Text style={styles.text}>生鲜水果</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.bodyBottomItem,{marginTop:2}]}>
                        <TouchableOpacity onPress={this.onPressSwitch.bind(this, 'forum')}>
                            <View style={styles.row}>
                              <Image style={styles.thumb} source={require('../../imgs/forum.png')} />
                              <Text style={styles.text}>小区论坛</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressSwitch.bind(this, 'housekeeping')}>
                            <View style={styles.row}>
                              <Image style={styles.thumb} source={require('../../imgs/Housekeeping.png')} />
                              <Text style={styles.text}>家政服务</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressSwitch.bind(this, 'expressdelivery')}>
                            <View style={styles.row}>
                              <Image style={styles.thumb} source={require('../../imgs/expressdelivery.png')} />
                              <Text style={styles.text}>快递</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.row}>
                              <Image style={{}} source={require('../../imgs/more.png')}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.bodyBottom}>
                    <View style={styles.bodyBottomLeft}>
                      <Image source={require('../../imgs/Hot.png')}/>
                    </View>
                    <View style={styles.bodyBottomRight}>
                      <View style={styles.bodyBottomRight1}>
                        <View style={styles.bodyBottomRightView}>
                          <Text style={styles.bodyBottomRightText}>热评</Text>
                        </View>
                        <View style={styles.bodyBottomRightView}>
                          <Text style={styles.bodyBottomRightText}>热评</Text>
                        </View>
                      </View>
                      <View style={styles.bodyBottomRight2}>
                        <TouchableOpacity>
                          <Text style={styles.bodyBottomRightText1} numberOfLines={1}>
                            奶德噶瞌睡打个接啊快来的国家多个快啦圣诞节噶是的看见刚大帅哥啊是的估
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Text style={styles.bodyBottomRightText1} numberOfLines={1}>
                            的难看噶是的接口两个啊抵抗力国际卡罗山东价格克拉大家个卡机顾客了解
                          </Text>
                        </TouchableOpacity>
                      </View>

                    </View>
                  </View>
                  <View style={{marginTop:5,marginBottom:5}}>
                    <Image source={require('../../imgs/mainbackground.png')}/>
                  </View>
                </View>
              </ScrollView>
            </View>
        );
    }

};

var styles = {
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        flexDirection:'column'
    },
    head:{
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      padding:10,
      backgroundColor:'#002E4D'
    },
    headText:{
      color:'#FFFFFF',
      fontWeight:'bold',
      fontSize:17,
    },
    body:{
      flex:1,
      backgroundColor:'#F0F0F0'
    },
    bodyHead:{
      backgroundColor:'#002E4D',
      flexDirection:'row',
      padding:20,
      justifyContent:'space-around',
    },
    bodyHeadItem:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    bodyHeadText:{
      color:'#FFFFFF',
      marginTop:5,
    },
    bodyCenter:{
      padding:10,
      backgroundColor:'#FFFFFF',
      alignItems:'center'
    },
    bodyBottomItem:{
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:10,
    },
    row: {
      justifyContent: 'center',
      padding: 5,
      margin: 0,
      width: 88,
      height: 88,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      borderWidth: 0,
      borderRadius: 0,
      borderColor: '#CCC'
    },
    thumb: {
      width: 45,
      height: 45
    },
    text: {
      flex: 1,
      marginTop: 5,
    },
    bodyBottom:{
      flexDirection:'row',
      marginTop:2,
      backgroundColor:'#FFFFFF'
    },
    bodyBottomLeft:{
      flex:1,
      padding:10,
      justifyContent:'center',
      alignItems:'center',
    },
    bodyBottomRight:{
      flex:4,
      justifyContent:'center',
      flexDirection:'row'
    },
    bodyBottomRight1:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    bodyBottomRight2:{
      flex:3,
      alignItems:'flex-start',
      justifyContent:'center'
    },
    bodyBottomRightView:{
      borderColor:'red',
      borderWidth:1,
      borderRadius:5,
      margin:2,
      paddingLeft:5,
      paddingRight:5,
    },
    bodyBottomRightText:{
      color:'red'
    },
    bodyBottomRightText1:{
      margin:2
    }
};

module.exports = Main_News;
