/*
 * @Descripttion: 
 * @version: 
 * @Author: Rock Lee
 * @Date: 2019-10-23 17:13:20
 * @LastEditors: Rock Lee
 * @LastEditTime: 2019-10-28 15:52:30
 */

import React, { Component } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import NavigationUtil from '../navigator/NavigatorUtil';
import { red } from 'ansi-colors';
export default class PopularPage extends Component {

  constructor(props) {
    super(props);
    this.tabNames = ['Java', 'Android', 'IOS','React Native'];
  }


  _genTabs() {
    const tabs = {};
    this.tabNames.forEach((item, index) => {
      tabs[`tab${index}`] = {
        screen: PopularTab,
        navigationOptions: {
          title: item
        }
      }
    });

    
    return tabs;
  }

  render() {
    const TopNavigator = createMaterialTopTabNavigator(this._genTabs(),{
      tabBarOptions:{
        tabStyle:styles.tabStyle,
        upperCaseLabel:false,
        scrollEnabled:true,
        indicatorStyle:styles.indicatorStyle,
        style:{
          backgroundColor:'#789'
        }
      }
    });

    const TabContainer = createAppContainer(TopNavigator);

    return (
      <TabContainer />
    );
  }
}



class PopularTab extends Component {

  render() {
    const { tabLable } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{tabLable}</Text>
        <Button title='AA' onPress={() => {
          NavigationUtil.goToPage("DetailPage")
        }} />


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
  },
  tabStyle:{
    minWidth : 50,
  },
  indicatorStyle:{
    height:2,
    backgroundColor: 'white'
  }
});