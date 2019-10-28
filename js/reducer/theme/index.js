/*
 * @Descripttion: 
 * @version: 
 * @Author: Rock Lee
 * @Date: 2019-10-28 10:41:50
 * @LastEditors: Rock Lee
 * @LastEditTime: 2019-10-28 11:51:09
 */
import Types from '../../action/types';

const defaultState = {
    theme: 'blue'
}

export default function onAction(state = defaultState, action) {
    switch (action.type) {
        case Types.THEME_CHANGE:
            return {
                ...state,
                theme: action.theme
            };
        default:
            return state;

    }

}