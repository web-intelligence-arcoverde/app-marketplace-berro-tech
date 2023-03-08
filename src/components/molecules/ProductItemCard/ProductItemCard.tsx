import {mockImages} from '../../../assets/images/mock';

import {Image, View} from 'react-native';
import {scale} from '../../../utils';

import {ProductItemDescriptionFooter, ProductItemHeader} from '../..';

import {ContainerFoorterDescription} from './style';

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
      <ProductItemHeader />
      <ContainerFoorterDescription>
        <ProductItemDescriptionFooter title="Sexo" description="Macho" />
        <ProductItemDescriptionFooter title="Idade" description="Garrote" />
        <ProductItemDescriptionFooter
          title="Classifi..."
          description="Genética"
        />
      </ContainerFoorterDescription>
    </View>
  );
};
