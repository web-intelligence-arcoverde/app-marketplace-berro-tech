import {scale} from '../../../utils';
import EStyleSheet from 'react-native-extended-stylesheet';

export const InputStyle = EStyleSheet.create({
  contained: {
    containerStyle: {
      borderColor: '#F2F1F7',
      borderWidth: 1,
      borderRadius: scale(6),
      backgroundColor: '#FAFAFC',
      paddingHorizontal: scale(16),
      paddingVertical: scale(8),
      margin: 0,
      padding: 0,
    },

    inputContainerStyle: {
      borderBottomColor: '#FAFAFC',
      margin: 0,
      padding: 0,
      height: scale(22),
      minHeight: scale(22),
    },

    inputStyle: {
      color: '#737185',
      fontSize: scale(14),
      fontFamily: 'Inter-Regular',
      margin: 0,
      padding: 0,
    },

    labelStyle: {color: '#9C99AD'},

    errorStyle: {margin: 0, padding: 0},

    leftIconContainerStyle: {padding: 0, minHeight: scale(22)},
    rightIconContainerStyle: {padding: 0, minHeight: scale(22)},
  },

  containedSecondary: {
    containerStyle: {
      borderColor: '#F2F1F7',
      borderWidth: 1,
      borderRadius: scale(6),
      backgroundColor: '#FAFAFC',
      margin: 0,
      padding: 0,
      paddingTop: scale(16),
      paddingHorizontal: scale(16),
    },

    inputContainerStyle: {
      borderBottomColor: '#FAFAFC',
      margin: 0,
      padding: 0,
      height: scale(22),
    },

    inputStyle: {
      color: '#9C99AD',
      fontSize: scale(14),
      margin: 0,
      padding: 0,
    },
    labelStyle: {color: 'red'},
    errorStyle: {margin: 0, padding: 0, height: scale(22)},

    leftIconContainerStyle: {padding: 0, minHeight: scale(22)},
    rightIconContainerStyle: {padding: 0, minHeight: scale(22)},
  },
});
