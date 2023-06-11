import styled from 'styled-components/native';
import {scale} from '../../../utils';

export const ContainerProduct = styled.TouchableOpacity`
  width: ${scale(290)};
  margin-right: ${scale(12)};
`;

export const Container = styled.ScrollView`
  width: 100%;
  margin-horizontal: ${scale(20)};
`;
