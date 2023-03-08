import {Text, Button, Separator, ButtonText} from '../..';

import {View} from 'react-native';

interface IAddressUserProfileScreen {
  city?: string;
  uf?: string;
  country?: string;
}

import {Container} from './style';

export const AddressUserProfileScreen = ({
  city,
  uf,
  country,
}: IAddressUserProfileScreen) => {
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
        <ButtonText onPress={() => {}}>Adicione uma localização</ButtonText>
      )}
    </Container>
  );
};
