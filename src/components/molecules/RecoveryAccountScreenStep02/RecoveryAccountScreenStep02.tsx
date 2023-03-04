import React, {useState} from 'react';
import {View} from 'react-native';
import {Input, Separator, Button, Text} from '../..';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {Text as DefaultText} from 'react-native';

import {StyleSheet} from 'react-native';
import {useChronometerHook} from '../../../hooks/useChronometerHook';
import {AppContextStepRecoveryAccount} from '../../../context/AppContextStepRecoveryAccount';

const styles = StyleSheet.create({
  cell: {
    width: 40,
    height: 55,
    lineHeight: 38,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#00000030',
    textAlign: 'center',
    borderRadius: 6,
    color: '#9C99AD',
    paddingTop: 8,
  },
  focusCell: {
    backgroundColor: '#FAFAFC',
    borderColor: '#F2F1F7',
  },
});

const CELL_COUNT = 6;

export const RecoveryAccountScreenStep02 = () => {
  const [step, setStep] = React.useContext(AppContextStepRecoveryAccount);

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const {handleStart, chronometer} = useChronometerHook();

  function resendCodeConfirmation() {
    handleStart();
  }

  return (
    <>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text typography="h5" colorFamily="dark" colorVariant="_04">
          Verifique o código que enviamos pro seu email
        </Text>
        <Separator height={8} />
        <Text typography="h5" colorFamily="gray" colorVariant="_04">
          brennoguedes9@gmail.com
        </Text>
        <Separator height={24} />
      </View>
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
          <DefaultText
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </DefaultText>
        )}
      />
      <Separator height={24} />
      <Button title="Próximo" variant="contained" onPress={() => setStep(0)} />
      <Separator height={20} />
      <Button
        title={`Reenviar código (${chronometer})`}
        variant="disabled"
        onPress={() => setStep(1)}
      />
    </>
  );
};
