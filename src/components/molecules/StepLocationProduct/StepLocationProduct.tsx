import React from 'react';

import {CustomDropDownPickerStates, Text, Button} from '../../';
import {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {useAppDispatch, useNavigationHook} from '../../../hooks';
import {readStateRequest} from '../../../store/reducer/user/actions';
import {CustomDropDownPickerCities} from '../CustomDropDownPickerCities/CustomDropDownPickerCities';
import {scale} from '../../../utils';
import {createProductRequest} from '../../../store/reducer/product/actions';

export const StepLocationProduct = () => {
  const dispatch = useAppDispatch();

  const {goToRouter} = useNavigationHook();

  useEffect(() => {
    dispatch(readStateRequest());
  }, [dispatch]);

  return (
    <ScrollView
      style={{paddingHorizontal: scale(20), paddingVertical: scale(20)}}>
      <View style={{gap: scale(20)}}>
        <Text typography="h3" colorFamily="gray" colorVariant="_01">
          Usar sua localização padrão
        </Text>
        <CustomDropDownPickerStates />
        <CustomDropDownPickerCities />
        <Button
          title="Finalizar"
          variant="containedThirdy"
          onPress={() => dispatch(createProductRequest({router: goToRouter}))}
        />
      </View>
    </ScrollView>
  );
};
