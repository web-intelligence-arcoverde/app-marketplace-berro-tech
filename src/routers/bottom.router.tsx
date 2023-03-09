import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import {ProfileScreen, HomeScreen, BusinessScreen} from '../screens/';

import Ionicons from 'react-native-vector-icons/Ionicons';

export const DashboardBottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Perfil'}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Negocios') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Negocios" component={BusinessScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
