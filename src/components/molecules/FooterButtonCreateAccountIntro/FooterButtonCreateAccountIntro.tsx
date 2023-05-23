import {Separator, Button} from '../..';
import {useNavigationHook} from '../../../hooks';

import {Container} from './style';

export const FooterButtonCreateAccountIntro = () => {
  const {goToRouter} = useNavigationHook();

  return (
    <Container>
      <Separator height={42} />
      <Button
        title="Criar conta"
        variant="containedSecondary"
        icon="user"
        onPress={() => goToRouter('SignUpScreen')}
      />
    </Container>
  );
};
