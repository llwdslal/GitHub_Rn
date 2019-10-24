/*
 * @Descripttion: 
 * @version: 
 * @Author: Rock Lee
 * @Date: 2019-10-24 09:27:33
 * @LastEditors: Rock Lee
 * @LastEditTime: 2019-10-24 13:18:16
 */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppNavigator from './js/navigator/AppNavigator';
import App from './App';
import {name as appName} from './app.json';



AppRegistry.registerComponent(appName, () => AppNavigator);
