import {COLORS} from '../../../common';
import {scale} from '../../../utils';

import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: ${COLORS.brand_light._01};

  padding-horizontal: ${scale(20)};
  padding-vertical: ${scale(12)};
`;

export const StyledContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
