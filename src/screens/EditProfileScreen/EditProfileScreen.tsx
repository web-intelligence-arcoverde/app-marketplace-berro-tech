import {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {
  Text,
  Separator,
  KeyboardContainer,
  EditProfileLocationInformation,
  EditProfileBasicInformations,
} from '../../components';

import {HeaderDashboard} from '../../components';

import {getBottomSpaceHeight} from '../../utils';

const renderSteps = {
  0: EditProfileBasicInformations,
  1: EditProfileLocationInformation,
};

export const EditProfileScreen = () => {
  const [step, setStep] = useState(0);

  const Steps = renderSteps[step];

  return (
    <KeyboardContainer>
      <HeaderDashboard />
      <View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => setStep(0)}
            style={{
              flexDirection: 'column',
              paddingHorizontal: 20,
              paddingVertical: 20,
            }}>
            <Text typography="h4">Editar </Text>
            <Text typography="h4">Conta</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setStep(1)}
            style={{
              flexDirection: 'column',
              paddingHorizontal: 20,
              paddingVertical: 20,
            }}>
            <Text typography="h4">Editar </Text>
            <Text typography="h4">Localização</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Steps />

      <Separator height={getBottomSpaceHeight()} />
    </KeyboardContainer>
  );
};
