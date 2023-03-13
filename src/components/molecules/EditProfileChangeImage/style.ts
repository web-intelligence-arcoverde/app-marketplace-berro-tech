import styled from 'styled-components/native';
import {scale} from '../../../utils';

export const Container = styled.TouchableOpacity`
  width: auto;
  height: ${scale(266)};
  border-radius: ${scale(6)};

  align-items: center;
  justify-content: center;

  background: rgba(77, 75, 92, 0.75);
`;

export const IconContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.15);
  padding-vertical: ${scale(14)};
  padding-horizontal: ${scale(14)};
  border-radius: ${scale(100)};
  position: absolute;
  z-index: 1;
`;
