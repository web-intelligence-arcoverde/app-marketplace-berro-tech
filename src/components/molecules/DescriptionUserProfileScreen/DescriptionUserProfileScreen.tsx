import {View} from 'react-native';

import {scale} from '../../../utils';

import {
  Separator,
  HeaderUserProfileScreen,
  AddressUserProfileScreen,
  FooterUserProfilerScreen,
} from '../../';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {useEffect} from 'react';
import {readInformationUserRequest} from '../../../store/reducer/user/actions';

export const DescriptionUserProfileScreen = () => {
  const dispatch = useAppDispatch();

  const {name, email, address, phone, avaliation_rate, photo} = useAppSelector(
    state => state.user.user,
  );

  useEffect(() => {
    dispatch(readInformationUserRequest());
  }, []);

  return (
    <View style={{paddingHorizontal: scale(20)}}>
      <HeaderUserProfileScreen photo={photo} name={name} email={email} />
      <AddressUserProfileScreen {...address} />
      <FooterUserProfilerScreen
        phone={phone}
        avaliationRate={avaliation_rate}
      />
    </View>
  );
};
