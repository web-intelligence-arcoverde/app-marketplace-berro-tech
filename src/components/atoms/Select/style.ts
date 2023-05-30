import styled from 'styled-components/native';
import {scale} from '../../../utils';

interface ISelectBox {
  select?: boolean;
}

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  height: ${scale(42)};
  background-color: #fff;
  align-items: center;
`;

export const SelectBox = styled.TouchableOpacity<ISelectBox>`
  border-width: 1.5;
  border-color: ${({select}) => (select ? '#1B5DE0' : '#9C99AD')};
  background-color: ${({select}) =>
    select ? 'rgba(27, 93, 255, 0.1)' : '#fff'};
  height: 20;
  width: 20;
  border-radius: 4;
`;
