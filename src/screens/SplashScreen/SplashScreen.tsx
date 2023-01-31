import {SafeAreaView, Text} from 'react-native';

import {Input} from '@rneui/themed';

export const SplashScreen = () => {
  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <Text>SplashScreen</Text>
    </SafeAreaView>
  );
};
