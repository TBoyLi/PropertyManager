import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
var IMAGESELECT = [
  require('../imgs/homeClick.png'),
  require('../imgs/serviceClick.png'),
  require('../imgs/messageClick.png'),
  require('../imgs/meClick.png'),
];
var IMAGE = [
  require('../imgs/home.png'),
  require('../imgs/service.png'),
  require('../imgs/message.png'),
  require('../imgs/me.png'),
];
const CustomTabBar = React.createClass({
  tabIcons: [],

  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
  },

  componentDidMount() {
    this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
  },

  setAnimationValue({
    value,
  }) {
    this.tabIcons.forEach((icon, i) => {
      const progress = (value - i >= 0 && value - i <= 1) ? value - i : 1;
      icon.setNativeProps({
        style: {
          color: this.iconColor(progress),
        },
      });
    });
  },

  //color between rgb(59,89,152) and rgb(204,204,204)
  //#FFFFFF rgb(255,255,255)  #3DD1E0 rgb(61,209,224)
  iconColor(progress) {
    const red = 59 + (204 - 59) * progress;
    const green = 89 + (204 - 89) * progress;
    const blue = 152 + (204 - 152) * progress;
    return `rgb(${red}, ${green}, ${blue})`;
  },

  render() {
    return <View style={[styles.tabs, this.props.style, ]}>
      {this.props.tabs.map((tab, i) => {
        return <TouchableHighlight key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab} underlayColor='transparent'>
          <View style={styles.item}>
            <View style={{flex:1, height:1, backgroundColor:'#fac'}}/>
            <Image source={this.props.activeTab === i ? IMAGESELECT[i] : IMAGE[i]}/>
            {/* <Icon
              name={tab}
              size={30}
              color={this.props.activeTab === i ? 'rgb(59,89,152)' : 'rgb(204,204,204)'}
              ref={(icon) => { this.tabIcons[i] = icon; }}/> */}
            <Text style={[styles.itemText, {color:this.props.activeTab === i ? '#3DD1E0' : '#AAAAAA'}]}>{tab}</Text>
          </View>
        </TouchableHighlight>;
      })}
    </View>;
  },
});

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    height: 49,
    flexDirection: 'row',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  item:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    opacity:1
  },
  itemText:{
    fontSize:11
  }
});

export default CustomTabBar;
