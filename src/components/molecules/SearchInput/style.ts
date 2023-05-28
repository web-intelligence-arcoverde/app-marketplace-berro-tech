import EStyleSheet from 'react-native-extended-stylesheet';
import {COLORS} from '../../../common';
import {scale} from '../../../utils';

export const inputSearch = EStyleSheet.create({
  container: {
    backgroundColor: COLORS.light._05,
    width: '80%',
    padding: scale(16),
    flexDirection: 'row',
    height: scale(52),
    borderRadius: scale(6),
    marginLeft: scale(20),
  },

  input: {
    width: '86%',
    height: '100%',
    marginLeft: scale(8),
  },
});
