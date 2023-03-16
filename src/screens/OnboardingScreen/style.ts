import styled from 'styled-components/native';
import {COLORS} from '../../common';
import {scale} from '../../utils';

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: ${COLORS.brand_light._04};
  padding-horizontal: ${scale(20)};
`;
