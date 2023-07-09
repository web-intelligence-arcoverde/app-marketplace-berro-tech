import React from 'react';

import {AppContextEditProfileScreenComponent} from '../../components';

import {HeaderDashboard} from '../../components';
import {useAppSelector} from '../../hooks';
import {ScrollView} from 'react-native';

export const EditProfileScreen = () => {
  const {loading} = useAppSelector(state => state.auth);

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderDashboard />
      {loading ? <></> : <AppContextEditProfileScreenComponent />}
    </ScrollView>
  );
};
