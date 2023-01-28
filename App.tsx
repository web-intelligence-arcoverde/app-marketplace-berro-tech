import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {RouterApp} from './src/routers/router';

export default function App() {
  return (
    <NavigationContainer>
      <RouterApp />
    </NavigationContainer>
  );
}
