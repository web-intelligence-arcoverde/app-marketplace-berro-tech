import styled from 'styled-components/native';
import {scale} from '../../../utils';

export const Container = styled.ScrollView`
  z-index: -1;
  elevation: -1;
`;

export const ContainerProduct = styled.View`
  flex: 1;
  padding-horizontal: ${scale(20)}px;
`;
