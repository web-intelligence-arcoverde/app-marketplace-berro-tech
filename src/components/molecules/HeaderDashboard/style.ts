import EStyleSheet from 'react-native-extended-stylesheet';
import {COLORS} from '../../../common';
import {scale} from '../../../utils';

export const style = EStyleSheet.create({
  container: {
    width: '100%',

    backgroundColor: COLORS.brand_light._01,
  },

  content: {
    paddingHorizontal: scale(20),
    paddingVertical: scale(12),
    alignItems: 'center',
    flexDirection: 'row',
  },
});
