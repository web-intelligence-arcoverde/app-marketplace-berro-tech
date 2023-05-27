import styled from 'styled-components/native';
import {scale} from '../../../utils';

export const Container = styled.View`
  position: relative;
`;

export const ItemDropdown = styled.TouchableOpacity`
  padding: ${scale(20)}px;
`;

export const DropdownContainer = styled.View`
  position: absolute;
  display: flex;
  background-color: #fcfcfa;
  min-width: 120;
  z-index: 999;
  elevation: 999;
  top: 52;
  right: 2;
  border-width: 1;
  border-color: #f2f1f7;
  border-radius: ${scale(6)};
`;
