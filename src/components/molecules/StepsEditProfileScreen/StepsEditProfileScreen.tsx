import {View, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import {Text} from '../../';

import {StepItem} from './style';
import {Separator} from '../../atoms';

export const StepsEditProfileScreen = () => {
  const [step, setStep] = useState(0);

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <StepItem isActive={step === 0} onPress={() => setStep(0)}>
          <Text typography="h4" colorFamily="gray" colorVariant="_04">
            Editar
          </Text>
          <Separator height={8} />
          <Text
            typography="h4"
            colorFamily="gray"
            colorVariant={step === 0 ? '_01' : '_03'}>
            Conta
          </Text>
        </StepItem>
        <StepItem isActive={step === 1} onPress={() => setStep(1)}>
          <Text typography="h4" colorFamily="gray" colorVariant="_04">
            Editar
          </Text>
          <Separator height={8} />
          <Text
            typography="h4"
            colorFamily="gray"
            colorVariant={step === 1 ? '_01' : '_03'}>
            Localização
          </Text>
        </StepItem>
      </View>
    </View>
  );
};
