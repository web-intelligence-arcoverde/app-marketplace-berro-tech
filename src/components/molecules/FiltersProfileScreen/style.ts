import styled from 'styled-components/native';
import {scale} from '../../../utils';

export const Container = styled.View`
  flex-direction: row;
  padding-horizontal: ${scale(20)};
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  elevation: 999;
`;
