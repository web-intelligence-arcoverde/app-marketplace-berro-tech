import AsyncStorage from '@react-native-async-storage/async-storage';

import {useEffect, useState} from 'react';

export const useAsyncStorage = () => {
  const [value, setValue] = useState<any>('');
  const [loadingValue, setLoadingValue] = useState<boolean>(true);

  useEffect(() => {
    getData('@token');
  }, []);

  const getData = async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      setValue(JSON.parse(jsonValue));
      setLoadingValue(false);
    } catch (e) {
      // error reading value
    }
  };

  const storeData = async (value: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@token', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  return {storeData, value, getData, loadingValue};
};

export const storeData = async (value: string) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@token', jsonValue);
  } catch (e) {
    // saving error
  }
};
