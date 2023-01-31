import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {RouterApp} from './src/routers/router';

import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RouterApp />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
