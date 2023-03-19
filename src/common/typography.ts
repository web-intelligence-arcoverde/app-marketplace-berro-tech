import {scale} from '../utils';

import EStyleSheet from 'react-native-extended-stylesheet';

export const Typography = EStyleSheet.create({
  h1: {
    fontFamily: 'Inter-Regular',
    fontSize: scale(20),
    lineHeight: scale(40),
  },
  h2: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scale(18),
    lineHeight: scale(26),
    fontWeight: 600,
  },
  h3: {
    fontFamily: 'Inter-Regular',
    fontSize: scale(16),
    lineHeight: scale(28),
    fontWeight: 400,
  },

  h4: {
    fontFamily: 'Inter-Regular',
    fontSize: scale(14),
    lineHeight: scale(21),
  },

  h5: {
    fontFamily: 'Inter-Regular',
    fontSize: scale(12),
    lineHeight: scale(19),
  },

  button: {
    fontFamily: 'Inter-Regular',
    fontSize: scale(14),
    lineHeight: scale(21),
    fontWeight: 500,
  },

  input: {
    fontFamily: 'Inter-Regular',
    fontSize: scale(14),
    lineHeight: scale(20),
    fontWeight: 500,
  },
});
