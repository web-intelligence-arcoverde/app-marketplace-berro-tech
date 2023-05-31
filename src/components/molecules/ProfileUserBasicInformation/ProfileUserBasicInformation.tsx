import {Image, Linking, View} from 'react-native';
import {Text} from '../../';
import {capitalize} from '../../../utils';

import {Separator, Button} from '../../';
import {ICONS} from '../../../assets';

interface IProfileUserBasicInformation {
  name?: string;
  addresses?: any;
  avatar_url?: any;
}

export const ProfileUserBasicInformation = ({
  name,
  addresses,
  avatar_url,
}: IProfileUserBasicInformation) => {
  let {city, state} =
    addresses.length >= 1 ? addresses[0] : {city: '', state: ''};

  let isExistAddress = city.length >= 1 && state.length >= 1;

  const Seller = ICONS['seller-default'];

  let whatsappNo = '87998093765';
  let whatsappMsg = 'BerroTech';

  return (
    <View
      style={{
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          paddingVertical: 20,
        }}>
        <Text colorFamily="gray" colorVariant="_02">
          Perfil do vendedor
        </Text>
      </View>
      <Separator height={8} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <View>
            <Text typography="h4" colorFamily="gray" colorVariant="_04">
              Nome
            </Text>
            <Separator height={8} />
            <Text typography="h3" colorFamily="gray" colorVariant="_02">
              {capitalize(name)}
            </Text>
          </View>
          <Separator height={8} />
          <View>
            <Text typography="h4" colorFamily="gray" colorVariant="_04">
              Localização
            </Text>
            <Separator height={8} />
            {isExistAddress && (
              <Text typography="h3" colorFamily="gray" colorVariant="_02">
                {city}, {state}
              </Text>
            )}
          </View>
        </View>
        <View style={{width: 150, height: 140}}>
          {!!avatar_url ? (
            <Image
              source={{uri: avatar_url}}
              style={{width: 150, height: 140, borderRadius: 5}}
            />
          ) : (
            <Seller />
          )}
        </View>
      </View>
      <Separator height={20} />
      <Button
        variant="none"
        title="Ver mais"
        onPress={() =>
          Linking.openURL(
            `whatsapp://send?phone=${whatsappNo}&text=${whatsappMsg}`,
          )
        }
      />
    </View>
  );
};
