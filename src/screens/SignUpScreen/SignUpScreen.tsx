import React, {useEffect} from 'react';

import {
  HeaderLogoIntro,
  HeaderDescriptionIntro,
  AppContextSignUpScreenComponent,
  KeyboardContainer,
} from '../../components';

import {ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SignUpScreen = () => {
  useEffect(() => {
    async function example() {
      const example = await AsyncStorage.getAllKeys();

      return example;
    }

    console.log(example());
  }, []);

  return (
    <KeyboardContainer>
      <HeaderLogoIntro />
      <ScrollView>
        <HeaderDescriptionIntro
          title="Seja bem-vindo"
          description="Preencha os campos"
        />

        <AppContextSignUpScreenComponent />
      </ScrollView>
    </KeyboardContainer>
  );
};
