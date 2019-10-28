/*
 * @Descripttion: 
 * @version: 
 * @Author: Rock Lee
 * @Date: 2019-10-28 10:49:53
 * @LastEditors: Rock Lee
 * @LastEditTime: 2019-10-28 10:55:58
 */
import { applyMiddleware, createStore } from 'redux';
import  reducers from '../reducer/index';
import {middleware} from '../navigator/AppNavigator';

const middlewares = [
    middleware
];

//创建 store
export default createStore(reducers,applyMiddleware(... middlewares));