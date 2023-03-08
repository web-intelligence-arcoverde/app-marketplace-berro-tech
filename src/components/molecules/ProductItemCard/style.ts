import styled from 'styled-components/native';

import {scale} from '../../../utils';
import {COLORS} from '../../../common';

export const Container = styled.View``;

export const ContainerFoorterDescription = styled.View`
  border-width: 1;
  border-color: ${COLORS.light._02};
  flex-direction: row;
`;

export const ImageContainer = styled.Image`
  width: ${scale(335)};
  height: ${scale(288)};
  border-top-left-radius: ${scale(6)};
  border-top-right-radius: ${scale(6)};
`;
