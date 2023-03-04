import EStyleSheet from 'react-native-extended-stylesheet';

import {scale} from '../../../utils';
import {COLORS} from '../../../common';

export const styles = EStyleSheet.create({
  codeFieldRoot: {},
  cell: {
    width: scale(39),
    height: scale(55),
    lineHeight: scale(38),
    fontSize: scale(14),
    borderWidth: scale(1),
    textAlign: 'center',
    borderRadius: scale(6),
    color: COLORS.gray._04,
    paddingTop: scale(8),
    backgroundColor: COLORS.light._04,
    borderColor: COLORS.light._02,
  },
  focusCell: {
    backgroundColor: COLORS.light._04,
    borderColor: '#F2F1F7',
  },
});
