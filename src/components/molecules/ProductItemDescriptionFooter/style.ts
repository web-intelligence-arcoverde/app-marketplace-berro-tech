import styled from 'styled-components/native';

import {scale} from '../../../utils';

import {COLORS} from '../../../common';

export const Container = styled.View`
  width: ${scale(125)};
  height: ${scale(78)};
  border-left-width: 1;
  border-left-color: ${COLORS.light._02};
  justify-content: center;
  padding-left: ${scale(20)};
`;
