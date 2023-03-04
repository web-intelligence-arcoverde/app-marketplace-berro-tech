import styled from 'styled-components/native';
import {COLORS, SIZES} from '../../../common';
import {scale} from '../../../utils';

const borderColor = COLORS['light']['_04'];

export const Container = styled.View`
  border-top-color: ${borderColor};
  border-top-width: ${scale(1)};

  border-bottom-color: ${borderColor};
  border-bottom-width: ${scale(1)};

  padding-horizontal: ${SIZES.insideSpacingSmall};
  padding-vertical: ${SIZES.insideSpacingSmall};
`;
