import React from 'react';
import {render} from '@testing-library/react-native';
import type {RenderOptions} from '@testing-library/react-native';
import {ProviderRedux} from '../components/';

export const renderWithProviders = (
  ui: React.ReactElement,
  options?: RenderOptions,
) => render(ui, {wrapper: ProviderRedux, ...options});
