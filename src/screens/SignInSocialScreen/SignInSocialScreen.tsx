import React from 'react';

import {
  HeaderLogoIntro,
  HeaderDescriptionIntro,
  ContentButtonGroupSocialLoginIntro,
  FooterButtonCreateAccountIntro,
} from '../../components';
import {Container} from './style';

export const SignInSocialScreen = () => {
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
