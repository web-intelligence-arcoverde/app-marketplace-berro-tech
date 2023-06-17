import AsyncStorage from '@react-native-async-storage/async-storage';

import {useEffect, useState} from 'react';
import {useAppDispatch} from './useReduxHook';
import {setToken} from '../store/reducer/auth/actions';

export const useAsyncStorage = () => {
  const [value, setValue] = useState<any>('');
  const [loadingValue, setLoadingValue] = useState<boolean>(true);
  const [validToken, setValidToken] = useState(true);
  const dispatch = useAppDispatch();

  const getData = async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);

      if (jsonValue) {
        let exampleIsEmpty = JSON.parse(jsonValue);
        if (exampleIsEmpty) {
          setValue(JSON.parse(jsonValue));
          setLoadingValue(false);
          invalidTokenByTime();
        } else {
          setValidToken(false);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const storeData = async (token: string) => {
    try {
      let date = new Date();

      await AsyncStorage.setItem('@token', JSON.stringify(token));
      await AsyncStorage.setItem('@date', JSON.stringify(date));
    } catch (e) {
      console.log(e);
    }
  };

  const invalidTokenByTime = async () => {
    if (value) {
      const dateLoggedUser = await AsyncStorage.getItem('@date');

      if (dateLoggedUser) {
        let paseDateLoggedToObj = JSON.parse(dateLoggedUser);

        if (paseDateLoggedToObj) {
          var dataHoraAtual: any = new Date();

          var outraData: any = new Date(paseDateLoggedToObj);

          var diferencaEmMilissegundos = dataHoraAtual - outraData;

          var diferencaEmHoras = Math.floor(
            diferencaEmMilissegundos / (1000 * 60 * 60),
          );

          if (diferencaEmHoras >= 2) {
            await AsyncStorage.setItem('@token', '');
            await AsyncStorage.setItem('@date', '');
            getData('@token');
            setValidToken(false);
          } else {
            setValue(value);
            dispatch(setToken(value));
          }
        } else {
          setValidToken(false);
        }
      }
    } else {
    }
  };

  return {storeData, value, getData, loadingValue, validToken};
};

export const storeData = async (value: string) => {
  try {
    let date = new Date();

    console.log(date);

    await AsyncStorage.setItem('@token', JSON.stringify(value));
    await AsyncStorage.setItem('@date', JSON.stringify(date));
  } catch (e) {
    // saving error
  }
};

/*
  useEffect(() => {
    invalidTokenByTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const invalidTokenByTime = async () => {
    const dateLoggedUser = await AsyncStorage.getItem('@date');
    const token = await AsyncStorage.getItem('@token');

    if (token) {
      let parseTokenToObj = JSON.parse(token);
      if (parseTokenToObj && dateLoggedUser) {
        let paseDateLoggedToObj = JSON.parse(dateLoggedUser);
        if (paseDateLoggedToObj) {
          var dataHoraAtual: any = new Date();

          var outraData: any = new Date(paseDateLoggedToObj);

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
          setValidToken(false);
        }
      } else {
        setValidToken(false);
      }
    }
  };

        */
