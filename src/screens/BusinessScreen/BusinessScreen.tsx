import {
  HeaderDashboard,
  Separator,
  BusinessProductCardList,
} from '../../components';

import {View} from 'react-native';

export const BusinessScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderDashboard />

      <Separator height={20} />
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
