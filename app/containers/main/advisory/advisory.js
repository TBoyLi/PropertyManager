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
}  from 'react-native';
import React  from 'react';
import HeadView from '../../../components/HeadView.js';
import Communications from 'react-native-communications';

var ds;
var data = [
  {
    name:'张三',
    tel:'16583939023',
  },
  {
    name:'李四',
    tel:'15512349876',
  },
  {
    name:'王五',
    tel:'16583939023',
  },
  {
    name:'刘六',
    tel:'16583939023',
  },
  {
    name:'张三',
    tel:'16583939023',
  },];
class Advisory extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        ds = new ListView.DataSource({
          rowHasChanged:(oldRow,newRow) => oldRow !==newRow,
        });
        this.state =  {
          dataSource: ds.cloneWithRows(data)
        };
    }
    onLeftPress(){
        this.props.navigator.pop();
    }
    render() {
        return (
            <View style={styles.container}>
              <HeadView title='联系物业'
                leftText='返回'
                leftImg= {require('../../../imgs/back.png')}
                rightText='收藏'
                onLeftPress={this.onLeftPress.bind(this)}
                leftButton={true}
                rightButton={false}
                navigator={this.props.navigator} />
              <ListView dataSource={this.state.dataSource}
              enableEmptySections={true}
              renderRow={this._renderRow.bind(this)}/>
            </View>
        );
    }
    _renderRow(data:{}, sectionID: number, rowID: number){
      return(
        <TouchableOpacity>
          <View style={styles.row}>
            <Text style={styles.rowText}>{data.name}</Text>
            <Text style={styles.rowTel}>{data.tel}</Text>
            <TouchableOpacity onPress={() => Communications.phonecall(data.tel, true)}>
              <View style={styles.rowTelImg}>
                <Image source={require('../../../imgs/phone2.png')}/>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      );
    }
};

var styles = {
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0'
    },
    row:{
      flexDirection:'row',
      padding:15,
      marginTop:5,
      backgroundColor:'#FFFFFF'
    },
    rowText:{
      flex:1,
      fontSize:17,
      color:'#333333',
      alignSelf:'center',
    },
    rowTel:{
      flex:2,
      alignSelf:'center'
    },
    rowTelImg:{
      flex:1,
      justifyContent:'center',
      alignItems:'flex-end',
    }
};

module.exports = Advisory;
