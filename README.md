# rnIndex

# react-native 练习项目

# 此项目使用第三方库

> [teaset]() 第三方组件库

> [react-native-image-picker]() 图片上传插件

> [react-native-scrollable-tab-view]() tabView插件

> [react-native-storage]() 本地存储插件

> [react-native-swiper]() 轮播图插件

> [react-navigation]() 路由插件

`未完待续`

# 开发规范

js 页面结构
```js
`use strict`;

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ...
} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    //生命周期
    ...

    //页面事件
    ...

    //页面渲染
    ...

    render() {
        return ();
    }

    //样式
    StyleSheet
    ...
}