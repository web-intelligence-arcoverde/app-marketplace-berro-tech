import styled from 'styled-components/native';

import {scale} from '../../../utils';

interface SeparatorProps {
  height?: number;
  width?: number;
}

export const Separator = styled.View<SeparatorProps>`
  height: ${({height}) => scale(height || 2)}px;
  width: ${({width}) => scale(width || 2)}px;
`;
