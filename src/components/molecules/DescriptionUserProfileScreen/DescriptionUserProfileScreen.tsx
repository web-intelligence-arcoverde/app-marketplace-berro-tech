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

  const {addresses, contacts, name, email, avatar_url} = useAppSelector(
    state => state.auth.user,
  );

  const {state, city} =
    addresses.length >= 1 ? addresses[0] : {state: '', city: ''};

  const {phone_number} =
    contacts.length >= 1 ? contacts[0] : {phone_number: ''};

  useEffect(() => {
    dispatch(readInformationUserRequest());
  }, []);

  return (
    <View style={{paddingHorizontal: scale(20)}}>
      <HeaderUserProfileScreen name={name} photo={avatar_url} email={email} />
      <AddressUserProfileScreen state={state} city={city} />
      <FooterUserProfilerScreen phone={phone_number} />
    </View>
  );
};
