import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import {ProfileScreen, HomeScreen, BusinessScreen} from '../screens/';

export const DashboardBottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Perfil'}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Negocios" component={BusinessScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
