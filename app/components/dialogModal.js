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
    TouchableOpacity,
    Image,
    Dimensions,
    Modal,
    ActivityIndicator
}  from 'react-native';
import React  from 'react';

class DialogModal extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        this.state =  {
          visible:false,
          content:'',
        };
    }
    componentDidMount(){
      this.setState({
        visible:this.props.visible,
        content:this.props.content,
      });
    }
    dismissModal(){
      this.setState({
        visible:false
      });
    }
    render() {
        return (
          <Modal
            visible={this.state.visible}
            transparent={true}
            animationType='slide'
            onRequestClose={()=>{console.log('onRequestClose')}}>
            <TouchableOpacity
              onPress={this.dismissModal.bind(this)}
              style={styles.container}>
              <View style={[styles.background]}>
                <View style={styles.loading}>
                  <ActivityIndicator
                    size='small'
                    color='red'/>
                  <Text style={styles.loadingText}>{this.state.content}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Modal>
        );
    }

};

var styles = {
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 2.5,
    height: Dimensions.get('window').width / 2.5,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.25)'
  },
  loadingText: {
    marginTop: 10,
    textAlign: 'center',
    color: '#fcfcfc'
  }
};

module.exports = DialogModal;
