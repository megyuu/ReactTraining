/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

// タブ
var FirstTab = require('./FirstTab.js');
var SecondTab = require('./SecondTab.js');
var ThirdTab = require('./ThirdTab.js');

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAq9JREFUeJzt3E+ITlEYx/GvfyWZBSYsaJJItjZKlLGbJaUsKAtbVoSsFFEWbC2tyETKUv4kEZIsFNKMjVkxmY0aExZ3MRvezpzn3O47c76furvz3OfUfabp3vfeH0iSJEmSJEmSJEmSJEmSJEmSpNoNAmeBF8AUMANMAPeAg8CS7ramth0FfgB/ehxvgG1dbVD/tyhYfwa4mLh2EhgG3ias3QVszN1UZW521XiE3n/1/zrGgYGEc49mnLvWI2RxoO5qRt0QcDKzp1qQOwDDwJbM2mPE//WokMgA5FoPbA/Uq6DcARgK9t0UrFchuQOgBSJ3AMaDfceC9SokdwAeBnpOAO8D9SoodwAeAR8ya69T4P5VZeQOwG/gBHO/kGPAlcyeakH0fvwUcDlx7XdgL/AuYe1OYEPupioz2vUGDtM85+/1uPIVsLWrDap9q4HTwDOaXwZ/AV+BO8ABvN2UJEmSJEmSJEmSJEmad8wHqJj5APOY+QDzn/kAlR8h5gNUznyAypkPUDnzASrnBxuVMx+gcuYDVM58gMqZD1A58wHmP/MB1D3zASRJkiRJkiRJkiRJkvpEG9/tr6LJC5imyQlQBQaBS8AXZl8DmwGeA0fwjaC+VeIjzX3ALWBNjzVPaF4N+5Z4TvMB0nWWDwDN27s/SfuO/TWwPPG85gP0eT4AwDLgBukXdQdwLtBPLYgMwH7mnhFwHFgR6KnCIgMwklEzAOwO9FRhkQHYnFmXmyyiFnh7VrnIAHzOrPsY6KnCIgNwP6NmCnga6KnCIgNwl7lnBFyjeW6gPhEZgBmaL4NTL+hL4EKgn1pQ4lHwHuA2sLbHmgc0odGTiec0HyBd5/kA0PwCeB74xOwjymngMXAIgyGrshJYByzteiOSJEmSJEmSJEmSJEmSJEmSJEkL2V9B+I2vt8MIRgAAAABJRU5ErkJggg==';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ListView,
  Button,
  TabBarIOS
  // TabBarIOS.Item,
} from 'react-native';

var data = [
  // react native doc
  "ActivityIndicatorIOS",
  "DatePickerIOS",
  "DrawerLayoutAndroid ",
      // 割愛
]

class Greeting extends Component {
  render() {
    return (
            <Text>Hello {this.props.name}!</Text>
            );
  }
}

export default class Todo extends Component {
  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBarExample';


  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'FirstTab',
    };

  }


  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'FirstTab'}
          icon={{uri: base64Icon, scale: 3}}
          onPress={() => {
            this.setState(
              {selectedTab: 'FirstTab'}
            );
          }}
          title='todo'
        >
        <FirstTab />
        </TabBarIOS.Item>
        <TabBarIOS.Item
            selected={this.state.selectedTab === 'SecondTab'}
            // icon={{uri: 'search'}}
            systemIcon='featured'

            onPress={() => {
              this.setState(
                {selectedTab: 'SecondTab'}
              );
            }}
          >
          <SecondTab />
        </TabBarIOS.Item>
        <TabBarIOS.Item
            selected={this.state.selectedTab === 'ThirdTab'}
            // icon={{uri: 'search'}}
            systemIcon='more'

            onPress={() => {
              this.setState(
                {selectedTab: 'ThirdTab'}
              );
            }}
          >
          <ThirdTab />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}


const styles = StyleSheet.create({
                                 container: {
                                 flex: 1,
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
                                 textform: {
                                  margin: 20,
                                  padding: 10,
                                  height: 30,
                                  borderColor: 'gray',
                                  borderWidth: 2,
                                  backgroundColor: 'white',
                                },
                                button: {
                                  color: 'orange',
                                  height: 30,
                                  width: 80,
                                  padding: 10,
                                  margin: 10,
                                  textAlign: 'center',
                                  borderColor: 'orange',
                                  borderWidth: 2,
                                  alignSelf: 'flex-end',
                                }
                                 });

AppRegistry.registerComponent('Todo', () => Todo);
