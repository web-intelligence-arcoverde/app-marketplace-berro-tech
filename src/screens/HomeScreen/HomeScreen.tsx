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
      <BusinessHighlight />

      <RegionInformationSection />

      <Separator height={100} />
      <ProductListSpecificHomeScreen />
    </KeyboardContainer>
  );
};
