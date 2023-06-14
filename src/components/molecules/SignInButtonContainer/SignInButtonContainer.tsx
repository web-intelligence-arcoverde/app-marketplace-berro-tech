import {Button} from '../../';
import {View} from 'react-native';
import {useContext} from 'react';

import {ContextSignUpScreenStep} from '../../../context';
import {useNavigationHook} from '../../../hooks';

const BUTTON_SIGN_IN_ONLY_SHOW_STEP = 0;

export const SignInButtonContainer = () => {
  const {steps} = useContext(ContextSignUpScreenStep);

  const SHOW_BUTTON_SIGN_IN = steps === BUTTON_SIGN_IN_ONLY_SHOW_STEP;

  const {goToRouter} = useNavigationHook();

  return (
    <>
      {SHOW_BUTTON_SIGN_IN && (
        <View style={{paddingHorizontal: 20}}>
          <Button
            title="Já tenho uma conta"
            variant="containedSecondary"
            onPress={() => goToRouter('SignInScreen')}
          />
        </View>
      )}
    </>
  );
};
