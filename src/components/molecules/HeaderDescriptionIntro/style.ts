import styled from 'styled-components/native';
import {scale} from '../../../utils';
import {COLORS} from '../../../common';

const color = COLORS['light']['_04'];

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top-color: ${color};
  border-top-width: ${scale(1)};
  border-radius: ${scale(6)};
  padding-horizontal: ${scale(20)};
  padding-vertical: ${scale(32)};
`;
