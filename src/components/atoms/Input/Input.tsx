import {Input as Default} from '@rneui/themed';
import {Typography} from '../../../common';

interface IInput {
  label?: string;
  placeholder?: string;
  password?: boolean;
}

export const Input = ({label, placeholder, password = false}: IInput) => {
  const typography = Typography['input'];

  return (
    <Default
      label={label}
      placeholder={placeholder}
      containerStyle={{
        borderColor: '#F2F1F7',
        borderWidth: 1,
        borderRadius: 6,
        paddingTop: 16,
        paddingLeft: 16,
        backgroundColor: '#FAFAFC',
      }}
      inputStyle={{
        borderWidth: 0,
        color: '#9C99AD',
        minHeight: 20,
        fontSize: 14,
      }}
      errorStyle={{margin: 0, marginBottom: 4}}
      inputContainerStyle={{borderBottomColor: '#FAFAFC'}}
      labelStyle={typography}
      textContentType="emailAddress"
      keyboardType="email-address"
      autoCapitalize="none"
      secureTextEntry={password}
      autoCorrect={false}
    />
  );
};
