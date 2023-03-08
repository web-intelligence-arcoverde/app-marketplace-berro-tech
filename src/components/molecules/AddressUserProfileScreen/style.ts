import styled from 'styled-components/native';

import {scale} from '../../../utils';
import {COLORS} from '../../../common';

export const Container = styled.View`
  padding-vertical: ${scale(20)};

  border-top-width: 1px;
  border-top-color: ${COLORS.light._02};
`;

export const ContainerImage = styled.Image`
  width: ${scale(96)};
  height: ${scale(96)};
`;
