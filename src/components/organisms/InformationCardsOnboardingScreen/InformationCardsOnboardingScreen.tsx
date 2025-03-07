import {cardInformations} from '../../../mock';
import React from 'react';

import {Container} from './style';

import {InformationCardOnboarding} from '../../';

export const InformationCardsOnboardingScreen = () => {
  return (
    <Container>
      {cardInformations.map(item => {
        return (
          <InformationCardOnboarding {...item} key={`${item.title}-event`} />
        );
      })}
    </Container>
  );
};
