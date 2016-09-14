PropertyManager

React Native开发物业管理客户端

一.依赖组件

  1.fetch-http-client
  
  2.react-native-barcodescanner
  
  3.react-native-busy-indicator
  
  4.react-native-checkbox
  
  5.react-native-communications
  
  6.react-native-encryption-library
  
  7.react-native-image-crop-picker,
  
  8.react-native-image-picker
  
  9.react-native-maps
  
  10.react-native-root-toast
  
  11.react-native-scrollable-tab-view
  
  12.react-native-tab-navigator
  
  13.react-native-update
  
  14.react-redux
  
  15.redux
  
  16.redux-thunk

二.安装配置

  1.第一步
  
    git@github.com:TBoyLi/PropertyManager.git
  2.第二步
  
    cd PropertyManager
  3.第三步
  
    npm install
  4.第四步

    1.运行Android版本
      Mac OS X:react-native run-android  or Windows OS:react-native start and react-native run-android
    2.运行iOS版本
      IOS目测部分还没适配，后面更新适配
      Mac OS X:react-native run-ios or  xcode open project and run project

四.运行效果
  

五.打包方法

  一.Android版本

  1.签名key以及release签名信息已配置
  2.cd PropertyManager
  3.cd android && ./gradlew assembleRelease
  4.上述命令执行完毕,在android/app/build/outputs/apk目录下面生成app-release.apk
