'use strict';

import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Theme } from 'teaset';

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
            screen: CfpuPage
        }
    }
)