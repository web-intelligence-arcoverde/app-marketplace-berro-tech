import styled from 'styled-components/native';
import {COLORS} from '../../../common';

import {scale} from '../../../utils';

export const Container = styled.View`
  padding-vertical: ${scale(20)};
  padding-horizontal: ${scale(16)};

  border-right-width: 1;
  border-right-color: ${COLORS.light._02};

  border-left-width: 1;
  border-left-color: ${COLORS.light._02};
`;

export const ContainerHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
