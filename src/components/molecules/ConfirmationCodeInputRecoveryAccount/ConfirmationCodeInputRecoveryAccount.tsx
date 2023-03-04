import {useState} from 'react';

import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {styles} from './style';

import {InputProps} from '@rneui/base';

import {InputCodeCell} from './InputCodeCell';

interface IConfirmationCodeInputRecoveryAccount extends InputProps {}

export const ConfirmationCodeInputRecoveryAccount = ({
  value,
  setValue,
}: IConfirmationCodeInputRecoveryAccount) => {
  const CELL_COUNT = 6;

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
        <InputCodeCell
          index={index}
          symbol={symbol}
          isFocused={isFocused}
          getCellOnLayoutHandler={getCellOnLayoutHandler}
        />
      )}
    />
  );
};
