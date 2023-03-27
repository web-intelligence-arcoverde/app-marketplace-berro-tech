import {useState} from 'react';

import {IconComponent, Text} from '../../';

import {InputStyle} from './style';

import {TouchableOpacity, View} from 'react-native';
import {scale} from '../../../utils';

export const CustomDropDownPicker = () => {
  const [focus, setFocus] = useState(false);

  const {containerStyle} = InputStyle['contained'];

  return (
    <TouchableOpacity style={containerStyle} onPress={() => setFocus(!focus)}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: scale(48),
        }}>
        <View>
          <Content focus={focus} />
        </View>
        <IconComponent icon="arrow-down" />
      </View>
    </TouchableOpacity>
  );
};

const Content = ({focus}: any) => {
  const placeholderText = !focus ? 'Animal' : 'Selecione um tipo de animal';

  const label = focus ? 'Animal' : '';

  const erroMessage = 'Error';

  return (
    <View>
      {!!label && (
        <View style={{height: scale(22)}}>
          <Text typography="h4" colorFamily="gray" colorVariant="_04">
            {label}
          </Text>
        </View>
      )}
      <View style={{height: scale(22)}}>
        <Text typography="h4" colorFamily="gray" colorVariant="_03">
          {placeholderText}
        </Text>
      </View>

      {!focus && (
        <View style={{height: scale(22)}}>
          <Text
            typography="h5"
            colorFamily="auxiliary"
            colorVariant="red_state">
            {erroMessage}
          </Text>
        </View>
      )}
    </View>
  );
};
