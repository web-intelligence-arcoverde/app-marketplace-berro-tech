import React from 'react';
import {Image, View} from 'react-native';

import {Text} from '../../components';

import {HeaderDashboard} from '../../components';
import {useAppSelector} from '../../hooks';
export const EditProfileScreen = () => {
  const {photo} = useAppSelector(state => state.user.user);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderDashboard />
      <View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <Text typography="h4">Editar </Text>
            <Text typography="h4">Conta</Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text typography="h4">Editar </Text>
            <Text typography="h4">Localização</Text>
          </View>
        </View>

        <View>
          <Image source={photo} />
        </View>
      </View>
    </View>
  );
};
