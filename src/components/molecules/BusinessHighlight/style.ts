import styled from 'styled-components/native';

import {COLORS} from '../../../common';
import {scale} from '../../../utils';

export const Container = styled.View`
  margin-top: ${scale(32)};
  padding-bottom: ${scale(56)};
  background-color: ${COLORS.light_05};
  border-bottom-width: 1;
  border-bottom-color: ${COLORS.light._02};
`;

export const TitleContainer = styled.View`
  padding-left: ${scale(20)};
`;
