import  React,{ Component } from 'react';
import ReactNative,{
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default class Button extends Component {

  static propTypes = {
    Text:React.PropTypes.string,
    TextColor: React.PropTypes.string,
    BackgroundColor: React.PropTypes.string,
  }

  static defaultProps = {
    Text:'按钮',
    TextColor: 'white',
    BackgroundColor: 'blue',
  }
  constructor() {
    super();
    this.state = {
        disabled: false,
    }
  }

  onPress = ()=>{
    const {onPress} = this.props;
    onPress();
  };

  enable = ()=> {
    this.setState({disabled: false,});
  };

  disable = ()=> {
    this.setState({
        disabled: true,
    });
  };

  render() {
    const {text} = this.props;
    return (
      <TouchableOpacity
          onPress = {this.onPress}
          style={[styles.button, this.state.disabled&&styles.disabled]}>
          <Text style={styles.buttonTest}>{text}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
    button: {
        height: 40,
        width: 100,
        borderRadius: 20,
        margin:10,
        backgroundColor: "green",
        justifyContent: "center",
        overflow: "hidden",
    },
    buttonTest: {
        textAlign: "center",
        color: "white",
    },
    disabled: {
        backgroundColor: "gray"
    },
});
