import React, {useEffect} from 'react';

import {
  DescriptionUserProfileScreen,
  HeaderDashboard,
  Loading,
  MyProductsProfileScreen,
  Separator,
} from '../../components';
import {Container} from './style';
import {RefreshControl} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {readInformationUserLoggedRequest} from '../../store/reducer/auth/actions';

export const ProfileScreen = () => {
  const {loading} = useAppSelector(state => state.auth);

  console.log(loading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(readInformationUserLoggedRequest());
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
