/*
 * @Descripttion: 
 * @version: 
 * @Author: Rock Lee
 * @Date: 2019-10-28 10:34:08
 * @LastEditors: Rock Lee
 * @LastEditTime: 2019-10-28 11:51:55
 */
import { combineReducers } from 'redux';
import { rootCom, RootNavigator } from '../navigator/AppNavigator';
import theme from './theme';

//设置默认state 
const navState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams(rootCom));

const navReducer = (state = navState,action) => {

    const nextState = RootNavigator.router.getStateForAction(action,state);
    // 如果 nextState 为 null 或 undefined ， 返回 state
    return nextState || state;
}

const index  =combineReducers({
    nav:navReducer,
    theme:theme
});

export default index;