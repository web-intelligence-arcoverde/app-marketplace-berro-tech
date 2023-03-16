import styled from 'styled-components/native';
import {COLORS} from '../../common';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${COLORS.brand_light._01};
`;

export const ContainerLogoImage = styled.View`
  position: absolute;
  height: 96%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerLogoWithNameImage = styled.View`
  position: absolute;
  height: 90%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
