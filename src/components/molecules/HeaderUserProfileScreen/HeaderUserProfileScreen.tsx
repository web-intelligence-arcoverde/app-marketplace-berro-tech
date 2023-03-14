import {Text, Button, Separator} from '../../';
import {View} from 'react-native';
import {ImageProps} from 'react-native';
import {Container, ContainerImage} from './style';
import {useAppSelector, useNavigationHook} from '../../../hooks';

export const HeaderUserProfileScreen = () => {
  const {name, email, photo} = useAppSelector(state => state.user.user);

  const formatedName = name?.split(' ');

  const firstName = formatedName[0];
  const secondName = formatedName[1];

  const {goToRouter} = useNavigationHook();

  return (
    <Container>
      <ContainerImage source={photo} />
      <Separator width={20} />
      <View>
        <Text typography="h3" colorFamily="gray" colorVariant="_02">
          {firstName} {secondName}
        </Text>
        <Text typography="h4" colorFamily="gray" colorVariant="_02">
          {email}
        </Text>
        <Separator height={8} />
        <Button
          title="Minha conta"
          variant="containedFour"
          onPress={() => goToRouter('EditProfileScreen')}
        />
      </View>
    </Container>
  );
};
