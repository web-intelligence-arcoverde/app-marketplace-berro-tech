import styled from 'styled-components/native';

import {scale} from '../../../utils';

export const Container = styled.View`
  flex: 1;
  padding-horizontal: ${scale(20)};
  padding-vertical: ${scale(20)};
`;

export const TouchContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-style: dashed;
  border-color: #f2f1f7;
  backgroundcolor: #fafafc;
  borderradius: ${scale(6)};
  border-width: ${scale(2)};
`;
