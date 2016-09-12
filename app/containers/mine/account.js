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
    ListView,
    ActivityIndicator,
    InteractionManager
}  from 'react-native';
import React  from 'react';
import HeadView from '../../components/HeadView.js';
import BusyIndicator from 'react-native-busy-indicator';
import loaderHandler from 'react-native-busy-indicator/LoaderHandler';

class Account extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        this.state =  {

        };
    }

    onLeftPress(){
        this.props.navigator.pop();
    }
    onRightPress(){
      alert('筛选');
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
              <HeadView title='账单'
                leftText='返回'
                leftImg= {require('../../imgs/back.png')}
                rightText='筛选'
                onLeftPress={this.onLeftPress.bind(this)}
                onRightPress={this.onRightPress.bind(this)}
                leftButton={true}
                rightButton={true}
                navigator={this.props.navigator} />
              <View style={styles.body}>
                <View style={styles.bodyCenter}>
                  <AccountList/>
                </View>
              </View>
            </View>
        );
    }
};

// class AccountList1 extends React.Component{
//  constructor(props) {
//    super(props);
//    this.state =  {
//      dataSource:new ListView.DataSource({
//        rowHasChanged:(r1,r2) => r1 !== r2,
//      }),
//    };
//  }
//
//  componentDidMount(){
//    this.fetchData();
//  }
//  render(){
//    return(
//      <ListView
//        removeClippedSubviews={true}
//        dataSource={this.state.dataSource}
//        renderRow={this.renderRow}/>
//    );
//  }
//  fetchData(){
//    var responseData = {
//      'result':[
//        {
//          section:'一月',
//          sectionID:'1',
//          data:[
//            {
//              village:'滨江俊园',
//              build:'D1',
//              unit:'一单元',
//              room:'2309',
//              user:'3356'
//            },
//            {
//              village:'滨江俊园1',
//              build:'D2',
//              unit:'二单元',
//              room:'2310',
//              user:'3378'
//            },
//            {
//              village:'滨江俊园2',
//              build:'D3',
//              unit:'三单元',
//              room:'2398',
//              user:'3309'
//            },
//            {
//              village:'滨江俊园3',
//              build:'D4',
//              unit:'四单元',
//              room:'2380',
//              user:'3330'
//            },
//            {
//              village:'滨江俊园4',
//              build:'D5',
//              unit:'一单元',
//              room:'2334',
//              user:'3323'
//            },
//          ]
//        },
//        {
//          section:'二月',
//          sectionID:'2',
//          data:[
//            {
//              village:'滨江俊园',
//              build:'D1',
//              unit:'一单元',
//              room:'2309',
//              user:'3356'
//            },
//            {
//              village:'滨江俊园1',
//              build:'D2',
//              unit:'二单元',
//              room:'2310',
//              user:'3378'
//            },
//            {
//              village:'滨江俊园2',
//              build:'D3',
//              unit:'三单元',
//              room:'2398',
//              user:'3309'
//            },
//            {
//              village:'滨江俊园3',
//              build:'D4',
//              unit:'四单元',
//              room:'2380',
//              user:'3330'
//            },
//            {
//              village:'滨江俊园4',
//              build:'D5',
//              unit:'一单元',
//              room:'2334',
//              user:'3323'
//            },]
//        },
//        {
//          section:'三月',
//          sectionID:'3',
//          data:[
//            {
//              village:'滨江俊园',
//              build:'D1',
//              unit:'一单元',
//              room:'2309',
//              user:'3356'
//            },
//            {
//              village:'滨江俊园1',
//              build:'D2',
//              unit:'二单元',
//              room:'2310',
//              user:'3378'
//            },
//            {
//              village:'滨江俊园2',
//              build:'D3',
//              unit:'三单元',
//              room:'2398',
//              user:'3309'
//            },
//            {
//              village:'滨江俊园3',
//              build:'D4',
//              unit:'四单元',
//              room:'2380',
//              user:'3330'
//            },
//            {
//              village:'滨江俊园4',
//              build:'D5',
//              unit:'一单元',
//              room:'2334',
//              user:'3323'
//            },]
//        },
//        {
//          section:'四月',
//          sectionID:'4',
//          data:[
//            {
//              village:'滨江俊园',
//              build:'D1',
//              unit:'一单元',
//              room:'2309',
//              user:'3356'
//            },
//            {
//              village:'滨江俊园1',
//              build:'D2',
//              unit:'二单元',
//              room:'2310',
//              user:'3378'
//            },
//            {
//              village:'滨江俊园2',
//              build:'D3',
//              unit:'三单元',
//              room:'2398',
//              user:'3309'
//            },
//            {
//              village:'滨江俊园3',
//              build:'D4',
//              unit:'四单元',
//              room:'2380',
//              user:'3330'
//            },
//            {
//              village:'滨江俊园4',
//              build:'D5',
//              unit:'一单元',
//              room:'2334',
//              user:'3323'
//            },]
//        },
//        {
//          section:'五月',
//          sectionID:'5',
//          data:[
//            {
//              village:'滨江俊园',
//              build:'D1',
//              unit:'一单元',
//              room:'2309',
//              user:'3356'
//            },
//            {
//              village:'滨江俊园1',
//              build:'D2',
//              unit:'二单元',
//              room:'2310',
//              user:'3378'
//            },
//            {
//              village:'滨江俊园2',
//              build:'D3',
//              unit:'三单元',
//              room:'2398',
//              user:'3309'
//            },
//            {
//              village:'滨江俊园3',
//              build:'D4',
//              unit:'四单元',
//              room:'2380',
//              user:'3330'
//            },
//            {
//              village:'滨江俊园4',
//              build:'D5',
//              unit:'一单元',
//              room:'2334',
//              user:'3323'
//            },
//          ]
//        },
//      ]
//    };
//    this.setState({
//      dataSource: this.state.dataSource.cloneWithRows(responseData.result),
//    });
//  }
//  renderRow(rowData, sectionID, rowID, highlightRow){
//    console.log('rowData',rowData);
//    let dataSource = rowData.data;
//    let ItemArray = [];
//
//    for (var i = 0; i < dataSource.length; i++) {
//      ItemArray.push(
//        <ListItem key={i} dataSource={dataSource[i]}/>
//      )
//    }
//
//    let _component =
//     <View>
//         <Text>{rowData.section}</Text>
//         {ItemArray}
//     </View>
//
//    return _component;
//  }
// }
//
// class ListItem extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//
//     };
//   }
//   componentDidMount(){
//
//   }
//   render(){
//     return(
//       <View>
//         <TouchableHighlight
//           underlayColor='transparent'>
//           <View style={styles.listItem}>
//             <Text style={styles.listItemText}>小区： {this.props.dataSource.village}</Text>
//             <Text style={styles.listItemText}>楼号： {this.props.dataSource.build}</Text>
//             <Text style={styles.listItemText}>单元： {this.props.dataSource.unit}</Text>
//             <Text style={styles.listItemText}>房间： {this.props.dataSource.room}</Text>
//             <Text style={styles.listItemText}>户号： {this.props.dataSource.user}</Text>
//           </View>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }

class AccountList extends React.Component{
  constructor(props) {
    super(props);
    var getRowData = (dataBlob, sectionID, rowID) =>{
      return dataBlob[sectionID + ':' + rowID];
    };
    var getSectionHeaderData = (dataBlob, sectionID) =>{
      return dataBlob[sectionID];
    };
    this.state =  {
      dataSource:new ListView.DataSource({
        getRowData:getRowData,
        getSectionHeaderData:getSectionHeaderData,
        rowHasChanged:(r1,r2) => r1 !== r2,
        sectionHeaderHasChanged:(h1,h2) => h1 !== h2
      }),
      loading:true,
    };
  }

  componentDidMount(){
    this.fetchData();
  }
  render(){
    return(
      <View style={styles.container}>
        {this.state.loading ?
          <View style={[styles.container,{justifyContent:'center',alignItems:'center'}]}>
            <ActivityIndicator
              size='large'
              color='#3DD1E0'/>
            <Text style={{marginTop:10}}>数据加载中</Text>
          </View>
            :
          <ListView
            removeClippedSubviews={true}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            renderSectionHeader={this.renderSectionHeader}/>
        }
      </View>
    );
  }
  fetchData(){
    var responseData = {
      'result':[
        {
          section:'一月',
          sectionID:'1',
          data:[
            {
              day:'今天',
              time:'09:45',
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
          ]
        },
        {
          section:'二月',
          sectionID:'2',
          data:[
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
            },]
        },
        {
          section:'三月',
          sectionID:'3',
          data:[
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
            },]
        },
        {
          section:'四月',
          sectionID:'4',
          data:[
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
            },]
        },
        {
          section:'五月',
          sectionID:'5',
          data:[
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
          ]
        },
      ]
    };
    var json = responseData.result,
        length = json.length,
        dataBlob = {},
        sectionIDs = [],
        sectionData,
        rowIDs = [],
        rowData;
    for (var i = 0; i < length; i++) {
      sectionData = json[i];
      sectionIDs.push(sectionData.sectionID);
      dataBlob[sectionData.sectionID] = sectionData.section;

      rowData = sectionData.data;
      rowIDs[i] = [];
      for (var j = 0; j < rowData.length; j++) {
        rowIDs[i].push(rowData[j].build);
        dataBlob[sectionData.sectionID + ':' + rowData[j].build] = rowData[j];
      }
    };
    this.setState({
      dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
    });
    setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
        this.setState({
          loading:false,
        })
      })
    }, 1500);
  }
  renderRow(rowData, sectionID, rowID, highlightRow){
    return (
        <TouchableHighlight
          underlayColor='transparent'>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>小区： {rowData.village}</Text>
            <Text style={styles.listItemText}>楼号： {rowData.build}</Text>
            <Text style={styles.listItemText}>单元： {rowData.unit}</Text>
            <Text style={styles.listItemText}>房间： {rowData.room}</Text>
            <Text style={styles.listItemText}>户号： {rowData.user}</Text>
          </View>
        </TouchableHighlight>
    );
  }
  renderSectionHeader(sectionData, sectionID){
    console.log('sectionData',sectionData);
    return(
      <View style={styles.bodyHead}>
        <View style={styles.bodyHeadLeft}>
          <Text style={styles.bodyHeadLeftText}>{sectionData}</Text>
        </View>
        <View style={styles.bodyHeadRight}>
          <Text style={styles.bodyHeadRightText}></Text>
        </View>
      </View>
    );
  }
}

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

module.exports = Account;
