import styled from 'styled-components/native';
import {SIZES} from '../../../common';
import {COLORS} from '../../../common';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top-color: ${COLORS['light']['_04']};
  border-top-width: 1;
  border-radius: ${SIZES.borderRadius.regular};
  padding-horizontal: ${SIZES.paddingHorizontal.big};
  padding-vertical: ${SIZES.paddingHorizontal.big};
`;
