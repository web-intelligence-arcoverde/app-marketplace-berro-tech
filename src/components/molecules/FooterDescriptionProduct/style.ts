import styled from 'styled-components/native';

import {scale} from '../../../utils';
import {COLORS} from '../../../common';

export const ContainerFoorterDescription = styled.View`
  border-width: 1;
  border-color: ${COLORS.light._02};
  flex-direction: row;
  height: ${scale(70)}px;
  margin-left: ${scale(10)};
`;
