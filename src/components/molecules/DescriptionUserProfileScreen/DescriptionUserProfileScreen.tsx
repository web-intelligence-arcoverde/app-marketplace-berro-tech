import {View} from 'react-native';

import {scale} from '../../../utils';

import {
  HeaderUserProfileScreen,
  AddressUserProfileScreen,
  FooterUserProfilerScreen,
} from '../../';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {useEffect} from 'react';
import {readInformationUserRequest} from '../../../store/reducer/user/actions';

export const DescriptionUserProfileScreen = () => {
  const dispatch = useAppDispatch();

  const {address, phone, avaliation_rate, name, email, photo} = useAppSelector(
    state => state.user.user,
  );

  const {loading} = useAppSelector(state => state.user);

  useEffect(() => {
    dispatch(readInformationUserRequest());
  }, []);

  console.log(loading);

  return (
    <View style={{paddingHorizontal: scale(20)}}>
      {loading ? (
        <></>
      ) : (
        <>
          <HeaderUserProfileScreen name={name} photo={photo} email={email} />
          <AddressUserProfileScreen {...address} />
          <FooterUserProfilerScreen
            phone={phone}
            avaliationRate={avaliation_rate}
          />
        </>
      )}
    </View>
  );
};
