import EStyleSheet from 'react-native-extended-stylesheet';
import {COLORS} from '../../../common';
import {scale} from '../../../utils';

export const inputSearch = EStyleSheet.create({
  container: {
    backgroundColor: COLORS.light._05,
    width: scale(268),
    padding: scale(14),
    flexDirection: 'row',
    height: scale(52),
    borderRadius: scale(6),
  },

  input: {
    width: '84%',
    height: '100%',
    marginLeft: scale(8),
    fontSize: scale(14),
    color: COLORS.gray._02,
  },
});
