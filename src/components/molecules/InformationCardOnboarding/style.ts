import styled from 'styled-components/native';
import {COLORS} from '../../../common';
import {scale} from '../../../utils';

export const Container = styled.View`
  width: 100%;
  background-color: ${COLORS.sub_brand._04};
  padding-horizontal: ${scale(20)};
  padding-vertical: ${scale(28)};
  border-radius: ${scale(6)};
  border-width: 1;
  border-color: ${COLORS.light._02};
`;

export const IconContainer = styled.View`
  background-color: ${COLORS.light._05};
  padding-horizontal: ${scale(14)};
  padding-vertical: ${scale(14)};
  width: 48px;
  border-radius: ${scale(6)};
  border-width: 1;
  border-color: ${COLORS.light._02};
  flex-direction: column;
  align-items: center;
`;
