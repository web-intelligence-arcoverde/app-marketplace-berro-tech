import EStyleSheet from 'react-native-extended-stylesheet';
import {COLORS} from '../../../common';
import {scale} from '../../../utils';

export const style = EStyleSheet.create({
  container: {
    backgroundColor: COLORS.brand_light._01,
  },

  content: {
    flexDirection: 'row',
    paddingHorizontal: scale(20),
    paddingVertical: scale(12),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
