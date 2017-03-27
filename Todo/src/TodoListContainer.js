import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import TodoList from 'Todo/src/TodoList';

class TodoListContainer extends Component {

  constructor() {
    super();
    this.state = {
    todos: [
            {text: 'Learn react native'},
            {text: 'Make a to-do app'}
            ]
    };
  }

  render() {
    return (
            <View style={{flex: 1}}>
            <ScrollView
            style={styles.base}
            >
            <TodoList
            todos={this.state.todos} //TodoListのpropsにデータを渡す
            />
            </ScrollView>
            </View>
     );
  }
}
