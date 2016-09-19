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
    TouchableOpacity,
    Image,
    TextInput,
    ListView,
    ActivityIndicator,
    InteractionManager
}  from 'react-native';
import React  from 'react';
import HeadView from '../../components/HeadView.js';
import Unit from './unit.js';
class Building extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        this.state =  {
          dataSource:new ListView.DataSource({
            rowHasChanged:(r1,r2) => r1 !== r2,
          }),
          loading:true,
          build:'1栋',
          show:false
        };
    }
    componentDidMount(){
      this.fetchData();
    }
    onLeftPress(){
      this.props.navigator.pop();
    }
    fetchData(){
      let data = ['1栋','2栋','3栋','4栋','5栋','6栋','7栋','8栋','9栋','10栋','11栋','12栋','13栋','14栋','15栋','16栋','17栋','18栋','19栋','20栋']
      setTimeout(() => {
        InteractionManager.runAfterInteractions(() => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data),
            loading:false,
          })
        })
      }, 1500);
    }
    choosed(data){
      this.setState({
        build:data
      });
      this.props.navigator.push({
        name:'Unit',
        component:Unit,
        params:{
          build:data,
        }
      });
    }
    _renderRow(rowData, sectionID, rowID, highlightRow){
      return (
          <TouchableOpacity onPress={this.choosed.bind(this,rowData)}>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>{rowData}</Text>
              <View style={{height:1,backgroundColor:'#F0F0F0'}}/>
            </View>
          </TouchableOpacity>
      );
    }
    _onChangeText(){

    }
    render() {
        return (
            <View style={styles.container}>
              <HeadView title='选择楼栋'
                leftText='返回'
                leftImg= {require('../../imgs/back.png')}
                rightText='收藏'
                leftButton={true}
                rightButton={false}
                onLeftPress={this.onLeftPress.bind(this)}
                navigator={this.props.navigator} />
                {this.state.loading ?
                  <View style={[styles.container,{justifyContent:'center',alignItems:'center'}]}>
                    <ActivityIndicator
                      size='large'
                      color='#3DD1E0'/>
                    <Text style={{marginTop:10}}>数据加载中</Text>
                  </View>
                    :
                  <View style={styles.body}>
                    <View style={styles.search}>
                      <View style={styles.searchIn}>
                        <Image source={require('../../imgs/search.png')} style={styles.searchImg}/>
                      <TextInput style={styles.searchText} placeholder='搜索楼栋/单元/楼层' underlineColorAndroid='transparent' returnKeyType='search' onChangeText={this._onChangeText.bind(this)}/>
                      </View>
                    </View>
                    <View style={styles.choosed}>
                      <Text>{this.state.build}</Text>
                    </View>
                    <ListView
                      removeClippedSubviews={true}
                      dataSource={this.state.dataSource}
                      renderRow={this._renderRow.bind(this)}/>
                  </View>
                }
            </View>
        );
    }

};

var styles = {
    container: {
      flex: 1,
      backgroundColor: '#F0F0F0'
    },
    body:{
      flex:1,
      backgroundColor:'#FFFFFF',
      marginTop:1
    },
    search:{
      padding:15,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row'
    },
    searchIn:{
      flex:1,
      flexDirection:'row',
      backgroundColor:'#F0F0F0',
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center'
    },
    searchImg:{
      marginLeft:20
    },
    searchText:{
      width:160,
      height:40,
      color:'#AAAAAA'
    },
    choosed:{
      backgroundColor:'#F0F0F0',
      justifyContent:'center',
      padding:15
    },
    listItem:{
      paddingLeft:15,
      paddingTop:10,
    },
    listItemText:{
      paddingBottom:10
    }
};

module.exports = Building;
