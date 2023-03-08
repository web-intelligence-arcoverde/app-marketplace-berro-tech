import {
  DescriptionUserProfileScreen,
  HeaderDashboard,
  FiltersProfileScreen,
  MyProductsProfileScreen,
  Separator,
} from '../../components';

import {Container} from './style';

export const ProfileScreen = () => {
  return (
    <Container>
      <HeaderDashboard />
      <DescriptionUserProfileScreen />
      <Separator height={12} />
      <FiltersProfileScreen />
      <Separator height={12} />
      <MyProductsProfileScreen />
    </Container>
  );
};
