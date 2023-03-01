import {View} from 'react-native';

import {Button, Separator} from '../..';

import {Container} from './style';

export const ContentButtonGroupSocialLoginIntro = () => {
  return (
    <Container>
      <Button title="Entrar com email" variant="contained" icon="email" />
      <Separator height={20} />
      <Button title="Entrar com google" variant="outlined" icon="gmail" />
      <Separator height={20} />
      <Button title="Entrar com facebook" variant="outlined" icon="facebook" />
    </Container>
  );
};
