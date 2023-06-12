import styled from 'styled-components/native';
import {scale} from '../../../utils';

export const Container = styled.View`
  position: relative;
`;

export const StyledImage = styled.Image`
  width: 100%;
  height: ${scale(120)}px;
  border-radius: ${scale(6)}px;
  margin-bottom: ${scale(12)}px;
`;

export const CapeIcon = styled.View`
  position: absolute;
  top: ${scale(12)}px;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: ${scale(6)}px;
  padding-horizontal: ${scale(12)}px;
  padding-vertical: ${scale(4)}px;
  left: ${scale(16)}px;
`;

export const DeleteIconContainer = styled.TouchableOpacity`
  position: absolute;
  top: ${scale(16)}px;
  right: ${scale(16)}px;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: ${scale(6)}px;
  padding-horizontal: ${scale(8)}px;
  padding-vertical: ${scale(4)}px;
`;
