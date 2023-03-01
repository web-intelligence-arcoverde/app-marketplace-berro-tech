import React from 'react';
import {View, Image} from 'react-native';

import {
  Button,
  Separator,
  HeaderLogoIntro,
  HeaderDescriptionIntro,
  ContentButtonGroupSocialLoginIntro,
} from '../../components';

export const SplashScreen = () => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <HeaderLogoIntro />

      <HeaderDescriptionIntro
        title="Bem-vindo"
        description="É bom ter você aqui"
      />

      <ContentButtonGroupSocialLoginIntro />

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
