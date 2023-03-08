import {Text, Button, Separator} from '../../';
import {View} from 'react-native';
import {ImageProps} from 'react-native';
import {Container, ContainerImage} from './style';

interface IHeaderUserProfileScreen {
  photo?: string | ImageProps | Readonly<ImageProps>;
  name?: string;
  email?: string;
}

export const HeaderUserProfileScreen = ({
  photo,
  name = '',
  email,
}: IHeaderUserProfileScreen) => {
  const formatedName = name?.split(' ');

  const firstName = formatedName[0];
  const secondName = formatedName[1];

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
          onPress={() => {}}
        />
      </View>
    </Container>
  );
};
