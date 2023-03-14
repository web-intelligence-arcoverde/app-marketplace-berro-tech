import {Text, Separator, ButtonText} from '../..';
import {useAppDispatch, useNavigationHook} from '../../../hooks';
import {changerStepEditProfile} from '../../../store/reducer/user/actions';
import {Container} from './style';

interface IAddressUserProfileScreen {
  city?: string;
  uf?: string;
  country?: string;
}

export const AddressUserProfileScreen = ({
  city,
  uf,
  country,
}: IAddressUserProfileScreen) => {
  const {goToRouter} = useNavigationHook();

  const dispatch = useAppDispatch();

  return (
    <Container>
      <Text typography="h4" colorFamily="gray" colorVariant="_04">
        Localização
      </Text>
      <Separator height={8} />
      {city ? (
        <Text typography="h4">
          {city}, {uf}, {country}
        </Text>
      ) : (
        <ButtonText
          typography="button"
          onPress={() => {
            goToRouter('EditProfileScreen');
            dispatch(changerStepEditProfile({step_edit_profile: 1}));
          }}>
          Adicione uma localização
        </ButtonText>
      )}
    </Container>
  );
};
