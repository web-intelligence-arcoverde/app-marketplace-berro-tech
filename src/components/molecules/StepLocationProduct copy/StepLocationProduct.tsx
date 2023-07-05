import React, {useContext, useState} from 'react';

import {CustomDropDownPickerStates, Text, Button} from '../..';
import {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {
  useAppDispatch,
  useAppSelector,
  useNavigationHook,
} from '../../../hooks';
import {readStateRequest} from '../../../store/reducer/user/actions';
import {CustomDropDownPickerCities} from '../CustomDropDownPickerCities/CustomDropDownPickerCities';
import {scale} from '../../../utils';
import {createProductRequest} from '../../../store/reducer/product/actions';

import {
  ContextEditProduct,
  IAppContextEditProduct,
} from '../../../context/ContextEditProduct';

export const StepLocationProduct = () => {
  const dispatch = useAppDispatch();
  const {state, city} = useAppSelector(state => state.user);
  const [checkFields, setCheckFields] = useState(true);

  const {setStep} = useContext(ContextEditProduct) as IAppContextEditProduct;

  const {goToRouter} = useNavigationHook();

  useEffect(() => {
    dispatch(readStateRequest());
  }, [dispatch]);

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
          title="Finalizar"
          variant="containedThirdy"
          onPress={() => {
            dispatch(createProductRequest({router: goToRouter}));
            setStep(3);
          }}
        />
      </View>
    </ScrollView>
  );
};
