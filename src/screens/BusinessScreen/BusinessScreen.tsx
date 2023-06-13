import React from 'react';
import {
  HeaderDashboard,
  Separator,
  BusinessProductCardList,
  FiltersProfileScreen,
} from '../../components';

import {View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {readProductRequest} from '../../store/reducer/product/actions';

import {Loading} from '../../components';

export const BusinessScreen = () => {
  const {loadingProducts} = useAppSelector(state => state.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(readProductRequest());
  }, [dispatch]);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderDashboard />
      <Separator height={28} />
      <FiltersProfileScreen />

      {loadingProducts ? <Loading /> : <BusinessProductCardList />}
    </View>
  );
};
