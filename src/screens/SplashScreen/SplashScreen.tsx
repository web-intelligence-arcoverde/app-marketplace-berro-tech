import React from 'react';
import {View, Image} from 'react-native';

import {
  Button,
  Separator,
  HeaderLogoIntro,
  HeaderDescriptionIntro,
} from '../../components';

export const SplashScreen = () => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <HeaderLogoIntro />

      <HeaderDescriptionIntro
        title="Bem-vindo"
        description="É bom ter você aqui"
      />

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
