import {scale} from '../utils';

import EStyleSheet from 'react-native-extended-stylesheet';

export const Typography = EStyleSheet.create({
  h1: {
    fontFamily: 'inter',
    fontSize: scale(20),
    lineHeight: scale(40),
  },
  h2: {
    fontFamily: 'inter',
    fontSize: scale(18),
    lineHeight: scale(26),
    fontWeight: 600,
  },
  h3: {
    fontFamily: 'inter',
    fontSize: scale(16),
    lineHeight: scale(28),
    fontWeight: 400,
  },

  h4: {
    fontFamily: 'inter',
    fontSize: scale(14),
    lineHeight: scale(21),
  },

  h5: {
    fontFamily: 'inter',
    fontSize: scale(12),
    lineHeight: scale(19),
  },

  button: {
    fontFamily: 'inter',
    fontSize: scale(14),
    lineHeight: scale(21),
    fontWeight: 500,
  },

  input: {
    fontFamily: 'inter',
    fontSize: scale(14),
    lineHeight: scale(20),
  },
});
