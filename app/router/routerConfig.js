'use strict';
import { StackNavigator } from 'react-navigation';
import { Platform, StatusBar } from 'react-native';

const StackOptions = ({navigationOptions, navigation, screenProps}) => {
    const { headerStyle, ...otherOptions } = navigationOptions;
    return {
        headerTintColor: '#fff',
        headerBackTitle: null,
        ...otherOptions,
        headerStyle: {
            backgroundColor: 'rgb(195,15,34)',
            ...headerStyle,
            ...Platform.select({
                android: {
                height: StatusBar.currentHeight + 56,
                paddingTop: StatusBar.currentHeight
                }
            })
        }
    }
};
const RouterConfig = StackNavigator(
    {
        
    }
)