import styled from 'styled-components/native';
import {scale} from '../../utils';
import {COLORS} from '../../common';

export const LayoutContainer = styled.View`
  padding-horizontal: ${scale(20)};
  padding-vertical: ${scale(20)};
  border-bottom-width: 1.5;
  border-bottom-color: #f2f1f7;
`;

export const ButtonToogle = styled.TouchableOpacity<{isOn: boolean}>`
  position: relative;
  width: 50px;
  height: 25px;
  border-radius: 50px;
  border: none;
  background-color: ${props =>
    props.isOn ? `${COLORS.sub_brand._03}` : `${COLORS.light._02}`};
  cursor: pointer;
  margin-right: 24px;

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: ${props => (props.isOn ? '27px' : '2px')};
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-color: ${props =>
      props.isOn ? `${COLORS.sub_brand._02}` : `${COLORS.light._05}`};

    transition: left 0.3s ease-in-out;
  }
`;
