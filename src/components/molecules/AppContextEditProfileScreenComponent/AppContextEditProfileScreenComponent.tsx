import {ProviderStepsFormSignUp} from '../../../context/ContextSignUpScreenStep';
import {SignInButtonContainer, StepsFormSignUpContainer} from '../..';

export const AppContextSignUpScreenComponent = () => {
  return (
    <ProviderStepsFormSignUp>
      <StepsFormSignUpContainer />
      <SignInButtonContainer />
    </ProviderStepsFormSignUp>
  );
};
