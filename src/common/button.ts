import {scale} from '../utils';
import {COLORS} from './colors';

export const ButtonStyle = {
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
};
