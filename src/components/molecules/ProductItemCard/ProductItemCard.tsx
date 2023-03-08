import {mockImages} from '../../../assets/images/mock';

import {Image, View, Text} from 'react-native';
import {scale} from '../../../utils';

import {Separator, IconComponent, ProductItemDescriptionFooter} from '../..';

export const ProductItemCard = () => {
  return (
    <View style={{marginTop: 10}}>
      <Image
        source={mockImages.GadoOne}
        style={{
          width: scale(335),
          height: scale(288),
          borderTopLeftRadius: scale(6),
          borderTopRightRadius: scale(6),
        }}
      />
      <View style={{paddingVertical: scale(20)}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>Senepol</Text>
          <Text>3 restantes</Text>
        </View>
        <Separator height={8} />
        <View
          style={{
            display: 'flex',
          }}>
          <Text>Garrote Senepol</Text>
          <Separator height={8} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IconComponent icon="location-icon" />
            <Separator width={10} />
            <Text>Campina Grande, PB</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: '#F2F1F7',
        }}>
        <ProductItemDescriptionFooter title="Sexo" description="Macho" />
        <ProductItemDescriptionFooter title="Idade" description="Garrote" />
        <ProductItemDescriptionFooter
          title="Classifi..."
          description="Genética"
        />
      </View>
    </View>
  );
};
