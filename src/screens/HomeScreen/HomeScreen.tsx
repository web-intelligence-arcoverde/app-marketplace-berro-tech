import React from 'react';

import {ScrollView} from 'react-native';
import {
  KeyboardContainer,
  HeaderDashboard,
  BusinessHighlight,
  Separator,
  ProductListSpecificHomeScreen,
} from '../../components';

export const HomeScreen = () => {
  return (
    <KeyboardContainer>
      <HeaderDashboard />
      <ScrollView>
        <BusinessHighlight />

        <Separator height={40} />
        <ProductListSpecificHomeScreen />
      </ScrollView>
    </KeyboardContainer>
  );
};
