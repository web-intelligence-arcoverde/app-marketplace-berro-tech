import {View} from 'react-native';

import {Button, Separator} from '../..';

export const ContentIntro = () => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
        borderRadius: 6,
        paddingVertical: 32,
        borderBottomColor: '#f4f4f4',
        borderBottomWidth: 1,
      }}>
      <Button title="Entrar com email" variant="contained" icon="email" />
      <Separator height={20} />
      <Button title="Entrar com google" variant="outlined" icon="gmail" />
      <Separator height={20} />
      <Button title="Entrar com facebook" variant="outlined" icon="facebook" />
    </View>
  );
};
