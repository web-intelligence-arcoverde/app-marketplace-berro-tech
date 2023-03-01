import {Separator, Button} from '../..';

import {Container} from './style';

export const FooterButtonCreateAccountIntro = () => {
  return (
    <Container>
      <Separator height={20} />
      <Button title="Criar conta" variant="containedSecondary" icon="user" />
    </Container>
  );
};
