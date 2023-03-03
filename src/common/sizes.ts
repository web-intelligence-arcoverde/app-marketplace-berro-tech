import {scale} from '../utils';

export const SIZES = {
  paddingHorizontal: {
    small: scale(14),
    regular: scale(16),
    big: scale(20),
    large: scale(24),
    xLarge: scale(32),
  },
  paddingVertical: {
    small: scale(14),
    regular: scale(16),
    big: scale(20),
    large: scale(24),
    xLarge: scale(32),
  },

  // Icons size
  smallIconWidth: scale(18),
  smallIconHeight: scale(18),
  mediumIconHeight: scale(40),
  mediumIconWidth: scale(40),
  largeIconHeight: scale(60),
  largeIconWidth: scale(60),

  borderRadius: {
    small: scale(2),
    regular: scale(6),
  },

  // Font Sizes
  font: {
    small: scale(14),
    regular: scale(16),
    big: scale(20),
    large: scale(24),
    xLarge: scale(32),
  },

  lineHeight: {
    small: scale(16),
    medium: scale(18),
    xMedium: scale(24),
    large: scale(32),
  },

  // Spacing
  insideNoSpacing: 0,
  insideSpacingXSmall: scale(8),
  insideSpacingSmall: scale(16),
  insideSpacingMedium: scale(24),
  insideSpacingXMedium: scale(32),
  insideSpacingLarge: scale(40),

  dividerNoSpacing: 0,
  dividerSpacingXSmall: scale(12),
  dividerSpacingSmall: scale(20),
  dividerSpacingMedium: scale(36),
  dividerSpacingBig: scale(60),
  dividerSpacingLarge: scale(120),
};
