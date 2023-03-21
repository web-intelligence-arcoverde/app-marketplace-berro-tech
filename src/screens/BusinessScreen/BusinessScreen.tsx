import {
  HeaderDashboard,
  Separator,
  BusinessProductCardList,
  FiltersProfileScreen,
} from '../../components';

import {View} from 'react-native';

export const BusinessScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderDashboard />
      <Separator height={28} />
      <FiltersProfileScreen />
      <Separator height={28} />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
        }}>
        <BusinessProductCardList />
      </View>
    </View>
  );
};
