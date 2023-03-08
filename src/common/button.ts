import {scale} from '../utils';
import {COLORS} from './colors';

import EStyleSheet from 'react-native-extended-stylesheet';

export const ButtonStyle = EStyleSheet.create({
  contained: {
    containerStyle: {
      width: '100%',
    },

    titleStyle: {
      color: COLORS.brand_dark._01,
      fontFamily: 'inter',
      fontSize: scale(14),
      marginLeft: scale(14),
    },

    buttonStyle: {
      backgroundColor: COLORS.brand_light._01,
      height: scale(52),
      borderRadius: scale(6),
    },
  },

  containedSecondary: {
    containerStyle: {
      width: '100%',
    },

    titleStyle: {
      color: COLORS.brand_dark._02,
      fontFamily: 'inter',
      fontSize: scale(14),

      marginLeft: scale(14),
    },

    buttonStyle: {
      backgroundColor: COLORS.brand_light._02,
      height: scale(52),
      borderRadius: scale(6),
    },
  },

  containedThirdy: {
    containerStyle: {
      width: '100%',
    },

    titleStyle: {
      color: COLORS.sub_brand._04,
      fontFamily: 'inter',
      fontSize: scale(14),
      fontWeight: 600,
      marginLeft: scale(14),
    },

    buttonStyle: {
      backgroundColor: COLORS.sub_brand._02,
      height: scale(52),
      borderRadius: scale(6),
    },
  },

  containedFour: {
    containerStyle: {
      width: '100%',
    },

    titleStyle: {
      color: COLORS.sub_brand._02,
      fontFamily: 'inter',
      fontSize: scale(14),
      fontWeight: 600,
      marginLeft: scale(14),
    },

    buttonStyle: {
      backgroundColor: COLORS.sub_brand._03,
      height: scale(36),
      borderRadius: scale(6),
    },
  },

  outlined: {
    containerStyle: {
      width: '100%',
    },

    titleStyle: {
      color: COLORS.gray._02,
      fontFamily: 'inter',
      fontSize: scale(14),

      marginLeft: scale(14),
    },

    buttonStyle: {
      backgroundColor: COLORS.light._05,
      height: scale(52),
      borderRadius: scale(6),
      borderWidth: 1,
      borderColor: COLORS.light._02,
    },
  },

  outlinedSecondary: {
    containerStyle: {
      width: '100%',
    },

    titleStyle: {
      color: COLORS.gray._02,
      fontFamily: 'inter',
      fontSize: scale(14),

      marginLeft: scale(14),
    },

    buttonStyle: {
      backgroundColor: COLORS.light._05,
      height: scale(36),
      width: scale(90),
      borderRadius: scale(6),
      borderWidth: 1,
      borderColor: COLORS.light._02,
    },
  },

  outlinedThirdy: {
    containerStyle: {
      width: '100%',
    },

    titleStyle: {
      color: COLORS.gray._02,
      fontFamily: 'inter',
      fontSize: scale(14),
    },

    buttonStyle: {
      backgroundColor: COLORS.light._05,
      height: scale(36),
      width: scale(104),
      borderRadius: scale(6),
      borderWidth: 1,
      borderColor: COLORS.light._02,
    },
  },

  outlinedThirdyWithIcon: {
    containerStyle: {
      width: '100%',
    },

    titleStyle: {
      color: COLORS.gray._02,
      fontFamily: 'inter',
      fontSize: scale(14),
      marginLeft: scale(14),
    },

    buttonStyle: {
      backgroundColor: COLORS.light._05,
      height: scale(36),
      width: scale(134),
      borderRadius: scale(6),
      borderWidth: 1,
      borderColor: COLORS.light._02,
    },
  },

  none: {
    containerStyle: {
      width: '100%',
    },

    titleStyle: {
      color: COLORS.sub_brand._02,
      fontFamily: 'inter',
      fontSize: scale(14),

      marginLeft: 0,
    },

    buttonStyle: {
      backgroundColor: COLORS.light._05,
    },
  },

  disabled: {
    containerStyle: {
      width: '100%',
    },

    titleStyle: {
      color: COLORS.gray._03,
      fontFamily: 'inter',
      fontSize: scale(14),

      marginLeft: 0,
    },

    buttonStyle: {
      backgroundColor: COLORS.light._02,
      height: scale(52),
      borderRadius: scale(6),
    },
  },
});
