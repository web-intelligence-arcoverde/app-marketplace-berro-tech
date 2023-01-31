import {SafeAreaView, Text} from 'react-native';

import {Input} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      <Icon name="rocket" size={30} color="#900" />
      <Input
        placeholder="Comment"
        leftIcon={{type: 'font-awesome', name: 'comment'}}
      />
    </SafeAreaView>
  );
};
