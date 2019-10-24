/*
 * @Descripttion: 
 * @version: 
 * @Author: Rock Lee
 * @Date: 2019-10-23 17:13:20
 * @LastEditors: Rock Lee
 * @LastEditTime: 2019-10-24 14:03:14
 */

import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
export default class MyPage extends Component {



  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>MyPage</Text>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10
  }
});