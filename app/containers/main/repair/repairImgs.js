'use strict'
import  React,{ Component } from 'react';
import ReactNative, {
    View,
    Text,
    Image,
    TouchableNativeFeedback, // 触碰响应
    TouchableOpacity, // 触碰更换透明度的属性
    ViewPagerAndroid, // Android的ViewPager
    Dimensions,
    BackAndroid,
    StyleSheet
} from 'react-native';

// Styles
const dimensions = Dimensions.get('window');
var PAGES = 0; // 页数

/**
 * 按钮: 添加点击状态(enabled)和文本(text)
 * @param  {enabled:点击状态} {text:显示文本} {onPress:点击事件}
 * @return {TouchableNativeFeedback} [触摸反馈的视图]
 */
var Button = React.createClass({
    _handlePress: function () {
        if (this.props.enabled && this.props.onPress) {
            this.props.onPress();
        }
    },

    render: function () {
        return (
            <TouchableNativeFeedback onPress={this._handlePress}>
                <View style={[styles.button, this.props.enabled ? {} : styles.buttonDisabled]}>
                    <Text style={styles.buttonText}>
                        {this.props.text}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
});

/**
 * 滚动条, fractionalPosition滚动条长度, progressBarSize当前大小
 * @param  {size:滚动条大小} {progress:过程}
 * @return {View}   [里外两层视图, 背景白框黑底, 显示白框]
 */
var ProgressBar = React.createClass({
    render: function () {
        var fractionalPosition = (this.props.progress.position + this.props.progress.offset);
        var progressBarSize = (fractionalPosition / (PAGES - 1)) * this.props.size;
        return (
            <View style={[styles.progressBarContainer, {width: this.props.size}]}>
                <View style={[styles.progressBar, {width: progressBarSize}]}/>
            </View>
        );
    }
});


var RepairImgs = React.createClass({

    /**
     * 初始化状态
     * @return {状态} [页面]
     */
    getInitialState: function () {
        return {
            page: 0, // 当前位置
            initialPage: 0,
            THUMB_URLS: [],
            progress: { // Progress位置
                position: 0,
                offset: 0,
            }
        };
    },

    componentDidMount: function () {
        const navigator = this.props.navigator;
        BackAndroid.addEventListener('hardwareBackPress', function () {
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                navigator.pop();
                return true;
            }
            return false;
        });
    },

    // 页面选择
    onPageSelected: function (e) {
        this.setState({page: e.nativeEvent.position});
    },

    // 页面滚动
    onPageScroll: function (e) {
        this.setState({progress: e.nativeEvent});
    },

    // 移动页面
    move: function (delta) {
        var page = this.state.page + delta;
        this.go(page);
    },

    // 跳转页面
    go: function (page) {
        this.viewPage.setPage(page);
        this.setState({page});
    },

    render: function () {
        console.log('THUMB_URLS----',this.props.THUMB_URLS);
        PAGES = this.props.THUMB_URLS.length;

        var pages = [];

        for (var i = 0; i < PAGES; i++) {
            // 背景
            var pageStyle = {
                alignItems: 'center',
                padding: 0,
            }

            pages.push(
                <View
                    key={i}
                    style={pageStyle}
                    collapsable={false}>
                    <Image
                        style={styles.iamge}
                        resizeMode={'cover'}
                        source={this.props.THUMB_URLS[i%PAGES].imgs}
                    />
                </View>
            );
        }
        var {page} = this.state;
        return (
            <View style={styles.container}>
                <ViewPagerAndroid
                    style={styles.viewPager}
                    initialPage={this.props.initialPage}
                    onPageScroll={this.onPageScroll}
                    onPageSelected={this.onPageSelected}
                    ref={viewPager => {this.viewPage = viewPager;}}>
                    {pages}
                </ViewPagerAndroid>
                <TouchableOpacity style={styles.back}
                  onPress={()=>{
                    this.props.navigator.pop();
                  }}>
                  <Image source={require('../../../imgs/back.png')} style={styles.backImage}/>
                </TouchableOpacity>
                {/* <View style={styles.buttons}>
                    <Button
                        text="首页"
                        enabled={page > 0}
                        onPress={() => this.go(0)}/>
                    <Button
                        text="上一页"
                        enabled={page > 0}
                        onPress={() => this.move(-1)}/>
                    <Text style={styles.buttonText}>
                        页 {page + 1} / {PAGES}
                    </Text>
                    //进度条
                    <ProgressBar
                        size={80}
                        progress={this.state.progress}/>
                    <Button
                        text="下一页"
                        enabled={page < PAGES - 1}
                        onPress={() => this.move(1)}/>
                    <Button
                        text="尾页"
                        enabled={page < PAGES - 1}
                        onPress={() => this.go(PAGES -1)}/>
                </View> */}
            </View>
        );
    },
});

const styles = StyleSheet.create({
  back:{
    position:'absolute',
    left:20,
    top:20,
    height:30,
    width:30,
    backgroundColor:'#FFFFFF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30
  },
  backImage:{
    marginRight:4,
  },
  iamge: {
    width: dimensions.width,
    flex: 1,
    padding: 5,
  },
  buttons: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  // 按钮可点击状态
  button: {
    flex: 1,
    width: 0,
    margin: 2,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'gray',
  },

  // 按钮非点击装
  buttonDisabled: {
    backgroundColor: 'black',
    opacity: 0.5,
  },

  buttonText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },

  // 文字显示
  nameText: {
    fontSize: 16,
    margin: 4,
    color: 'white',
    textAlign: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    position:'relative'
  },

  image: {
    flex: 1,
    width: 300,
    padding: 20,
  },

  likeButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderColor: '#333333',
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
    margin: 8,
    padding: 8,
  },

  likeContainer: {
    flexDirection: 'row',
  },

  likesText: {
    flex: 1,
    fontSize: 18,
    alignSelf: 'center',
  },

  progressBarContainer: {
    height: 10,
    margin: 5,
    borderColor: '#eeeeee',
    borderWidth: 2,
  },

  progressBar: {
    alignSelf: 'flex-start',
    flex: 1,
    backgroundColor: '#eeeeee',
  },

  viewPager: {
    flex: 1,
  },
});

module.exports = RepairImgs;
