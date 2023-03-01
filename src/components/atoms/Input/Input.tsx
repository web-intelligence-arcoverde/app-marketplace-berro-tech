import {Input as Default} from '@rneui/themed';
import {Typography} from '../../../common';

export const Input = () => {
  const typography = Typography['input'];

  return (
    <Default
      label="Email"
      placeholder="Seu melhor email"
      containerStyle={{
        borderColor: '#F2F1F7',
        borderWidth: 1,
        borderRadius: 6,
        paddingTop: 16,
      }}
      inputStyle={{borderWidth: 0, color: '#9C99AD'}}
      inputContainerStyle={{borderBottomColor: '#fff'}}
      labelStyle={typography}
      textContentType="emailAddress"
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
    />
  );
};
