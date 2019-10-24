/*
 * @Descripttion: 
 * @version: 
 * @Author: Rock Lee
 * @Date: 2019-10-24 09:27:33
 * @LastEditors: Rock Lee
 * @LastEditTime: 2019-10-24 13:18:52
 */
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'

import  WelcomePage  from '../pages/WelcomePage'
import  HomePage  from '../pages/HomePage'
import  DetailPage  from '../pages/DetailPage'

const InitNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage,
        navigationOptions: {
            //禁用 stack navigator 的  NavigationBar ,全屏显示
            header: null,
        }
    }
});

const MainNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            //禁用 stack navigator 的  NavigationBar ,全屏显示
            header: null,
        }
    },
    DetailPage: {
        screen: DetailPage,
        navigationOptions: {
            //禁用 stack navigator 的  NavigationBar ,全屏显示
            header: null,
        }
    },

});

const SwitchNavigator =  createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
}, {
    navigationOptions: {
        header: null,
    }
});

export default createAppContainer(SwitchNavigator);