import React from 'react';

import {
  HeaderLogoIntro,
  HeaderDescriptionIntro,
  ContentButtonGroupSocialLoginIntro,
  FooterButtonCreateAccountIntro,
} from '../../components';
import {Container} from './style';

import {PixelRatio} from 'react-native';

export const SignInSocial = () => {
  return (
    <Container>
      <HeaderLogoIntro />

      <HeaderDescriptionIntro
        title="Bem-vindo"
        description="É bom ter você aqui"
      />

      <ContentButtonGroupSocialLoginIntro />

      <FooterButtonCreateAccountIntro />
    </Container>
  );
};
