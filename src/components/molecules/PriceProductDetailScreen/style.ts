import styled from 'styled-components/native';
import {scale} from '../../../utils';

export const Container = styled.View`
  padding-horizontal: ${scale(20)};
  padding-vertical: ${scale(20)};
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  border-bottom-width: 1.5;
  border-bottom-color: #f2f1f7;
`;
