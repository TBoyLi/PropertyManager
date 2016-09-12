import React from 'react';
import {
	View,
	Navigator,
	BackAndroid,
	Platform,
} from 'react-native';
import DefaultNavigator from '../components/defaultNavigator.js';
import Guide from './guide/guide.js';
export default class App extends React.Component {
	constructor(props){
		super(props);
	}

  render() {
		let defaultName = 'Guide';
		let defaultComponent = Guide;
      return (
				<Navigator
						style={styles.container}
						initialRoute={{ name: defaultName, component: defaultComponent }}
						configureScene={() => {
								return this.props.SceneConfigs?this.props.SceneConfigs:Navigator.SceneConfigs.PushFromRight;
						}}
						renderScene={(route, navigator) => {
							_navigator = navigator;
							let Component = route.component;
							if(route.component) {
									return <Component {...route.params} navigator={navigator} onExistPress={this.props.onExistPress} {...this.props}/>
							}
						}}/>
      	// <DefaultNavigator defaultName='Guide' defaultComponent={defaultComponent} {...this.props}/>
      );
  }
}
const styles = {
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
}
