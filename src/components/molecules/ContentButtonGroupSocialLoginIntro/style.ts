import styled from 'styled-components/native';
import {COLORS} from '../../../common';
import {scale} from '../../../utils';

const borderColor = COLORS['light']['_04'];

export const Container = styled.View`
  border-top-color: ${borderColor};
  border-top-width: ${scale(1)};
  border-radius: ${scale(6)};

  border-bottom-color: ${borderColor};
  border-bottom-width: ${scale(1)};

  padding-horizontal: ${scale(20)};
  padding-vertical: ${scale(32)};
`;
