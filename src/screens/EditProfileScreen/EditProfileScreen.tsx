import {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {
  Text,
  Separator,
  KeyboardContainer,
  EditProfileLocationInformation,
  EditProfileBasicInformations,
  StepsEditProfileScreen,
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
      <StepsEditProfileScreen />
      <Separator height={28} />
      <Steps />

      <Separator height={getBottomSpaceHeight()} />
    </KeyboardContainer>
  );
};
