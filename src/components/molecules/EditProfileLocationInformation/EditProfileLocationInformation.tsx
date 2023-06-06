/* eslint-disable react-hooks/exhaustive-deps */
import {View} from 'react-native';
import React, {useEffect} from 'react';

import {Button, Text, Separator, CustomDropDownPickerStates} from '../../';

import {scale} from '../../../utils';

import {useAppDispatch, useAppSelector} from '../../../hooks';
import {CustomDropDownPickerCities} from '../CustomDropDownPickerCities/CustomDropDownPickerCities';
import {
  selectCity,
  selectState,
  updateUserAddressRequest,
} from '../../../store/reducer/user/actions';

export const EditProfileLocationInformation = () => {
  const {addresses} = useAppSelector(state => state.auth.user);

  const {state: stateSelected, city: citySelected} = useAppSelector(
    state => state.user,
  );

  const {state, city} =
    addresses.length >= 1 ? addresses[0] : {state: '', city: ''};

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!!state && !!city) {
      if (state.length >= 1 || city.length >= 1) {
        dispatch(selectCity(city));
        dispatch(selectState(state));
      }
    }
  }, [city?.length, state?.length]);

  const handleSubmit = () => {
    dispatch(
      updateUserAddressRequest({state: stateSelected, city: citySelected}),
    );
  };

  return (
    <View style={{paddingHorizontal: scale(20)}}>
      <Text typography="h3" colorFamily="gray" colorVariant="_01">
        Localização
      </Text>
      <Separator height={20} />
      <View style={{gap: 20}}>
        <CustomDropDownPickerStates />

        <CustomDropDownPickerCities />

        <Button
          title="Salvar Alterações"
          onPress={() => handleSubmit()}
          variant="containedThirdy"
        />
      </View>
    </View>
  );
};
