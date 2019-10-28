/*
 * @Descripttion: 
 * @version: 
 * @Author: Rock Lee
 * @Date: 2019-10-24 13:51:17
 * @LastEditors: Rock Lee
 * @LastEditTime: 2019-10-28 14:06:50
 */
export default class NavigationUtil {

    static navigation;

    
    static  goToPage(params,page){
        const navigation = NavigationUtil.navigation;

        if(!navigation){
            console.log("NavigationUtil.navigation can not be null");
            return;
        }

        navigation.navigate(page,{... params});
    }



    static  goBack(params){
        const {navigation} = params;
        navigation.goBack();
    }

    static reset2HomePage(params){
        const {navigation} = params;
        navigation.navigate("Main");
    }
}