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
    Image,
    TextInput,
    TouchableOpacity,
    Modal,
    Dimensions
}  from 'react-native';
import React  from 'react';
import CheckBox from 'react-native-checkbox';
import {ToastLong} from '../../../util/ToastUtils.js';
import HeadView from '../../../components/HeadView.js';
import PayWater from './payWater.js';

class Water extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        this.state =  {
          checkbox:false,
          account:void 0,
          modalVisible:false
        };
    }
    onLeftPress(){
        this.props.navigator.pop();
    }
    _setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }
    _submit(){
      let account = this.state.account;
      if (this.state.checkbox) {
        if (account) {
          this.props.navigator.push({
            component:PayWater,
            name:'PayWater',
            params:{
              account:this.state.account
            }
          });
        }else {
          this.setState({modalVisible: true});
          // ToastLong('请输入水表户号……','bottom');
        }
      }
    }
    render() {
      let visible = this.state.modalVisible;
        return (
            <View style={styles.container}>
              <HeadView title='水费缴费'
                leftText='返回'
                leftImg= {require('../../../imgs/back.png')}
                rightText='收藏'
                onLeftPress={this.onLeftPress.bind(this)}
                leftButton={true}
                rightButton={false}
                navigator={this.props.navigator} />
              <View style={styles.head}>
                <View style={styles.headName}>
                  <Image source={require('../../../imgs/Water.png')}/>
                  <Text style={styles.headNameText}>水费</Text>
                </View>
                <View style={{height:1,backgroundColor:'#F0F0F0',marginLeft:20}}/>
                <View style={styles.headBottom}>
                  <Text style={styles.headBottomText}>水表户号</Text>
                  <TextInput style={styles.headBottomInput}
                    underlineColorAndroid='transparent'
                    placeholder='查看纸质账单'
                    keyboardType='numeric'
                    onChangeText={(text)=>{
                      this.setState({
                        account:text
                      })
                    }}/>
                </View>
              </View>
              <View style={styles.checkbox}>
                <CheckBox
                  label='同意《xxx自助缴费服务协议》'
                  checked={this.state.checkbox}
                  underlayColor='transparent'
                  onChange={(checked) => {
                    this.setState({
                      checkbox:checked
                    });
                  }}/>
              </View>
              <View style={styles.foot}>
                <TouchableOpacity onPress={this._submit.bind(this)}>
                    <View style={styles.submitBtn}>
                        <Text style={styles.submitText}>下一步</Text>
                    </View>
                </TouchableOpacity>
              </View>
              <Modal
                visible={visible}
                transparent={true}
                animationType='none'
                onRequestClose={this._setModalVisible.bind(this,false)}>
                {visible ?
                  <TouchableOpacity
                    key={'spinner'}
                    onPress={this._setModalVisible.bind(this,false)}
                    style={styles.modalContainer}>
                    <View style={[styles.modalBackground]}>
                      <View style={styles.modalLoading}>
                        <Text>提示</Text>
                        <Text style={styles.loadingText}>请输入水表户号</Text>
                        <TouchableOpacity onPress={this._setModalVisible.bind(this,false)}>
                          <Text>OK</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity> :
                  <TouchableOpacity key={'spinner'} />}
              </Modal>
            </View>
        );
    }

};

var styles = {
    modalContainer:{
      flex: 1,
      backgroundColor: 'transparent',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    modalBackground:{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalLoading:{
      alignItems: 'center',
      justifyContent: 'center',
      width: Dimensions.get('window').width / 2,
      height: Dimensions.get('window').width / 2.5,
      borderRadius: 10,
      backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    loadingText:{
      marginTop: 10,
      textAlign: 'center',
      color: '#3DD1E0'
    },
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0'
    },
    head:{
      backgroundColor:'#FFFFFF',
      marginTop:5
    },
    headName:{
      flexDirection:'row',
      alignItems:'center',
      padding:10,
      marginLeft:10
    },
    headNameText:{
      marginLeft:10,
      color:'#333333',
      fontSize:16
    },
    headBottom:{
      flexDirection:'row',
      alignItems:'center',
      marginLeft:20
    },
    headBottomText:{
      color:'#333333',
      fontSize:16
    },
    headBottomInput:{
      marginLeft:10,
      flex:1,
      fontSize:16
    },
    checkbox:{
      flexDirection:'row',
      marginLeft:20,
      marginTop:10,
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

module.exports = Water;
