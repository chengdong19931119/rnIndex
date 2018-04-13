'use strict';
import { NavigationActions } from 'react-navigation';
import RouterConfig from './routerConfig';

const defaultGetStateForAction = RouterConfig.router.getComponentForState;

const needUpData = [];

const needLogin = [
    'AddressManagement',
    'BankAccount',
    'PersonalInfo',
    'ModifyPw'
];

RouterConfig.router.getStateForAction = (action, state) => {
    const getBackKey = routerName => {
        const routeHistory = {...state};
        let routeKey = '';
        let routeIndex = 0;
        if (routeHistory.index === 0) {
            return routeKey;
        }
        routeHistory.routes.forEach((item, index) => {
            if (item.routeName === routeName) {
                routeIndex = index;
                routeKey = item.key;
                return;
            }
        });
        if (routeIndex > routeHistory.routes.length - 2) {
            return '';
        }
        routeKey = routeHistory.routes[routeIndex + 1].key;
        return routeKey;
    }
    if (needUpData.includes(action.routeName)) {
        action.params = {...action.params, ...{} };
    }
    action.params = {
        history: {...state},
        getBackKey: getBackKey,
        ...action.params,
        loginState: false
    }
    if (global.loginState) {
        action.params = { ...action.params, loginState: true };
    }
    if (state && action.type === NavigationActions.NAVIGATE) {
        // 需要登录的路由设置直接跳转到登录页
        if (!global.loginState && needLogin.includes(action.routeName)) {
            action.routeName = 'Login';
        }
    }
    console.log('router action>', action);
    return defaultGetStateForAction(action, state);
}
export default RouterConfig;