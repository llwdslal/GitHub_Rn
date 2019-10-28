/*
 * @Descripttion: 
 * @version: 
 * @Author: Rock Lee
 * @Date: 2019-10-23 17:13:20
 * @LastEditors: Rock Lee
 * @LastEditTime: 2019-10-28 14:15:01
 */

import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DynamicTabNavigator from '../navigator/DynamicTabNavigator'

export default class HomePage extends Component {

  render() {
    return <DynamicTabNavigator />;
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