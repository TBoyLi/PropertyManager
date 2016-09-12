'use strict';
import React, {
    Component
} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
    Platform
} from 'react-native';
import {width,height} from 'Dimensions';
import ImagePicker from 'react-native-image-picker';
import ImagePickerCrop from 'react-native-image-crop-picker';
import Account from '../mine/account.js';
import BankCard from '../mine/bankcard.js';
import House from '../mine/house.js';
import Authorize from '../mine/authorize.js';
import Verified from '../mine/verified.js';

class Mine_News extends Component{
  constructor(props) {
    super(props);
    this.state={
      houseNum:void 0,
      authorizeNum:void 0,
      verifiedNum:void 0,
      headPortrait:void 0,
    };
  }

  componentDidMount(){

  }
  onPressSwitch(whitch:string){
    switch (whitch) {
      case 'account':
        this.props.navigator.push({
          name:'Account',
          component:Account,
        });
        break;
      case 'bankcard':
        this.props.navigator.push({
          name:'BankCard',
          component:BankCard,
        });
        break;
      case 'house':
        this.props.navigator.push({
          name:'House',
          component:House,
        });
        break;
      case 'authorize':
        this.props.navigator.push({
          name:'Authorize',
          component:Authorize,
        });
        break;
      case 'verified':
        this.props.navigator.push({
          name:'Verified',
          component:Verified,
        });
        break;
      default:

    }
  }
  changeHeadPortrait(){//修改头像
    let options = {
      title: '', // 选择器的标题，可以设置为空来不显示标题
      cancelButtonTitle:'取消',
      takePhotoButtonTitle:'拍照',
      chooseFromLibraryButtonTitle:'相册选择',
      mediaType:'photo'
    };
    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {

      }
      else if (response.error) {

      }
      else if (response.customButton) {

      }
      else {
        // You can display the image using either data...
        const source = {name: response.fileName, uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

        // or a reference to the platform specific asset location
        if (Platform.OS === 'ios') {
          const source = {name: response.fileName, uri: response.uri.replace('file://', ''), isStatic: true};
        } else {
          const source = {name: response.fileName, uri: response.uri, isStatic: true};
        }
        this.setState({
          headPortrait:source,
        });
      }
    });
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.headText}>我</Text>
          <View style={styles.HeadView}>
            <TouchableHighlight style={styles.headImageLine} underlayColor='transparent' onPress={this.changeHeadPortrait.bind(this)}>
              {this.state.headPortrait ?
                <Image style={styles.headImage} source={this.state.headPortrait}/>
                :
                <Image style={styles.headImage} source={require('../../imgs/icon_default_author.png')}/>}
            </TouchableHighlight>
          </View>
          <View style={styles.headTelNick}>
            <Text style={styles.headTextTel}>15587130181</Text>
            <Text style={styles.headTextNick}>蓝精灵</Text>
          </View>
        </View>
        <View style={styles.body}>
          <TouchableOpacity style={styles.bodyLeft}
            onPress={this.onPressSwitch.bind(this,'account')}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image source={require('../../imgs/Bill.png')}/>
              <Text style={{marginTop:5}}>账单</Text>
            </View>
          </TouchableOpacity>
          <View style={{width:1,backgroundColor:'#666666',marginTop:8,marginBottom:8}}></View>
          <TouchableOpacity style={styles.bodyRight}
            onPress={this.onPressSwitch.bind(this,'bankcard')}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image source={require('../../imgs/BankCard.png')}/>
              <Text style={{marginTop:5}}>银行卡</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableHighlight onPress={this.onPressSwitch.bind(this,'house')}
          underlayColor='transparent'>
          <View style={styles.bodyBottom}>
            <View style={styles.bodyBottomLeft}>
              <Image style={styles.bodyBottomLeftImg} source={require('../../imgs/houses.png')}/>
              <Text style={styles.bodyBottomLeftText}>我的房屋</Text>
            </View>
            <View style={styles.bodyBottomRight}>
              <Text style={styles.bodyBottomRightText}>2</Text>
              <Image style={styles.bodyBottomRightImg} source={require('../../imgs/JumpPage.png')}/>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onPressSwitch.bind(this,'authorize')}
          underlayColor='transparent'>
          <View style={[styles.bodyBottom,{marginTop:10}]}>
            <View style={styles.bodyBottomLeft}>
              <Image style={styles.bodyBottomLeftImg} source={require('../../imgs/authorize.png')}/>
              <Text style={styles.bodyBottomLeftText}>我的授信</Text>
            </View>
            <View style={styles.bodyBottomRight}>
              <Text style={styles.bodyBottomRightText}>500.0</Text>
              <Image style={styles.bodyBottomRightImg} source={require('../../imgs/JumpPage.png')}/>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onPressSwitch.bind(this,'verified')}
          underlayColor='transparent'>
          <View style={[styles.bodyBottom,{marginTop:10}]}>
            <View style={styles.bodyBottomLeft}>
              <Image style={styles.bodyBottomLeftImg} source={require('../../imgs/verified.png')}/>
              <Text style={styles.bodyBottomLeftText}>实名认证</Text>
            </View>
            <View style={styles.bodyBottomRight}>
              <Text style={styles.bodyBottomRightText}>已认证</Text>
              <Image style={styles.bodyBottomRightImg} source={require('../../imgs/JumpPage.png')}/>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#F0F0F0',
  },
  head:{
    backgroundColor:'#3DD1E0',
    paddingBottom:20,
    paddingTop:10,
  },
  headText:{
    color:'#FFFFFF',
    textAlign:'center',
    fontSize:17,
    fontWeight:'bold',
  },
  HeadView:{
    marginTop:25,
    justifyContent:'center',
    alignItems:'center',
  },
  headImageLine:{
    justifyContent:'center',
    alignItems:'center',
    height:80,
    width:80,
    borderRadius:50,
    borderWidth:2,
    borderColor:'#F5F5F5'
  },
  headImage:{
    position:'relative',
    borderRadius:50,
    height:70,
    width:70,
    borderWidth:4,
    alignSelf:'center',
  },
  headTelNick:{
    marginTop:10,
    flexDirection:'row',
    justifyContent:'center'
  },
  headTextTel:{
    color:'#FFFFFF'
  },
  headTextNick:{
    marginLeft:10,
    color:'#FFFFFF'
  },
  body:{
    flexDirection:'row',
    backgroundColor:'#FFFFFF',
    padding:10,
  },
  bodyLeft:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  bodyRight:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  bodyBottom:{
    marginTop:50,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#FFFFFF',
    alignItems:'center',
    padding:10,
  },
  bodyBottomLeft:{
    flexDirection:'row',
    alignItems:'center',
  },
  bodyBottomLeftImg:{
    marginLeft:10,
  },
  bodyBottomLeftText:{
    color:'#333333',
    fontSize:16,
    marginLeft:10,
  },
  bodyBottomRight:{
    flexDirection:'row',
    alignItems:'center'
  },
  bodyBottomRightImg:{
    marginRight:10,
  },
  bodyBottomRightText:{
    color:'#333333',
    fontSize:16,
    marginRight:10,
  }
});

module.exports = Mine_News;
