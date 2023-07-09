import React from 'react';

import {ScrollView} from 'react-native';
import {
  HeaderDashboard,
  BusinessHighlight,
  Separator,
  ProductListSpecificHomeScreen,
} from '../../components';

export const HomeScreen = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderDashboard />
      <ScrollView>
        <BusinessHighlight />

        <Separator height={40} />
        <ProductListSpecificHomeScreen />
      </ScrollView>
    </ScrollView>
  );
};
