import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

class TodoListContainer extends Component {

  render() {
    return (
      <View style={styles.todo}>
        <Text style={[styles.text, this.state.isChecked ? styles.isTextDisabled : null]}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}
