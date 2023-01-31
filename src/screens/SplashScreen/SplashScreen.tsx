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

      <Input
        placeholder="Comment"
        leftIcon={{type: 'font-awesome', name: 'comment'}}
      />
    </SafeAreaView>
  );
};
