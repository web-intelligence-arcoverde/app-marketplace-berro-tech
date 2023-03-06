import {Button, Separator, Text} from '../..';

import {useHookStepsRecoveryAccount} from '../../../hooks';

import {Container} from './style';

import {SIZES} from '../../../common';

interface IDescriptionInformationUserRecoveryAccountScreen {
  email: string;
}

export const DescriptionInformationUserRecoveryAccountScreen = ({
  email,
}: IDescriptionInformationUserRecoveryAccountScreen) => {
  const {setStep, setEmail} = useHookStepsRecoveryAccount();

  return (
    <Container>
      <Button
        title="Volta"
        onPress={() => {
          setStep(0);
          setEmail('');
        }}
        variant="outlinedSecondary"
        icon="arrow-left"
      />
      <Separator height={SIZES.insideSpacingSmall} />
      <Text typography="h5" colorFamily="dark" colorVariant="_04">
        Verifique o código que enviamos pro seu email
      </Text>
      <Separator height={SIZES.insideSpacingXSmall} />
      <Text typography="h5" colorFamily="gray" colorVariant="_04">
        {email}
      </Text>
      <Separator height={SIZES.insideSpacingSmall} />
    </Container>
  );
};
