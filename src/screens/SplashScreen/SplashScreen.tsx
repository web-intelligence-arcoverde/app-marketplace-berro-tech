import {SafeAreaView, Text} from 'react-native';

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
