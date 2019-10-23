import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'

import {WelcomePage} from '../pages/WelcomePage'
import {HomePage} from '../pages/HomePage'
import {DetailPage} from '../pages/DetailPage'

const InitNavigator = createStackNavigator({
    WelcomePage:{
        screen: WelcomePage,
        navigationOptions:{
            //禁用 stack navigator 的  NavigationBar ,全屏显示
            header:null,
        }
    }
});

const MainNavigator = createStackNavigator({
    HomePage:{
        screen: HomePage,
        navigationOptions:{
            //禁用 stack navigator 的  NavigationBar ,全屏显示
            header:null,
        }
    },
    DetailPage:{
        screen: DetailPage,
        navigationOptions:{
            //禁用 stack navigator 的  NavigationBar ,全屏显示
            header:null,
        }
    },

}); 