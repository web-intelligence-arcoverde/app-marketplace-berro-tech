import React from 'react';

import {
  Separator,
  KeyboardContainer,
  AppContextEditProfileScreenComponent,
} from '../../components';

import {HeaderDashboard} from '../../components';

import {getBottomSpaceHeight} from '../../utils';

export const EditProfileScreen = () => {
  return (
    <KeyboardContainer>
      <HeaderDashboard />
      <AppContextEditProfileScreenComponent />

      <Separator height={getBottomSpaceHeight()} />
    </KeyboardContainer>
  );
};
