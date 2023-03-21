import {KeyboardAvoidingView} from 'react-native';

import {scale} from '../../../utils';

export const KeyboardContainer = ({children}: any) => {
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
      keyboardVerticalOffset={scale(-210)}
      behavior={'padding'}>
      {children}
    </KeyboardAvoidingView>
  );
};
