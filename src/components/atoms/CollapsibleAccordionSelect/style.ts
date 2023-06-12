import styled from 'styled-components/native';
import {scale} from '../../../utils';
import {COLORS} from '../../../common';

export const HeaderCollapsibleAccordionSelect = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  height: ${scale(42)}px;
  align-items: center;
  justify-content: space-between;
`;

export const CollapsibleAccordionSelectListContainer = styled.View`
  height: ${scale(120)}px;
`;

export const Input = styled.TextInput`
  width: 86%;
  height: ${scale(42)}px;
  padding-left: ${scale(10)}px;
  font-size: ${scale(14)};
  color: ${COLORS.gray._02};
`;

export const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  height: ${scale(42)}px;
  background-color: #fff;
  align-items: center;
`;
