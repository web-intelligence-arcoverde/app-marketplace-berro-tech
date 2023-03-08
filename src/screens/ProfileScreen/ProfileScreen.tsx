import {
  DescriptionUserProfileScreen,
  HeaderDashboard,
  Text,
  IconComponent,
  MyProductsProfileScreen,
} from '../../components';

import {View} from 'react-native';

export const ProfileScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderDashboard />
      <DescriptionUserProfileScreen />
      <MyProductsProfileScreen />
    </View>
  );
};
