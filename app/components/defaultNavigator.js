'use strict';
import {
    Navigator,
    BackAndroid
} from 'react-native';
import React from 'react';

class DefaultNavigator extends React.Component {
    render() {
        let defaultName = this.props.defaultName;
        let defaultComponent = this.props.defaultComponent;
        return (
            <Navigator
                style={styles.container}
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={() => {
                    return this.props.SceneConfigs?this.props.SceneConfigs:Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    if(route.component) {
                        return <Component {...route.params} navigator={navigator} onExistPress={this.props.onExistPress} {...this.props}/>
                    }
                  }}
               />
        );
    }
};
var styles = {
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
}
module.exports = DefaultNavigator;
