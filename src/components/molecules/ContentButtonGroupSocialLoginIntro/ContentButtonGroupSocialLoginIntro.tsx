import {Button, Separator} from '../..';

import {Container} from './style';

export const ContentButtonGroupSocialLoginIntro = () => {
  return (
    <Container>
      <Button
        title="Entrar com email"
        variant="contained"
        icon="email"
        onPress={() => console.log('Event')}
      />
      <Separator height={20} />
      <Button
        title="Entrar com google"
        variant="outlined"
        icon="gmail"
        onPress={() => console.log('Event')}
      />
      <Separator height={20} />
      <Button
        title="Entrar com facebook"
        variant="outlined"
        icon="facebook"
        onPress={() => console.log('Event')}
      />
    </Container>
  );
};
