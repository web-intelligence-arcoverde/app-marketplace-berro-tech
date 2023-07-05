import React, {useState} from 'react';

import {CustomDropDownPickerStates, Text, Button} from '../..';
import {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {
  useAppDispatch,
  useAppSelector,
  useNavigationHook,
} from '../../../hooks';
import {
  readStateRequest,
  selectCity,
  selectState,
} from '../../../store/reducer/user/actions';
import {CustomDropDownPickerCities} from '../CustomDropDownPickerCities/CustomDropDownPickerCities';
import {scale} from '../../../utils';
import {updateProductLocationRequest} from '../../../store/reducer/product/actions';

export const EditLocationProduct = () => {
  const dispatch = useAppDispatch();
  const {state, city} = useAppSelector(state => state.user);
  const [checkFields, setCheckFields] = useState(true);

  const address = useAppSelector(
    state => state.product.product.products[0].address,
  );

  const product = useAppSelector(state => state.product.product.products[0]);
  const {goToRouter} = useNavigationHook();

  useEffect(() => {
    dispatch(readStateRequest());
    dispatch(selectState(address.state));
    dispatch(selectCity(address.city));
  }, [address.city, address.state, dispatch]);

  useEffect(() => {
    setCheckFields(isCheckPropObj({state, city}));
  }, [city, state]);

  function isCheckPropObj(obj: any) {
    let isEmptyObj = false;
    Object.keys(obj).map(item => {
      if (obj[item] === '' || obj[item] === null) {
        isEmptyObj = true;
      }
    });
    return isEmptyObj;
  }

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
          disabled={checkFields}
          title="Atualizar"
          variant="containedThirdy"
          onPress={() => {
            goToRouter('DashboardBottomNavigation');
            dispatch(
              updateProductLocationRequest({
                id: product.id,
                formData: {state, city},
              }),
            );
          }}
        />
      </View>
    </ScrollView>
  );
};
