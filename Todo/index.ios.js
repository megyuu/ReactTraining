/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ListView
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
  constructor(props) {
    super(props);
  //  this.state = {text: ''};
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      text: '',
      todo: [],
      dataSource: ds.cloneWithRows(['']), //hoge', 'hogehoge
    };

    // this.dataSource = new ListView.DataSource({
    // rowHasChanged: (row1, row2) => row1 !== row2
    // });

  }


  addItem(item) {
    this.state.todo = this.state.todo.concat(this.state.text);
    // const newArray = this.state.dataSource.slice(); // ここ注目。シャローコピーしている
    // newArray.push(this.state.text);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.state.todo),
    });
    // this.todos = newArray;
  }


  // addTodo(text) {
  //   this.setState({
  //     todos: this.state.dataSource.concat([{text: text}])
  //   });
  // }
  // onAddPress() {
  //   // TodoListContainerのaddTodoメソッドにtextを渡して実行
  //   this.props.addTodo(this.state.text);
  //
  //   // Todo追加後はTextInputを空にする
  //   this.setState({
  //     text: ''
  //   });
  // }



  _onChangeText(text) {
   this.setState({ text: text });
  }

  renderRow(data) {
    return (
       <View style={{ padding: 10, backgroundColor: 'white', margin: 5 }}>
         <Text>{data.name}</Text>
       </View>
     )
   }



  render() {
    return (

            <View style={{flex: 1}}>

            <View style={{flex: 1, backgroundColor: '#e6e6fa'}}>
              <Text style={{padding: 20, fontSize: 30, color: '#F5FCFF'}}>TODOリスト</Text>
            </View>
            <View style={{flex: 2, backgroundColor: 'skyblue'}}>
              <TextInput
              style={{height: 40}}
              placeholder="テキスト入力してみよう"
              onChangeText={(text) => this.setState({text})}
              />
              <Text style={{padding: 10, fontSize: 42}}>
                {this.state.text.split(' ').map((word) => word && '😎').join(' ')}
                {this.state.text}
                </Text>
            </View>

            <View style={{flex: 3, backgroundColor: '#ffc0cb'}}>
              <Text style={{padding: 10, fontSize: 42}}>
                {this.state.text}
              </Text>

              <TextInput
               style={styles.textform}
               onChangeText={this._onChangeText.bind(this)}
               />
               <TouchableHighlight　onPress={this.addItem.bind(this)}>
                 <Text style={styles.button}>
                   追加
                 </Text>
               </TouchableHighlight>
                <ListView
                    dataSource={this.state.dataSource}
                  renderRow={(rowData) => <TouchableHighlight onPress={this.addItem.bind(this)}><Text>{rowData}</Text></TouchableHighlight>}
                />
            </View>


            <TouchableHighlight onPress={this._onPressButton}>
            <Text>Button</Text>
            </TouchableHighlight>

            <Greeting name='Rexxar' />
            <Greeting name='Jaina' />
            <Greeting name='Valeera' />
            </View>
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
