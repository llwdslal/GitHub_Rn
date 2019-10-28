/*
 * @Descripttion: 
 * @version: 
 * @Author: Rock Lee
 * @Date: 2019-10-24 09:27:33
 * @LastEditors: Rock Lee
 * @LastEditTime: 2019-10-28 15:10:43
 */
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { connect } from 'react-redux'
import { createReactNavigationReduxMiddleware, createReduxContainer } from 'react-navigation-redux-helpers'

import WelcomePage from '../pages/WelcomePage'
import HomePage from '../pages/HomePage'
import DetailPage from '../pages/DetailPage'

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
            headerTitle:'详情'
        }
    },

});

export const RootNavigator = createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
}, {
    navigationOptions: {
        header: null,
    }
});


const AppWithNavigationState = createReduxContainer(RootNavigator, 'root');

const mapStateToProps = state => ({
    state: state.nav
});

export const middleware = createReactNavigationReduxMiddleware(state => state.nav, 'root');
export default connect(mapStateToProps)(AppWithNavigationState);
export const rootCom = 'Init';//设置根路由
