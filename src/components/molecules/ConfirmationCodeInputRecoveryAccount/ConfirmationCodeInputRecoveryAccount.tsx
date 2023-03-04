import {useState} from 'react';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  codeFieldRoot: {},
  cell: {
    width: 44,
    height: 55,
    lineHeight: 38,
    fontSize: 14,
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 6,
    color: '#9C99AD',
    paddingTop: 8,
    backgroundColor: '#FAFAFC',
    borderColor: '#F2F1F7',
  },
  focusCell: {
    backgroundColor: '#FAFAFC',
    borderColor: '#F2F1F7',
  },
});

const CELL_COUNT = 6;

import {Text} from 'react-native';

export const ConfirmationCodeInputRecoveryAccount = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={setValue}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({index, symbol, isFocused}) => (
        <Text
          key={index}
          style={[styles.cell, isFocused && styles.focusCell]}
          onLayout={getCellOnLayoutHandler(index)}>
          {symbol || (isFocused ? <Cursor /> : '-')}
        </Text>
      )}
    />
  );
};
