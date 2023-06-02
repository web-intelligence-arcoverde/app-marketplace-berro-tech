import {View, ScrollView} from 'react-native';

import {
  Text,
  Separator,
  EditProfileChangeImage,
  EditProfileBasicInformationsForm,
} from '../../';

import {Container} from './style';

export const EditProfileBasicInformations = () => {
  return (
    <ScrollView>
      <Container>
        <EditProfileChangeImage />
        <Separator height={20} />
        <Text typography="h3" colorFamily="gray" colorVariant="_01">
          Suas Informações
        </Text>
        <Separator height={20} />
        <EditProfileBasicInformationsForm />
      </Container>
    </ScrollView>
  );
};
