import styled from 'styled-components/native';

import {scale} from '../../../utils';
import {COLORS} from '../../../common';

export const Container = styled.TouchableOpacity``;

export const ContainerFoorterDescription = styled.View`
  border-width: 1;
  border-color: ${COLORS.light._02};
  flex-direction: row;
  height: 100px;
  align-items: center;
  z-index: -2;
  elevation: -2;
`;

export const ImageContainer = styled.Image`
  width: 100%;
  height: ${scale(288)};
  border-top-left-radius: ${scale(6)};
  border-top-right-radius: ${scale(6)};
  resize-mode: stretch;
  z-index: -2;
  elevation: -2;
`;
