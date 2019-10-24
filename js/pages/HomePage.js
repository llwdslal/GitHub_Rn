/*
 * @Descripttion: 
 * @version: 
 * @Author: Rock Lee
 * @Date: 2019-10-23 17:13:20
 * @LastEditors: Rock Lee
 * @LastEditTime: 2019-10-24 15:30:49
 */

import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import PopularPage from './PopularPage';
import TrendingPage from './TrendingPage';
import FavouritePage from './FavouritePage';
import MyPage from './MyPage';

export default class HomePage extends Component {

  render() {
    const BottomTab = this._tabNavigator();


    return <BottomTab />;
  }

  _tabNavigator() {


    return createAppContainer(createBottomTabNavigator({
      PopularPage: {
        screen: PopularPage,
        navigationOptions: {
          tabBarLabel: "最热",
          tabBarIcon: ({ tintColor, focused }) => <MaterialIcons name={'whatshot'} size={24} color={tintColor} />,
        }
      },
      TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
          tabBarLabel: "趋势",
          tabBarIcon: ({ tintColor, focused }) => <Ionicons name={'md-trending-up'} size={24} color={tintColor} />,
        }

      },
      FavouritePage: {
        screen: FavouritePage,
        navigationOptions: {
          tabBarLabel: "收藏",
          tabBarIcon: ({ tintColor, focused }) => <MaterialIcons name={'favorite'} size={24} color={tintColor} />,
        }
      },
      MyPage: {
        screen: MyPage,
        navigationOptions: {
          tabBarLabel: "我的",
          tabBarIcon: ({ tintColor, focused }) => <Entypo name={'user'} size={24} color={tintColor} />,
        }
      }

    }));
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