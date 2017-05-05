'use strict';
import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native'
import { connect } from 'react-redux'
import { firebaseApp } from '../firebase/firebaseApp'
import { userActionCreators } from '../actions/user'

var styles = require('../styles')

const t = require('tcomb-form-native')
let Form = t.form.Form

const User = t.struct({
  email: t.Str,
  password: t.Str
});

var options = {
  fields: {
    email: {
      label: 'Email',
      placeholder: 'enter your email here',
      autoFocus: true,
      autoCorrect: false,
      autoCapitalize: 'none'
    },
    password: {
      password: true,
      secureTextEntry: true,
      autoCorrect: false,
      autoCapitalize: 'none'
    }
  }
};

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: {
        email: '',
        password: ''
      },
      response: ''
    }
  }

  onChange=(value) => {
    this.setState({value})
  }

  clearForm() {
    this.setState({
      value: null,
      response: ''})
  }

  handleRegister = () => {
    try {
      firebaseApp.auth().createUserWithEmailAndPassword(
        this.state.value.email, this.state.value.password)
        .then(() => {
          this.setState({
            response: 'Success! Your account is created.'
          })
        }, function(error) {

        })
    } catch (error) {
      this.setState({
        response: error.toString()
      })
    }
  }

  handleLogin = () => {
    try {
      firebaseApp.auth().signInWithEmailAndPassword(
        this.state.value.email, this.state.value.password)
        .then(() => {

        }, function(error) {

        })
/*      this.setState({
        response: "Logged In!"
      });
      this.clearForm()

      setTimeout(() => {
        this.props.dispatch(userActionCreators.userAuthorized())
      }, 1000); */
    } catch (error) {
      this.setState({
        response: error.toString()
      })
    }
  }

  //https://firebase.google.com/docs/auth/web/manage-users
  handleResetPassword= () => {
    if (this.state.value.email) {
      try {
        firebaseApp.auth().sendPasswordResetEmail(this.state.value.email)
        .then(() => {
          this.setState({
            response: "Reset email sent!"
          });
        }, function(error) {
          this.setState({
            response: error.toString()
          })
        });
      } catch (error) {
        this.setState({
          response: error.toString()
        })
      }
    }else{
      this.setState({
        response: "Please enter your email."
      })
    }
  }

  render() {
    return(
      <View style={styles.todo}>
        <Form
          ref="form"
          type={User}
          onChange={this.onChange}
          options={options}
          value={this.state.value}/>
        <TouchableHighlight
          style={[styles.button, styles.saveButton]}
          onPress={this.handleLogin}
          underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.button, styles.saveButton, {marginTop: 10}]}
          onPress={this.handleRegister}
          underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.button, styles.saveButton, {marginTop: 10}]}
          onPress={this.handleResetPassword}
          underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableHighlight>
        <View>
          <Text style={{textAlign: "center", padding: 10}}>
            {this.state.response}
          </Text>
        </View>
      </View>
    );
  }
}

export default connect()(Login);
