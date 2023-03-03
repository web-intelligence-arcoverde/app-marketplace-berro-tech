import styled from 'styled-components/native';
import {COLORS} from '../../../common';
import {SIZES} from '../../../common';

const borderColor = COLORS['light']['_04'];

export const Container = styled.View`
  border-top-color: ${borderColor};
  border-top-width: 1;
  border-radius: ${SIZES.borderRadius.small};

  border-bottom-color: ${borderColor};
  border-bottom-width: 1;

  padding-horizontal: ${SIZES.paddingHorizontal.regular};
  padding-vertical: ${SIZES.paddingVertical.regular};
  gap: ${SIZES.insideSpacingSmall};
`;
