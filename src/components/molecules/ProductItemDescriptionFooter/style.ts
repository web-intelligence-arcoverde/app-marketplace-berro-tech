import styled from 'styled-components/native';

import { scale } from '../../../utils';

import { COLORS } from '../../../common';

export const Container = styled.View`
  padding-vertical: ${scale(12)};
  width: ${scale(90)};
  border-left-width: 1;
  border-left-color: ${COLORS.light._02};
  padding-left: ${scale(12)};
  
`;
