import {SafeAreaView, Text} from 'react-native';

import Logo from '../../assets/icons/background-splash-screen.svg';

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const SplashScreen = () => {
  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <Logo width={width} height={height} />
    </SafeAreaView>
  );
};
