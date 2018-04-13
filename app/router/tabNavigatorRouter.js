'use strict';

import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Theme } from 'teaset';
import {
    Image,
    Platform,
    StyleSheet
} from 'react-native';

const tabBarOnPressAction = (router, jumpToIndex) => {
    if (typeof router.index !== 'undefined') {
        jumpToIndex(router.index);
    }
}

const tabBarIconGeneration = (selected, unselected) => {
    return ({ tintColor, focused }) =>
      focused ? (
        <Image
          source={selected}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ) : (
        <Image
        source={unselected}
        style={[styles.icon, { tintColor: tintColor }]}
        />
    );
};

const TabNavRouter = TabNavigator(
    {
        tCfpu: {
            screen: CfpuPage,
            navigationOptions: {
                tabBarLabel: '',
                tabBarOnPress: tabBarOnPressAction,
                tabBarIcon: tabBarIconGeneration(
                    require('@assets/img/tabIcon/tab_cfpu_s.png'),
                    require('@assets/img/tabIcon/tab_cfpu.png')
                )
            }
        }
    },
    {
        // 切换页面时显示动画
        animationEnabled: false,
        // 显示在底部
        tabBarPosition: 'bottom',
        // 禁止左右滑动
        swipeEnabled: false,
        // 按 back 键是否跳转到第一个 Tab， none 为不跳转
        backBehavior: 'none',
        // 设置样式
        tabBarOptions: {
            upperCaseLabel: false,
            // 文字和图片选中颜色
            activeTintColor: '#bb0000',
            // 文字图片默认颜色
            inactiveTintColor: '#999999',
            // 显示图标
            showIcon: true,
            // android 中 TabBar 底部线条 BUG
            indicatorStyle: {height: 0},
            // material涟漪效果的颜色（安卓版本需要大于5.0）
            // pressColor: '#bb0000',
            // 按压标签的透明度变化（安卓版本需要小于5.0）。
            // pressOpacity: '0.6',
            // TabBar 背景色
            style: {
                backgroundColor: '#fff',
                borderTopWidth: 0.5,
                borderColor: '#c8c8c8',
                height: 49,
                ...Platform.select({
                    ios: {
                        justifyContent: 'center',
                        alignItems: 'center'
                    }
                })
            },
            tabStyle: {
                ...Platform.select({
                    ios: {
                        height: 42,
                        backgroundColor: '#fff'
                    },
                    android: {
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }
                })
            },
            labelStyle: {
                fontSize: 12,
                ...Platform.select({
                    android: {
                        marginTop: 0
                    }
                })
            }
        }
    }
);

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24,
        resizeMode: 'contain'
    }
});

export default TabNavRouter;