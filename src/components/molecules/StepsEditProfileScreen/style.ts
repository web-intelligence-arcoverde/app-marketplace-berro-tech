import styled from 'styled-components/native';
import {scale} from '../../../utils';

interface IStepItem {
  isActive?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
`;

export const StepItem = styled.TouchableOpacity<IStepItem>`
  padding-horizontal: ${scale(20)};
  padding-vertical: ${scale(12)};

  width: 35%;

  background-color: #fff;

  border-width: 1;
  border-color: #f2f1f7;

  border-bottom-width: ${({isActive}) => (isActive ? 2 : 1)};
  border-bottom-color: ${({isActive}) => (isActive ? '#FFCB04' : '#F2F1F7')};
`;
