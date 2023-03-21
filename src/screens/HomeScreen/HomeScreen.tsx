import {ScrollView} from 'react-native';
import {
  KeyboardContainer,
  HeaderDashboard,
  BusinessHighlight,
  Separator,
  ProductListSpecificHomeScreen,
  RegionInformationSection,
} from '../../components';

export const HomeScreen = () => {
  return (
    <KeyboardContainer>
      <HeaderDashboard />
      <ScrollView>
        <BusinessHighlight />

        <RegionInformationSection />

        <Separator height={100} />
        <ProductListSpecificHomeScreen />
      </ScrollView>
    </KeyboardContainer>
  );
};
