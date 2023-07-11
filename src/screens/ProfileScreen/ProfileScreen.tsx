import React, {useEffect} from 'react';

import {
  DescriptionUserProfileScreen,
  HeaderDashboard,
  Loading,
  MyProductsProfileScreen,
  Separator,
} from '../../components';
import {Container} from './style';
import {RefreshControl, View} from 'react-native';

import {Skeleton} from '@rneui/themed';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {readInformationUserLoggedRequest} from '../../store/reducer/auth/actions';
import {LinearGradient} from 'react-native-svg';

export const ProfileScreen = () => {
  const {loading} = useAppSelector(state => state.auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    onRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRefresh = React.useCallback(() => {
    dispatch(readInformationUserLoggedRequest());
  }, [dispatch]);

  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={onRefresh} />
      }>
      <HeaderDashboard />
      {loading ? (
        <Loading />
      ) : (
        <>
          <DescriptionUserProfileScreen />
          <Separator height={12} />
          <MyProductsProfileScreen />
        </>
      )}
    </Container>
  );
};
