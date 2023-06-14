import AsyncStorage from '@react-native-async-storage/async-storage';

import {useEffect, useState} from 'react';

export const useAsyncStorage = () => {
  const [value, setValue] = useState<any>('');
  const [loadingValue, setLoadingValue] = useState<boolean>(true);
  const [validToken, setValidToken] = useState(true);

  const getData = async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      if (jsonValue) {
        setValue(JSON.parse(jsonValue));
        setLoadingValue(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const storeData = async (token: string) => {
    try {
      const jsonValue = JSON.stringify(token);
      await AsyncStorage.setItem('@token', jsonValue);
      await AsyncStorage.setItem('@date', JSON.stringify(new Date()));
    } catch (e) {
      console.log(e);
    }
  };

  const invalidTokenByTime = async () => {
    const json = await AsyncStorage.getItem('@date');
    const token = await AsyncStorage.getItem('@token');

    if (token) {
      if (json) {
        let dateSignIn = JSON.parse(json);

        var dataHoraAtual: any = new Date();

        var outraData: any = new Date(dateSignIn);

        var diferencaEmMilissegundos = dataHoraAtual - outraData;

        var diferencaEmHoras = Math.floor(
          diferencaEmMilissegundos / (1000 * 60 * 60),
        );

        if (diferencaEmHoras >= 2) {
          await AsyncStorage.setItem('@token', '');
          await AsyncStorage.setItem('@date', '');
          getData('@token');
          setValidToken(false);
        }
      } else {
        await AsyncStorage.setItem('@date', '');
      }
    }
  };

  useEffect(() => {
    invalidTokenByTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return {storeData, value, getData, loadingValue, validToken};
};

export const storeData = async (value: string) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@token', jsonValue);
  } catch (e) {
    // saving error
  }
};
