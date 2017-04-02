/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  MapView
} from 'react-native';


class SecondTab extends Component {

  render() {
    return (
      <MapView
        style={{height: 400, margin: 40}}
        showsUserLocation={true}
        // mapType='satellite'
      />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 15,
    backgroundColor: '#FFFFFF'
  }
});

// AppRegistry.registerComponent('Todo', () => Todo);
module.exports = SecondTab;
