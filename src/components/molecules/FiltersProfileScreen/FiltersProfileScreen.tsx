import {Container} from './style';

import {BreedSteps, OrderFilterDropdown} from '../../';
import {useRoute} from '@react-navigation/core';

import {AnimalTypeFilter} from '../AnimalTypeFilter/AnimalTypeFilter';
import {OrderFilterDropdownProfile} from '../OrderFilterDropdownProfile/OrderFilterDropdownProfile';

export const FiltersProfileScreen = () => {
  const {name} = useRoute();

  const isProfileScreen = name === `Perfil`;

  return (
    <Container>
      {isProfileScreen ? (
        <>
          <AnimalTypeFilter />
          <OrderFilterDropdownProfile />
        </>
      ) : (
        <>
          <BreedSteps />
          <OrderFilterDropdown />
        </>
      )}
    </Container>
  );
};
