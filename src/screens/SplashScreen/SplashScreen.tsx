import {Text} from '@rneui/base';
import React from 'react';
import {View, Image} from 'react-native';

import {Button, Separator} from '../../components';

import {ICONS, IMAGES} from '../../assets';

export const SplashScreen = () => {
  const Icon = ICONS['hands'];

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Image
        source={IMAGES.LogoIntro}
        style={{width: '100%'}}
        resizeMode="contain"
      />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1,
          borderRadius: 6,
          paddingHorizontal: 20,
          paddingVertical: 32,
        }}>
        <View>
          <Text>Bem-vindo</Text>
          <Separator height={4} />
          <Text>É bom ter você aqui</Text>
        </View>
        <Icon />
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1,
          borderRadius: 6,
          paddingVertical: 32,
          borderBottomColor: '#f4f4f4',
          borderBottomWidth: 1,
        }}>
        <Button title="Entrar com email" variant="contained" icon="email" />
        <Separator height={20} />
        <Button title="Entrar com google" variant="outlined" icon="gmail" />
        <Separator height={20} />
        <Button
          title="Entrar com facebook"
          variant="outlined"
          icon="facebook"
        />
      </View>

      <View
        style={{
          paddingHorizontal: 20,
        }}>
        <Separator height={20} />
        <Button title="Criar conta" variant="containedSecondary" icon="user" />
      </View>
    </View>
  );
};
