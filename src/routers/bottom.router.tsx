import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../common';

const Tab = createBottomTabNavigator();

import {IconComponent} from '../components';

import {ProfileScreen, HomeScreen, BusinessScreen} from '../screens/';

export const DashboardBottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Perfil'}
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: 100,
        },

        tabBarItemStyle: {justifyContent: 'flex-start', paddingTop: 10},

        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {fontFamily: 'inter', fontSize: 14},
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = !focused ? 'home-icon' : 'home-outlined-icon';
          } else if (route.name === 'Negócios') {
            iconName = !focused ? 'business-icon' : 'business-outlined-icon';
          } else if (route.name === 'Perfil') {
            iconName = !focused ? 'profile-icon' : 'profile-outlined-icon';
          }

          // You can return any component that you like here!
          return <IconComponent icon={iconName} />;
        },
        tabBarActiveTintColor: `${COLORS.sub_brand._02}`,
        tabBarInactiveTintColor: `${COLORS.gray._01}`,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Negócios" component={BusinessScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
