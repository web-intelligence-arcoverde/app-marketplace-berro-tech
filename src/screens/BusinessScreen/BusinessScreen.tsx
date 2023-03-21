import {
  HeaderDashboard,
  Separator,
  BusinessProductCardList,
  FiltersProfileScreen,
} from '../../components';

import {ScrollView, View} from 'react-native';

export const BusinessScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderDashboard />
      <Separator height={28} />
      <ScrollView>
        <FiltersProfileScreen />
        <Separator height={28} />
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
          }}>
          <BusinessProductCardList />
        </View>
      </ScrollView>
    </View>
  );
};
