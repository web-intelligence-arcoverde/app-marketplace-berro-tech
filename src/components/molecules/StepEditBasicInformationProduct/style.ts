import styled from 'styled-components/native';

import {scale} from '../../../utils';

export const Container = styled.ScrollView`
  padding-horizontal: ${scale(20)};
  padding-vertical: ${scale(20)};
`;

export const CustomContainer = styled.View`
  gap: ${scale(20)};
`;
