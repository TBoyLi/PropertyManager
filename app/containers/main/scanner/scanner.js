import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Vibration,
  View,
  TouchableHighlight,
  Platform,
  Image,
  Dimensions
} from 'react-native';
import BarcodeScanner from 'react-native-barcodescanner';
const {height,width} = Dimensions.get('window');

class Scanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barcode: '',
      cameraType: 'back',
      text: 'Scan Barcode',
      torchMode: 'off',
      type: '',
    };
  }

  barcodeReceived(e) {
    if (e.data !== this.state.barcode || e.type !== this.state.type) Vibration.vibrate();

    this.setState({
      barcode: e.data,
      text: `${e.data} (${e.type})`,
      type: e.type,
    });

    alert('type:'+ e.type + '\n' + 'barcode:' + e.data);
  }

  render() {
    return (
      <View style={styles.container}>
        <BarcodeScanner
          onBarCodeRead={this.barcodeReceived.bind(this)}
          style={{ flex: 1 }}
          torchMode={this.state.torchMode}
          cameraType={this.state.cameraType}/>
        <View style={styles.head}>
          <TouchableHighlight underlayColor='transparent'
            style={styles.touchableHighlight}
            onPress={()=>{this.props.navigator.pop()}}>
            <View style={{flexDirection:'row'}}>
              <Image style={styles.imgBack} source={require('../../../imgs/back.png')}/>
              <Text style={styles.headText}>扫一扫</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'relative',
  },
  touchableHighlight:{
    height: Platform.OS === 'ios' ? 44 : 48,
    alignSelf:'center',
    justifyContent:'center',
    marginLeft:10,
  },
  imgBack:{
    resizeMode:'contain',
    alignSelf:'center',
  },
  head:{
    flexDirection:'row',
    height: Platform.OS === 'ios' ? 64 : 48,
    width:width,
    paddingTop:Platform.OS === 'ios' ? 20 : 0,
    backgroundColor:'transparent',
    justifyContent:'space-between',
    alignItems:'center',
    position:'absolute',
    left:0,
    top:0,
  },
  headText:{
    color:'#3DD1E0',
    fontSize:20,
    marginLeft:10,
  }
});
module.exports = Scanner;
