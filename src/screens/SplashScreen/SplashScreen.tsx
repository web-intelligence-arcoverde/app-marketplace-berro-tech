import {Text} from '@rneui/base';
import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Button, Separator} from '../../components';

import {ICONS} from '../../assets';

export const SplashScreen = () => {
  const Icon = ICONS[`email`];

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{paddingHorizontal: 20, backgroundColor: '#fff', flex: 1}}>
        <Icon />
        <Text>Bem-vindo</Text>
        <Separator height={4} />
        <Text>É bom ter você aqui</Text>
        <Separator height={64} />
        <Button title="Entrar com email" variant="contained" icon="email" />
        <Separator height={20} />
        <Button title="Entrar com google" variant="outlined" icon="gmail" />
        <Separator height={20} />
        <Button
          title="Entrar com facebook"
          variant="outlined"
          icon="facebook"
        />
        <Separator height={20} />
        <Button title="Criar conta" variant="containedSecondary" icon="user" />
      </View>
    </SafeAreaView>
  );
};
