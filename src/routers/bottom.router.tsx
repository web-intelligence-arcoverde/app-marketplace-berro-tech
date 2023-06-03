import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {COLORS} from '../common';

const Tab = createBottomTabNavigator();

import {IconComponent} from '../components';
import {BottomSheetExample} from '../components/molecules/BottomSheetExample/BottomSheetExample';

import {ProfileScreen, HomeScreen, BusinessScreen} from '../screens/';
import {getBottomSpaceHeight, scale} from '../utils';

export const DashboardBottomNavigation = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarItemStyle: {
            justifyContent: 'center',
          },
          tabBarLabelStyle: {fontFamily: 'inter', fontSize: 14},
          tabBarStyle: {
            height: scale(74) + getBottomSpaceHeight(),
          },
          tabBarIconStyle: {
            maxHeight: scale(30),
          },
          tabBarIcon: ({focused}) => {
            let iconName = '';
            if (route.name === 'Home') {
              iconName = !focused ? 'home-icon' : 'home-outlined-icon';
            } else if (route.name === 'Negócios') {
              iconName = !focused ? 'business-icon' : 'business-outlined-icon';
            } else if (route.name === 'Perfil') {
              iconName = !focused ? 'profile-icon' : 'profile-outlined-icon';
            }
            return <IconComponent icon={iconName} />;
          },
          tabBarActiveTintColor: `${COLORS.sub_brand._02}`,
          tabBarInactiveTintColor: `${COLORS.gray._01}`,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Negócios" component={BusinessScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>

      <BottomSheetExample />
    </>
  );
};
