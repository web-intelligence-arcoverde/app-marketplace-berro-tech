import {View} from 'react-native';

import {Button, Separator, Text} from '../..';

import {useHookStepsRecoveryAccount} from '../../../hooks';

export const DescriptionInformationUserRecoveryAccountScreen = () => {
  const {setStep} = useHookStepsRecoveryAccount();

  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        title="Volta"
        onPress={() => setStep(0)}
        variant="outlinedSecondary"
        icon="arrow-left"
      />
      <Separator height={24} />
      <Text typography="h5" colorFamily="dark" colorVariant="_04">
        Verifique o código que enviamos pro seu email
      </Text>
      <Separator height={8} />
      <Text typography="h5" colorFamily="gray" colorVariant="_04">
        brennoguedes9@gmail.com
      </Text>
      <Separator height={24} />
    </View>
  );
};
