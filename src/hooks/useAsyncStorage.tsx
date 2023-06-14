import AsyncStorage from '@react-native-async-storage/async-storage';

import {useState} from 'react';

export const useAsyncStorage = () => {
  const [value, setValue] = useState<any>('');
  const [loadingValue, setLoadingValue] = useState<boolean>(true);

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
