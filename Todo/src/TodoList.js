import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import TodoListItem from 'Todo/src/TodoListItem';

class TodoList extends Component {

  constructor(props) {
    super(props);

    //ListViewで扱うデータ形式にする
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource.cloneWithRows(this.props.todos)}
        renderRow={(todo) => <TodoListItem {...todo} />}
        renderSeparator={this.renderSeparator}
      />
    );
  }
}
