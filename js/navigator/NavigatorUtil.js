/*
 * @Descripttion: 
 * @version: 
 * @Author: Rock Lee
 * @Date: 2019-10-24 13:51:17
 * @LastEditors: Rock Lee
 * @LastEditTime: 2019-10-24 13:54:02
 */
export default class NavigationUtil {

    static  goBack(params){
        const {navigation} = params;
        navigation.goBack();
    }

    static reset2HomePage(params){
        const {navigation} = params;
        navigation.navigate("Main");
    }
}