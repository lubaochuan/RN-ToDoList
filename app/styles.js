'use strict';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 18,
    marginLeft: 5,
    marginTop: 2,
    color: '#222222',
    padding: 10,
  },
  completed: {
    color: '#cccccc'
  },
  hr: {
    backgroundColor: '#48BBEC',
    height: 1,
    marginLeft: 0,
    marginRight: 0,
  },
  todo: {
    marginTop: 60,
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  saveButton: {
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
  },
  newButton: {
    marginBottom: 0,
    borderRadius: 0,
  },
  pageTitle: {
     color: 'white',
     margin: 10,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
  },
  back: {
    color: 'white',
    margin: 10,
  },
  header: {
    backgroundColor: '#48BBEC',
    padding: 15,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = styles;
