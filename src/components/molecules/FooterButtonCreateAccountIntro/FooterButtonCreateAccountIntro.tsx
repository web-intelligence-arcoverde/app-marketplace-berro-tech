import {Separator, Button} from '../..';
import {Container} from './style';

import {useNavigationHook} from '../../../hooks';

export const FooterButtonCreateAccountIntro = () => {
  const {goToRouter} = useNavigationHook();

  return (
    <Container>
      <Separator height={20} />
      <Button
        title="Criar conta"
        variant="containedSecondary"
        icon="user"
        onPress={() => goToRouter('SignUpScreen')}
      />
    </Container>
  );
};
