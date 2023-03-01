import {COLORS} from '.';
import {scale} from '../utils';

export const Typography: any = {
  h1: {
    fontFamily: 'inter',
    fontWeight: '500',
    fontSize: scale(20),
    lineHeight: scale(40),
  },
  h2: {
    fontFamily: 'inter',
    fontWeight: '600',
    fontSize: scale(18),
    lineHeight: scale(27),
  },
  h3: {
    fontFamily: 'inter',
    fontWeight: '400',
    fontSize: scale(16),
    lineHeight: scale(32),
    letterSpacing: 0.2,
  },

  h4: {
    fontFamily: 'inter',
    fontWeight: '400',
    fontSize: scale(16),
    lineHeight: scale(24),
  },

  input: {
    fontFamily: 'inter',
    fontWeight: '400',
    fontSize: scale(14),
    lineHeight: scale(20),
    color: COLORS['gray']['_04'],
  },
};
