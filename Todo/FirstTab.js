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
  ScrollView,
  Alert,
  TouchableOpacity,
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
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => true});

    this.state = {
      selectedTab: 'FirstTab',
      word:'',
      text: '',
      todo: [],
      count: 1,
      unCheckedCount: 0,
      dataSource: ds.cloneWithRows([]), //'hoge', 'hogehoge'
    };

    // this.dataSource = new ListView.DataSource({
    // rowHasChanged: (row1, row2) => row1 !== row2
    // });

  }

  renderUncheckedTodoCount() {
    var unCheckedCount = 0;
    for(var todo in this.state.todo) {
      if (!todo.isChecked) {
        unCheckedCount++;
      }
    }

    return unCheckedCount;
  }

  deleteItem(item) {
    var indexOfItem = this.state.todo.findIndex((todo) => todo.id === item.id);
    this.state.todo.splice(indexOfItem, 1);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.state.todo),
    });
    // this.setState({unCheckedCount: this.renderUncheckedTodoCount()})
    // Alert.alert(this.state.unCheckedCount + '*****');
    this.props.onTodoUpdated(this.renderUncheckedTodoCount());
  }

  addItem() {
    // Alert.alert('増やしたい');
    this.state.todo = this.state.todo.concat({id: this.state.count, value: this.state.text, isChecked: false});
    this.state.count = this.state.count + 1;
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.state.todo),
    });
    // Alert.alert(this.props.badgeCount.state);
    // this.setState({unCheckedCount: this.renderUncheckedTodoCount()})
    this.props.onTodoUpdated(this.renderUncheckedTodoCount());
    // this.props.todo.setState({badgeCount:80});
    // this.state.text = '';

    //   // Todo追加後はTextInputを空にする
    // this.setState({text: ''});
  }

  onClick(data) {
    // Alert.alert('くりっく');
    //Alert.alert(data.color + data.value);

    // data.color = 'black'; //データの更新
    data.isChecked = !data.isChecked; //チェックの反転
    // Alert.alert(this.state.todo[data.id - 1]);

    // this.state.todo[data.id - 1] = {id: data.id, value: data.value, isChecked: true, color: 'blue'};

    // this.state.todo = this.state.todo.concat({id: data.id, value: data.value, isChecked: false, color:'black'});
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.state.todo),
    });
    this.setState({unCheckedCount: this.renderUncheckedTodoCount(), });
    this.props.onTodoUpdated(this.renderUncheckedTodoCount());

  }

  renderColor(data) {
    if (data.isChecked) {
      return 'gray';
    } else {
      return 'black';
    }
  }

  _onChangeText(text) {
   this.setState({ text: text });
  }

  render() {
    return (
      <View style={{flex: 1}}>

        <View style={{backgroundColor: '#e6e6fa'}}>
          <Text style={{padding: 20, fontSize: 30, color: '#904480'}}>TODOリスト</Text>
        </View>

        <View style={{backgroundColor: 'skyblue'}}>
          <TextInput
            style={{height: 50}}
            placeholder="テキスト入力してみよう"
            onChangeText={(word) => this.setState({word})}
          />
        <Text style={{padding: 10, fontSize: 20}}>
          {this.state.word.split(' ').map((word) => word && '😎').join(' ')}{this.state.word}
        </Text>
      </View>

      <View style={{backgroundColor: '#ffc0cb'}}>
        <TextInput
           style={styles.textform}
           onChangeText={this._onChangeText.bind(this)}
        />
       <TouchableHighlight　onPress={this.addItem.bind(this)} >
         <Text style={styles.addButton}>
           追加する
         </Text>
       </TouchableHighlight>

       </View>

       <ScrollView style={{height: 20, backgroundColor: '#e6e6f6'}}>

          <ListView
            enableEmptySections={true}
            dataSource = {this.state.dataSource}
            renderRow = {(rowData) =>
                          <View style={{flexDirection: 'row'}}>
                            <CheckBox
                                  style={{padding: 5, width:250}}
                                  onClick={()=>this.onClick(rowData)}
                                  isChecked={rowData.isChecked}
                                  rightText={rowData.id +' : '+ rowData.value+' : '+rowData.isChecked}
                                  rightTextStyle={{color: this.renderColor(rowData)}}
                                  // rightTextStyle={()=>{return {color: 'red'}; }}
                                  // rightTextStyle={{color: 'red'}}
                                  />
                                  <TouchableHighlight onPress={this.deleteItem.bind(this, rowData)}>
                                    <Text style={styles.deleteButton}>×</Text>
                                  </TouchableHighlight>
                          </View>
                        }
                        />
        </ScrollView>


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
 addButton: {
   color: '#ccc',
   height: 30,
   width: 80,
   padding: 8,
   margin: 10,
   textAlign: 'center',
   borderColor: '#ba55d3',
   backgroundColor: '#ba55d3',
   borderWidth: 2,
   borderRadius: 8,
   alignSelf: 'flex-end',
 },
 deleteButton: {
   color: 'orange',
   height: 20,
   width: 50,
   padding: 0,
   margin: 8,
   textAlign: 'center',
   borderColor: 'gray',
   borderWidth: 1,
   borderRadius: 2,
   alignSelf: 'flex-end',
 }
});

// AppRegistry.registerComponent('Todo', () => Todo);
module.exports = FirstTab;
