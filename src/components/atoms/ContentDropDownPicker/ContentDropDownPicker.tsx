import {Text} from '../../';

import {View} from 'react-native';
import {capitalize, scale} from '../../../utils';

interface IContentDropDownPicker {
  focus: boolean;
  value: string;
  placeholder: string;
  label: string;
  errorMessage?: string;
}

export const ContentDropDownPicker = ({
  focus,
  placeholder,
  value,
  label,
  errorMessage,
}: IContentDropDownPicker) => {
  const placeholderText = focus ? placeholder : label;

  const valueText = value === '' ? placeholderText : value;

  const labelText = focus || !!value ? label : '';

  return (
    <View>
      {!!labelText && (
        <View style={{height: scale(22)}}>
          <Text
            typography="h4"
            colorFamily={value === '' ? 'gray' : 'sub_brand'}
            colorVariant={value === '' ? '_04' : '_02'}>
            {labelText}
          </Text>
        </View>
      )}
      <View style={{height: scale(22)}}>
        <Text typography="h4" colorFamily="gray" colorVariant="_03">
          {value !== '' ? capitalize(valueText) : placeholderText}
        </Text>
      </View>

      {!!errorMessage && !focus && (
        <View style={{height: scale(22)}}>
          <Text
            typography="h5"
            colorFamily="auxiliary"
            colorVariant="red_state">
            {errorMessage}
          </Text>
        </View>
      )}
    </View>
  );
};
