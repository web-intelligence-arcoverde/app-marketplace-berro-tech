import styled from 'styled-components/native';
import {COLORS, SIZES} from '../../../common';
import {scale} from '../../../utils';

const borderColor = COLORS['light']['_04'];

export const Container = styled.View`
  border-radius: ${SIZES.borderRadius.small};

  border-bottom-color: ${borderColor};
  border-bottom-width: ${scale(1.5)};

  padding-horizontal: ${SIZES.paddingHorizontal.regular};
  padding-vertical: ${SIZES.paddingVertical.regular};
  gap: ${scale(20)};
`;
