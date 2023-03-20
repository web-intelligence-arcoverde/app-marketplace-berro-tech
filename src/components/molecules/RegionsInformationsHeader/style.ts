import styled from 'styled-components/native';
import {scale} from '../../../utils';
import {COLORS} from '../../../common';

export const Container = styled.View`
  padding-horizontal: ${scale(20)};
  padding-vertical: ${scale(56)};
  border-bottom-width: ${scale(1)};
  border-bottom-color: ${COLORS.light._02};
`;

export const TitleDescription = styled.View`
  width: 66%;
`;
