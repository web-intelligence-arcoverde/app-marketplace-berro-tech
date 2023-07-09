import React from 'react';

import {Button, Separator, Text} from '../..';

import {useAppDispatch} from '../../../hooks';

import {Container} from './style';

import {SIZES} from '../../../common';
import {changerStepRecoveryAccount} from '../../../store/reducer/auth/actions';

interface IDescriptionInformationUserRecoveryAccountScreen {
  email: string;
}

export const DescriptionInformationUserRecoveryAccountScreen = ({
  email,
}: IDescriptionInformationUserRecoveryAccountScreen) => {
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Button
        title="Volta"
        onPress={() => {
          dispatch(changerStepRecoveryAccount(0));
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
