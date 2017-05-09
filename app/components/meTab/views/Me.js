import React, { Component } from 'react'
import {
  ScrollView,
  View,
  ActivityIndicator,
} from 'react-native'
import { List, ListItem, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import * as firebase from "firebase"
import { USER_SIGNED_OUT } from '../../../actions/user'
var styles = require('../../../styles')

class Me extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      email: null,
      signingOut: false
    }
  }
  componentDidMount() {
    const user = firebase.auth().currentUser
    console.log("currentUser: "+user)
    if (user != null) {
      const id = user.uid
      const email = user.email

      this.setState({
        id: id,
        email: email
      })
    }
  }

  handleSignout = () => {
    try {
      this.setState({signingOut:true})
      firebase.auth().signOut()
      .then(() => {
        this.props.navigation.dispatch({type:'JUMP_TO_TAB', payload:{index:0}})
      }, function(error) {

      })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (this.state.signingOut) {
      return (
        <View style={styles.center}>
          <ActivityIndicator animating={true} />
        </View>
      )
    }
    return (
      <ScrollView>
        <List>
          <ListItem
            title="ID"
            rightTitle={this.state.id}
            hideChevron
          />
          <ListItem
            title="Email"
            rightTitle={this.state.email}
            hideChevron
          />
        </List>
        <Button
          title="Sign Out"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.handleSignout}
        />
      </ScrollView>
    );
  }
}

export default connect()(Me)
