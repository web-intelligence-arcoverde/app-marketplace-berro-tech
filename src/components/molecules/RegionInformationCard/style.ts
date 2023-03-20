import styled from 'styled-components/native';
import {COLORS} from '../../../common';
import {scale} from '../../../utils';

export const Container = styled.View`
  background-color: ${COLORS.light._04};
  padding-horizontal: ${scale(20)};
  padding-vertical: ${scale(28)};
  width: ${scale(300)};
  border-width: ${scale(1)};
  border-color: ${COLORS.light._02};
`;

interface IIconContainer {
  backgroundColor: string;
}

export const IconContainer = styled.View<IIconContainer>`
  padding-horizontal: ${scale(12)};
  padding-vertical: ${scale(12)};
  width: ${scale(48)};
  border-radius: ${scale(6)};
  align-content: center;
  justify-content: center;
  background-color: ${({backgroundColor}) =>
    backgroundColor ? backgroundColor : '#fff'};
`;
