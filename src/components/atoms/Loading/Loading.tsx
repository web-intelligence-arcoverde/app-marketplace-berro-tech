import {Dialog} from '@rneui/themed';
import {View, Dimensions} from 'react-native';

let {height, width} = Dimensions.get('screen');

export const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        backgroundColor: '#fff',
        zIndex: 999,
        height: height,
        width: width,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Dialog.Loading loadingProps={{size: 'large', color: '#FFCB04'}} />
    </View>
  );
};
