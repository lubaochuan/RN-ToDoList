import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
var styles = require('../styles');

export default class Title extends Component {
  render() {
    const {children} = this.props

    return (
      <View style={styles.header}>
        <Text style={styles.title}>{children}</Text>
      </View>
    )
  }
}
