import React from 'react';

import {
  KeyboardContainer,
  AppContextEditProfileScreenComponent,
} from '../../components';

import {HeaderDashboard} from '../../components';
import {useAppSelector} from '../../hooks';

export const EditProfileScreen = () => {
  const {loading} = useAppSelector(state => state.auth);

  return (
    <KeyboardContainer>
      <HeaderDashboard />
      {loading ? <></> : <AppContextEditProfileScreenComponent />}
    </KeyboardContainer>
  );
};
