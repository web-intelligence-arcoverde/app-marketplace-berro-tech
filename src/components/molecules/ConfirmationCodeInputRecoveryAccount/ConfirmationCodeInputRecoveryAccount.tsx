import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {styles} from './style';

import {Dispatch, SetStateAction} from 'react';

import {InputCodeCell} from './InputCodeCell';

interface IConfirmationCodeInputRecoveryAccount {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

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
          key={`input_cell_index_${index}`}
          index={index}
          symbol={symbol}
          isFocused={isFocused}
          getCellOnLayoutHandler={getCellOnLayoutHandler}
        />
      )}
    />
  );
};
