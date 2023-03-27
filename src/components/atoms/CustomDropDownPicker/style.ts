import {scale} from '../../../utils';
import EStyleSheet from 'react-native-extended-stylesheet';

export const InputStyle = EStyleSheet.create({
  contained: {
    containerStyle: {
      borderColor: '#F2F1F7',
      borderWidth: 1,
      borderRadius: scale(6),
      backgroundColor: '#FAFAFC',
      width: '100%',
      paddingHorizontal: scale(16),
      paddingVertical: scale(16),
    },
  },
});
