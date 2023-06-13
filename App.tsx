import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RouterApp} from './src/routers/router';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import EStyleSheet from 'react-native-extended-stylesheet';

import {Provider} from 'react-redux';
import {store} from './src/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {ToastProvider} from 'react-native-toast-notifications';

EStyleSheet.build();

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <ToastProvider>
          <Provider store={store}>
            <NavigationContainer>
              <RouterApp />
            </NavigationContainer>
          </Provider>
        </ToastProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
