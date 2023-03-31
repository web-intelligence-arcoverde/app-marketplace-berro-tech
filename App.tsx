import * as React from 'react';
import {Settings} from 'react-native-fbsdk-next';
import {NavigationContainer} from '@react-navigation/native';
import {RouterApp} from './src/routers/router';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import EStyleSheet from 'react-native-extended-stylesheet';

import {Provider} from 'react-redux';
import {store} from './src/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

EStyleSheet.build();

export default function App() {
  Settings.setAppID('784328079697639');

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <Provider store={store}>
          <NavigationContainer>
            <RouterApp />
          </NavigationContainer>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
