import {Cursor} from 'react-native-confirmation-code-field';

import {styles} from './style';

import {Text} from 'react-native';

export const InputCodeCell = ({
  index,
  isFocused,
  symbol,
  getCellOnLayoutHandler,
}: any) => {
  return (
    <Text
      key={index}
      style={[styles.cell, isFocused && styles.focusCell]}
      onLayout={getCellOnLayoutHandler(index)}>
      {symbol || (isFocused ? <Cursor /> : '-')}
    </Text>
  );
};
