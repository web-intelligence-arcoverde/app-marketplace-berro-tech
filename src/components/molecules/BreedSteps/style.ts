import styled from 'styled-components/native';
import {scale} from '../../../utils';

interface IStepItem {
  isActive?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  border-radius: ${scale(6)};
`;

export const StepItem = styled.TouchableOpacity<IStepItem>`
  padding-horizontal: ${scale(36)};
  padding-vertical: ${scale(12)};

  background-color: ${({isActive}) => (isActive ? '#F8F3DF' : '#fff')};

  border-width: ${({isActive}) => (isActive ? 0 : 1)};

  border-left-width: ${({isActive}) => (isActive ? 0 : 1)};
  border-right-width: ${({isActive}) => (isActive ? 0 : 1)};

  border-color: ${({isActive}) => (isActive ? '#fff' : '#F2F1F7')};
`;
