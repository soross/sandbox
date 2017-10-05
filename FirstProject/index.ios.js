/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  MapView,
  TextInput
} from 'react-native';

var MyComponente = React.createClass({
    getInitialState: function() {
      return {
        text: " "
      };
    },
    render: function() {
      return (
          <View style={styles.container}>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text} placeholder="Here the placeholder" autoFocus={true}
            />
            <Text style={styles.welcome}>
              {this.state.text}
            </Text>
          </View>
        );
    }
});

class FirstProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello to React Native!
        </Text>
        <View style={styles.container}>
          <MapView style={styles.map}>

          </MapView>
        </View>
        <MyComponente />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map: {
    height: 250,
    width: 250,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000000',
  }
});

AppRegistry.registerComponent('FirstProject', () => FirstProject);
