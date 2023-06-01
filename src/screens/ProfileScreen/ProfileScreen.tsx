import {
  DescriptionUserProfileScreen,
  HeaderDashboard,
  FiltersProfileScreen,
  MyProductsProfileScreen,
  Separator,
} from '../../components';
import {useAppSelector} from '../../hooks';

import {Container} from './style';

export const ProfileScreen = () => {
  return (
    <Container>
      <HeaderDashboard />
      <DescriptionUserProfileScreen />
      <Separator height={12} />
      <MyProductsProfileScreen />
    </Container>
  );
};
