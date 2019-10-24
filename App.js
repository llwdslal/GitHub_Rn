/*
 * @Descripttion: 
 * @version: 
 * @Author: Rock Lee
 * @Date: 2019-10-23 17:13:20
 * @LastEditors: Rock Lee
 * @LastEditTime: 2019-10-24 11:03:05
 */

import React, { Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';
export default class  extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        
      
        <Text>Hello</Text>
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});