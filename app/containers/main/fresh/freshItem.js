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
    Dimensions,
    TouchableOpacity,
}  from 'react-native';
import React  from 'react';
import HeadView from '../../../components/HeadView.js';
import Communications from 'react-native-communications';
// import Amap from './amap.js';
var {width,height} = Dimensions.get('window');

class FreshItem extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        this.state =  {
          image:void 0,
          name:void 0,
          type:void 0,
          address:void 0,
          tel:void 0,
          preferential:void 0,
        };
    }
    componentDidMount(){
      this.setState({
        image:this.props.image,
        name:this.props.name,
        type:this.props.type,
        address:this.props.address,
        tel:this.props.tel,
        preferential:this.props.preferential,
      });
    }
    onLeftPress(){
        this.props.navigator.pop();
    }
    render() {
        return (
            <View style={styles.container}>
              <HeadView title={this.state.name}
                leftText='返回'
                leftImg= {require('../../../imgs/back.png')}
                rightText='收藏'
                onLeftPress={this.onLeftPress.bind(this)}
                leftButton={true}
                rightButton={false}
                navigator={this.props.navigator} />
              <View style={styles.body}>
                <Image style={styles.image} source={{uri:this.state.image}}/>
                <Text style={styles.name}>{this.state.name}</Text>
                <Text style={styles.type}>{this.state.type}</Text>
                <Text style={styles.address}>{this.state.address}</Text>
                <View style={styles.imageView}>
                  <TouchableOpacity onPress={() =>{
                      // this.props.navigator.push({
                      //   name:'Amap',
                      //   component:Amap
                      // });
                    }}>
                    <Image style={styles.imageViewItem} source={require('../../../imgs/address.png')}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Communications.phonecall(this.state.tel, true)}>
                    <Image style={styles.imageViewItem} source={require('../../../imgs/phone.png')}/>
                  </TouchableOpacity>
                </View>
                <View style={styles.preferentialView}>
                  <Text style={styles.preferential}>{this.state.preferential}</Text>
                  <Text style={styles.preferential}>折</Text>
                </View>
              </View>
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

    },
    image:{
      height:200,
      width:width,
    },
    name:{
      alignSelf:'center',
      color:'#333333',
      margin:15,
      fontWeight:'bold'
    },
    type:{
      alignSelf:'center',
    },
    address:{
      alignSelf:'center',
      margin:15,
    },
    imageView:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },
    imageViewItem:{
      margin:10
    },
    preferentialView:{
      flexDirection:'row',
      justifyContent:'center',
      marginTop:10,
    },
    preferential:{
      alignSelf:'center',
      color:'#3DD1E0',
      fontWeight:'bold'
    }
};

module.exports = FreshItem;
