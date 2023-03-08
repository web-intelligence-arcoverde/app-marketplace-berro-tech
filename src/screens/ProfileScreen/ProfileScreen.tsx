import {DescriptionUserProfileScreen, HeaderDashboard} from '../../components';

import {View} from 'react-native';

export const ProfileScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderDashboard />
      <DescriptionUserProfileScreen />
    </View>
  );
};
