import styled from 'styled-components/native';
import {scale} from '../../../utils';
import {COLORS} from '../../../common';

interface ISelectFilter {
  selected?: boolean;
}

export const SelectFilterSpecific = styled.TouchableOpacity<ISelectFilter>`
  padding-vertical: ${scale(20)};
  padding-horizontal: ${scale(16)};

  background-color: ${({selected}) =>
    selected ? `${COLORS.sub_brand._03}` : '#fff'};

  border-left-color: ${({selected}) =>
    selected ? `${COLORS.sub_brand._02}` : 'none'};

  border-left-width: ${({selected}) => (selected ? `${scale(3)}` : '0')};
`;
