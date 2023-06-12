import styled from 'styled-components/native';
import {scale} from '../../../utils';

export const Container = styled.View`
  flex: 1;
  padding-horizontal: ${scale(20)};
  padding-vertical: ${scale(20)};
`;

export const ContainerInformation = styled.View`
  padding-horizontal: ${scale(20)};
  padding-vertical: ${scale(28)};
  border-width: ${scale(1)};
  border-color: #f2f1f7;
  border-radius: ${scale(6)};
`;

export const ContainerFileList = styled.ScrollView`
  margin-top: ${scale(10)};
  padding-horizontal: ${scale(20)};
  padding-vertical: ${scale(28)};
  border-width: ${scale(1)};
  border-color: #f2f1f7;
  border-radius: ${scale(6)};
`;

export const ContainerFooter = styled.View`
  margin-top: ${scale(20)};
  flex-direction: row;
  width: 98%;
`;

export const AddNewFileButton = styled.TouchableOpacity`
  width: ${scale(56)};
  height: ${scale(56)};
  flex-direction: column;
  align-items: center;
  border-width: ${scale(1)};
  border-color: #f2f1f7;
  border-radius: ${scale(6)};
  justify-content: center;
`;
