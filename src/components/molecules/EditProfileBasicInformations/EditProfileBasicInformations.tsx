import {View, ScrollView} from 'react-native';

import {
  Text,
  Separator,
  EditProfileChangeImage,
  EditProfileBasicInformationsForm,
} from '../../';

export const EditProfileBasicInformations = () => {
  return (
    <ScrollView>
      <View style={{paddingHorizontal: 20}}>
        <EditProfileChangeImage />
        <Separator height={20} />
        <Text typography="h3" colorFamily="gray" colorVariant="_01">
          Suas Informações
        </Text>
        <Separator height={20} />
        <EditProfileBasicInformationsForm />
      </View>
    </ScrollView>
  );
};
