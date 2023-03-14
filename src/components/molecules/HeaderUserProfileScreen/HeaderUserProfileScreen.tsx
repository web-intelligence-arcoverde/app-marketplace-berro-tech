import {Text, Button, Separator} from '../../';
import {View} from 'react-native';
import {ImageProps} from 'react-native';
import {Container, ContainerImage} from './style';
import {
  useAppDispatch,
  useAppSelector,
  useNavigationHook,
} from '../../../hooks';
import {changerStepEditProfile} from '../../../store/reducer/user/actions';

export const HeaderUserProfileScreen = () => {
  const {name, email, photo} = useAppSelector(state => state.user.user);

  const formatedName = name?.split(' ');

  const firstName = formatedName[0];
  const secondName = formatedName[1];

  const {goToRouter} = useNavigationHook();

  const dispatch = useAppDispatch();

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
          onPress={() => {
            goToRouter('EditProfileScreen');
            dispatch(changerStepEditProfile({step_edit_profile: 0}));
          }}
        />
      </View>
    </Container>
  );
};
