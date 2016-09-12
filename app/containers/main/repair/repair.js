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
    TextInput,
    ListView,
    TouchableOpacity,
    Dimensions,
    Platform
}  from 'react-native';
import React  from 'react';
import HeadView from '../../../components/HeadView.js';
import RepairImgs from './repairImgs.js';
import RepairSuccess from './repairSuccess.js';
var {height,width} = Dimensions.get('window');
var ImagePicker = require('react-native-image-picker');

var ds;
var imgs = [];
class Repair extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state =  {
          avatarSource:[],
          isEnough:false,
          dataSource: ds.cloneWithRows(imgs)
        };
    }
    onLeftPress(){
        this.props.navigator.pop();
    }
    render() {
        return (
            <View style={styles.container}>
              <HeadView title='报修'
                leftText='返回'
                leftImg= {require('../../../imgs/back.png')}
                rightText='收藏'
                onLeftPress={this.onLeftPress.bind(this)}
                leftButton={true}
                rightButton={false}
                navigator={this.props.navigator} />
              <View style={styles.body}>
                  <View style={styles.item}>
                    <Text style={styles.text}>维修地址</Text>
                    <TextInput style={styles.input}
                      underlineColorAndroid='transparent'
                      placeholder='请输入维修地址'
                      keyboardType='default'/>
                  </View>
                  <View style={{height:1,backgroundColor:'#F0F0F0',marginLeft:30}}/>
                  <View style={styles.item}>
                    <Text style={styles.text}>维修时间</Text>
                    <TextInput style={styles.input}
                      underlineColorAndroid='transparent'
                      placeholder='请输入维修时间'
                      keyboardType='numeric'/>
                  </View>
                  <View style={{height:1,backgroundColor:'#F0F0F0',marginLeft:30}}/>
                    <View style={styles.item}>
                      <Text style={styles.text}>联系电话</Text>
                      <TextInput style={styles.input}
                        underlineColorAndroid='transparent'
                        placeholder='请输入联系电话'
                        keyboardType='numeric'/>
                    </View>
                </View>
                <View style={styles.center}>
                  <Text>详情描述 (最多三张图片)</Text>
                  <ListView
                    dataSource={this.state.dataSource}
                    contentContainerStyle={styles.list}
                    enableEmptySections={true}
                    renderRow={this._renderRow.bind(this)}
                    renderFooter={()=>{
                      if (this.state.isEnough) {
                        return null;
                      }else {
                        return(
                          <TouchableOpacity onPress={this.selectPhoto.bind(this)}>
                            <Image style={styles.imgadd}
                              resizeMode='cover' source={require('../../../imgs/plus2.png')}/>
                          </TouchableOpacity>
                        )
                      }
                    }}/>
                </View>
                <View style={styles.foot}>
                  <TouchableOpacity onPress={this.submit.bind(this)}>
                      <View style={styles.submitBtn}>
                          <Text style={styles.submitText}>提交申请</Text>
                      </View>
                  </TouchableOpacity>
                </View>
            </View>
        );
    }
    _renderRow(data:{}, sectionID: number, rowID: number){
      return(
        <View style={styles.row}>
          <TouchableOpacity onPress={this.itemSelect.bind(this,data,sectionID,rowID)}
            style={styles.imagePosition}>
            <Image style={styles.image} source={data.imgs}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.itemDelete.bind(this,data,sectionID,rowID)}
            style={styles.imageDeletePosition}>
            <Image style={styles.imageDelete} source={require('../../../imgs/delet.png')}/>
          </TouchableOpacity>
        </View>
      )
    }
    itemDelete(data:{}, sectionID: number, rowID: number){
      imgs.splice(rowID,1);
      this.setState({
        isEnough:false,
        dataSource: ds.cloneWithRows(imgs)
      });
    }
    itemSelect(){
      this.props.navigator.push({
        name:'RepairImgs',
        component:RepairImgs,
        params:{
          THUMB_URLS:imgs
        }
      });
    }
    submit(){
      imgs = [];
      this.props.navigator.push({
        name:'RepairSuccess',
        component:RepairSuccess
      });
    }
    selectPhoto(){
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
          let i = 1;
          console.log('source',source);
          imgs.push({imgs:source});
          if (imgs.length == 3) {
            this.setState({
              isEnough: true,
            });
          }
          this.setState({
            dataSource: ds.cloneWithRows(imgs),
          });
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
      marginTop:5,
      paddingBottom:10,
      backgroundColor:'#FFFFFF',
    },
    item:{
      flexDirection:'row',
      marginTop:10,
      paddingLeft:10,
      backgroundColor:'#FFFFFF',
      alignItems:'center'
    },
    text:{
      flex:1,
      marginLeft:20
    },
    input:{
      flex:2,
      height: 40,
      borderColor: 'transparent',
      borderWidth: 0,
    },
    center:{
      marginTop:20,
      backgroundColor:'#FFFFFF',
      padding:30,
    },
    list: {
      marginBottom: 5,
      marginRight: 5,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    row: {
      width: (width - 25) / 4,
      height: (width - 25) / 4,
      backgroundColor: '#FFFFFF',
      marginLeft: 5,
      marginTop: 5,
      position:'relative',
      padding:5
    },
    image: {
      width: (width - 25) / 4 - 2,
      height: (width - 25) / 4 - 2,
      borderWidth: 1,
      borderRadius: 1,
      borderColor: '#CCC',
    },
    imagePosition:{

    },
    imageDeletePosition:{
      position:'absolute',
      left:-1,
      top:-1,
    },
    imageDelete:{
      height:20,
      width:20,
    },
    imgadd:{
      marginLeft:5,
      marginTop:10,
      width: (width - 25) / 4-5,
      height: (width - 25) / 4-5,
      backgroundColor: '#F6F6F6',
      borderWidth: 1,
      borderRadius: 1,
      borderColor: '#CCC',
    },
    foot:{
      paddingLeft:30,
      paddingRight:30,
      marginTop:65,
    },
    submitBtn:{
      flex:1,
      backgroundColor:'#3DD1E0',
      height:44,
      borderRadius:6,
      justifyContent:'center',
      alignItems:'center'
    },
    submitText:{
      color:'#FFF',
      fontSize:17,
      alignSelf:'center'
    },
};

module.exports = Repair;
