'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

class ToDoList extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {txt: 'Read a book', complete: false},
        {txt: 'Take a walk', complete: true}
      ]),
    };
  }

  openItem(){}

  render() {
    return (
    <View style={{flex:1}}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
          <View>
            <View sytle={styles.item}>
              <Text style={styles.text}>
                {rowData.txt}
              </Text>
            </View>
            <View style={styles.hr}/>
          </View>
        }
        style={styles.list}/>
        <TouchableHighlight
          style={[styles.button, styles.newButton]}
          underlayColor='#99d9f4'
          onPress={this.openItem}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableHighlight>
    </View>
    );
  }
}

var styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#ffffff',
  },
  item: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
  },
  text: {
    fontSize: 18,
    marginLeft: 5,
    marginTop: 2,
    color: '#222222',
    padding: 10,
  },
  hr: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: 1,
    marginLeft: 0,
    marginRight: 0,
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  newButton: {
    marginBottom: 0,
    borderRadius: 0,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
});

module.exports = ToDoList;
