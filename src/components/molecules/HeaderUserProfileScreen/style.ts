import styled from 'styled-components/native';

import {scale} from '../../../utils';

export const Container = styled.View`
  flex-direction: row;
  padding-vertical: ${scale(20)};
`;

export const ContainerImage = styled.Image`
  width: ${scale(96)};
  height: ${scale(96)};
`;
