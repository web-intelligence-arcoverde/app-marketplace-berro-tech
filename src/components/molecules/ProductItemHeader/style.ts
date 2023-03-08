import styled from 'styled-components/native';

import {scale} from '../../../utils';

export const Container = styled.View`
  padding-vertical: ${scale(20)};
  padding-horizontal: ${scale(16)};
`;

export const ContainerHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
