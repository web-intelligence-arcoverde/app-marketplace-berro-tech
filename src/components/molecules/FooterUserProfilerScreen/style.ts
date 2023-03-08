import styled from 'styled-components/native';
import {COLORS} from '../../../common';
import {scale} from '../../../utils';

export const Container = styled.View`
  flex-direction: row;
  padding-vertical: ${scale(20)};

  border-top-width: 1px;
  border-bottom-width: 1px;

  border-top-color: ${COLORS.light._02};
  border-bottom-color: ${COLORS.light._02};
`;
