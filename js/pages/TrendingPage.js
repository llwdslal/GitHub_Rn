/*
 * @Descripttion: 
 * @version: 
 * @Author: Rock Lee
 * @Date: 2019-10-23 17:13:20
 * @LastEditors: Rock Lee
 * @LastEditTime: 2019-10-28 15:28:09
 */

import React, { Component } from 'react';
import { View, StyleSheet, Text ,Button} from 'react-native';
export default class TrendingPage extends Component {



  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>TrendingPage</Text>

        <Button title = '改变主题颜色' onPress = {()=> {
          navigation.setParams({
            theme:{
              tintColor:"red",
              updateTime : new Date().getTime()
            }
          });
        }}/>
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