/*
 * @Descripttion: 
 * @version: 
 * @Author: Rock Lee
 * @Date: 2019-10-23 17:13:20
 * @LastEditors: Rock Lee
 * @LastEditTime: 2019-10-24 13:57:14
 */

import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import NavigationUtil from '../navigator/NavigatorUtil';
export default class WelcomePage extends Component {

  componentDidMount(){
    this.timer = setTimeout(() =>{
        NavigationUtil.reset2HomePage({navigation:this.props.navigation});
    },2000);
  }

  componentWillUnmount(){
    this.timer && clearTimeout(this.timer);
  }

  render() { 
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>Welcome</Text>

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