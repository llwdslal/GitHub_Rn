/*
 * @Descripttion: 
 * @version: 
 * @Author: Rock Lee
 * @Date: 2019-10-23 17:13:20
 * @LastEditors: Rock Lee
 * @LastEditTime: 2019-10-28 11:07:11
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './js/navigator/AppNavigator';
import store from './js/store/index';

export default class  extends Component {
  
  render() {
    return (
      <Provider store = {store}>
        <AppNavigator/>
      </Provider>
    );
  }
}