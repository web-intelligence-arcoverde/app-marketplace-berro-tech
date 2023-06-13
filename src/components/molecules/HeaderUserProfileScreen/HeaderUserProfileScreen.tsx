import React from 'react';

import {Text, Button, Separator} from '../../';
import {View} from 'react-native';
import {Container, ContainerImage} from './style';
import {useAppDispatch, useNavigationHook} from '../../../hooks';
import {changerStepEditProfile} from '../../../store/reducer/user/actions';
import {signOutRequest} from '../../../store/reducer/auth/actions';

interface IHeaderUserProfileScreen {
  name?: string;
  email?: string;
  photo?: string;
}

export const HeaderUserProfileScreen = ({
  name = '',
  email,
  photo,
}: IHeaderUserProfileScreen) => {
  const formatedName = name.split(' ');

  const firstName = formatedName[0];
  const secondName = formatedName[1];

  const {goToRouter} = useNavigationHook();

  const dispatch = useAppDispatch();

  return (
    <Container>
      <ContainerImage source={{uri: photo}} />
      <Separator width={20} />
      <View>
        <Text typography="h3" colorFamily="gray" colorVariant="_02">
          {firstName} {secondName}
        </Text>
        <Text typography="h4" colorFamily="gray" colorVariant="_02">
          {email}
        </Text>
        <Separator height={8} />
        <View style={{flexDirection: 'row', width: '40%', gap: 12}}>
          <View style={{width: 122}}>
            <Button
              title="Minha conta"
              variant="containedFourNotIcon"
              onPress={() => {
                goToRouter('EditProfileScreen');
                dispatch(changerStepEditProfile({step_edit_profile: 0}));
              }}
            />
          </View>
          <View style={{width: 80}}>
            <Button
              title="Sair"
              variant="containedNoneSecondary"
              onPress={() => {
                dispatch(signOutRequest({router: goToRouter}));
              }}
            />
          </View>
        </View>
      </View>
    </Container>
  );
};
