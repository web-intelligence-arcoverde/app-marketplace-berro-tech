import {Container} from './style';

import {BreedSteps, OrderFilterDropdown} from '../../';

import React, {useState} from 'react';

export const FiltersProfileScreen = () => {
  return (
    <Container>
      <BreedSteps />
      <OrderFilterDropdown />
    </Container>
  );
};
