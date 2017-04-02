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
} from 'react-native';


class ThirdTab extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>This is ThirdTab !!</Text>
      </View>
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

module.exports = ThirdTab;
