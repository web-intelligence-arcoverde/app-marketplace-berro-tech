import styled from 'styled-components/native';
import {scale} from '../../../utils';

export const ButtonContainer = styled.TouchableOpacity`
  border-width: 1;
  border-color: #f2f1f7;
  border-radius: ${scale(6)};
  padding-horizontal: ${scale(12)};
  padding-vertical: ${scale(12)};
`;
