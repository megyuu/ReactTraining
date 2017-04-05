/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
// import CheckBox from 'react-native-checkbox';
import CheckBox from 'react-native-check-box';
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
  TabBarIOS,
  ScrollView
} from 'react-native';

var data = [
  "ActivityIndicatorIOS",
  "DatePickerIOS",
  "DrawerLayoutAndroid ",
]

class Greeting extends Component {
  render() {
    return (
            <Text>Hello {this.props.name}!</Text>
            );
  }
}



class FirstTab extends Component {

  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBarExample';


  constructor(props) {
    super(props);
  //  this.state = {text: ''};
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      selectedTab: 'FirstTab',
      text: '',
      todo: [],
      count: 1,
      dataSource: ds.cloneWithRows([]), //'hoge', 'hogehoge'
    };

    // this.dataSource = new ListView.DataSource({
    // rowHasChanged: (row1, row2) => row1 !== row2
    // });

  }


  addItem(item) {
    this.state.todo = this.state.todo.concat({id: this.state.count, value: this.state.text, isChecked: true});
    this.state.count = this.state.count + 1;
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.state.todo, ),
    });
  }

  onClick(data) {

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

        <View style={{backgroundColor: '#e6e6fa'}}>
          <Text style={{padding: 20, fontSize: 30, color: '#F5FCFF'}}>TODOリスト</Text>
        </View>

        <View style={{backgroundColor: 'skyblue'}}>
          <TextInput
            style={{height: 50}}
            placeholder="テキスト入力してみよう"
            onChangeText={(text) => this.setState({text})}
          />
        <Text style={{padding: 10, fontSize: 20}}>
          {this.state.text.split(' ').map((word) => word && '😎').join(' ')}
          {this.state.text}
        </Text>
        </View>

      <View style={{flex: 2, backgroundColor: '#ffc0cb'}}>
        <Text style={{padding: 10, fontSize: 20}}>
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
       <ScrollView style={{height: 20, backgroundColor: '#e6e6f6'}}>

            <ListView
              dataSource = {this.state.dataSource}
              renderRow = {(rowData) =>
                  <TouchableHighlight onPress={this.addItem.bind(this)}>
                    <View>
                    <CheckBox
                          style={{flex: 1, padding: 5}}
                          onClick={()=>this.onClick.bind(rowData)}
                          isChecked={rowData.isChecked}
                          rightText={rowData.id +' : '+ rowData.value+' : '+rowData.isChecked}
                          rightTextStyle={()=>{return {color: 'red'}; }}
                          // rightTextStyle={{color: 'red'}}
                      />
                    </View>
                  </TouchableHighlight>
              }
            />
        </ScrollView>
      </View>

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
   margin: 10,
   padding: 5,
   height: 35,
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

// AppRegistry.registerComponent('Todo', () => Todo);
module.exports = FirstTab;
