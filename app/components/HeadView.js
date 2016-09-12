'use strict';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    BackAndroid,
    TouchableHighlight,
    Image
} from 'react-native';
import React from 'react';

var navigator;
class HeadView extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        this.state = {
            tabIndex:0,
        }
        navigator = this.props.navigator;
    }
    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress',function(){
            navigator.pop();
            return true;
        });
    }
    render(){
        let component = null;
        if(this.props.leftButton && this.props.rightButton){
            let leftComponent;
            let rightComponent;
            if(!this.props.leftImg){
                leftComponent = <TouchableHighlight
                    underlayColor='#FFFFFF'
                    style={styles.touchableHighlight} onPress={this.props.onLeftPress}>
                        <Text  style={styles.buttonText} >
                            {this.props.leftText}
                        </Text>
                </TouchableHighlight>;
            }else{
                leftComponent = <TouchableHighlight
                    underlayColor='#FFFFFF'
                    style={styles.touchableHighlight} onPress={this.props.onLeftPress}>
                    <Image style={styles.imgBack} source={this.props.leftImg}>
                    </Image>
                </TouchableHighlight>;
            }
            if(!this.props.rightImg){
                rightComponent = <TouchableHighlight
                    underlayColor='#FFFFFF'
                    style={styles.touchableHighlight} onPress={this.props.onRightPress}>
                        <Text  style={styles.buttonText} >
                            {this.props.rightText}
                        </Text>
                </TouchableHighlight>;
            }else{
                rightComponent = <TouchableHighlight
                    underlayColor='#FFFFFF'
                    style={styles.touchableHighlight} onPress={this.props.onRightPress}>
                    <Image style={styles.imgBack} source={this.props.rightImg}>
                    </Image>
                </TouchableHighlight>;
            }
            component =
                <View style={{flexDirection:'column'}}>
                  <View style={styles.titleContainer}>
                      {leftComponent}
                      <Text  style={styles.titleText}>
                          {this.props.title}
                      </Text>
                      {rightComponent}
                  </View>
                  <View />
                </View>
        }else if(this.props.leftButton && !this.props.rightButton){
            let leftComponent;

            if(!this.props.leftImg){
                leftComponent = <TouchableHighlight
                    underlayColor='#FFFFFF'
                    style={styles.touchableHighlight} onPress={this.props.onLeftPress}>
                    <Text  style={styles.buttonText} >
                        {this.props.leftText}
                    </Text>
                </TouchableHighlight>;
            }else{
                leftComponent = <TouchableHighlight
                    underlayColor='#FFFFFF'
                    style={styles.touchableHighlight} onPress={this.props.onLeftPress}>
                    <Image style={styles.imgBack} source={this.props.leftImg}>
                    </Image>
                </TouchableHighlight>;
            }
            component =
                <View style={styles.titleContainer}>
                    {leftComponent}
                    <Text  style={styles.titleText} >
                        {this.props.title}
                    </Text>
                    <TouchableHighlight
                        underlayColor='#FFFFFF'
                        style={styles.touchableHighlight}>
                        <Text  style={styles.buttonText}>
                        </Text>
                    </TouchableHighlight>
                </View>
        }else if(!this.props.leftButton && this.props.rightButton){
            component =
                <View style={styles.titleContainer}>
                    <TouchableHighlight
                        underlayColor='#FFFFFF'
                        style={styles.touchableHighlight}>
                        <Text  style={styles.buttonText}>
                        </Text>
                    </TouchableHighlight>
                    <Text  style={styles.titleText}>
                        {this.props.title}
                    </Text>
                    <TouchableHighlight
                        underlayColor='#FFFFFF'
                        style={styles.touchableHighlight} onPress={this.props.onRightPress}>
                        <Text  style={styles.buttonText}>
                            {this.props.rightText}
                        </Text>
                    </TouchableHighlight>
                </View>
        }else{
            component =
                <View style={styles.titleContainer}>
                    <Text  style={styles.buttonText}>
                    </Text>
                    <Text  style={styles.titleText}>
                        {this.props.title}
                    </Text>
                    <Text  style={styles.buttonText}>
                    </Text>
                </View>
        }
        return component;
    }
};

const styles = StyleSheet.create({
    titleContainer:{
        flexDirection:'row',
        height: Platform.OS === 'ios' ? 64 : 48,
        paddingTop:Platform.OS === 'ios' ? 20 : 0,
        backgroundColor:'#FFFFFF',
        justifyContent:'space-between',
    },
    imgBack:{
        resizeMode:'contain',
        alignSelf:'center',
        // marginRight:10,
    },
    buttonText:{
        width: Platform.OS === 'ios' ? 64 : 48,
        fontSize:16,
        marginLeft:10,
        marginRight:10,
        color:'#3DD1E0',
    },
    titleText:{
        alignSelf:'center',
        fontSize:17,
        fontWeight:'bold',
        color:'#3DD1E0'
    },
    touchableHighlight:{
        width: Platform.OS === 'ios' ? 64 : 48,
        height: Platform.OS === 'ios' ? 44 : 48,
        alignSelf:'center',
        justifyContent:'center'
    },
});

module.exports = HeadView;
