/*
 * @Descripttion: 
 * @version: 
 * @Author: Rock Lee
 * @Date: 2019-10-28 13:49:42
 * @LastEditors: Rock Lee
 * @LastEditTime: 2019-10-28 14:23:37
 */
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import PopularPage from '../pages/PopularPage';
import TrendingPage from '../pages/TrendingPage';
import FavouritePage from '../pages/FavouritePage';
import MyPage from '../pages/MyPage';
import NavigationUtil from './NavigatorUtil';

const TABS = {
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

}


export default class DynamicTabNavigator extends Component {

    _tabNavigator() {
        //结构所有Tab
        const {PopularPage,TrendingPage,FavouritePage,MyPage} = TABS;
        //这里根据网络请求 动态配置要显示的 Tab 和配置

        const showTabs ={PopularPage,TrendingPage,FavouritePage,MyPage} ;
        // PopularPage.navigationOptions.tabBarLabel = "xx";

        return createAppContainer(createBottomTabNavigator(showTabs));
    }

    render(){
        NavigationUtil.navigation = this.props.navigation;
        const Tabs = this._tabNavigator();

        return <Tabs/>
    }
}