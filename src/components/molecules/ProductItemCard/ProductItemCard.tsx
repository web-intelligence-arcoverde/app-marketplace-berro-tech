import {mockImages} from '../../../assets/images/mock';

import {ProductItemDescriptionFooter, ProductItemHeader} from '../..';

import {ContainerFoorterDescription, ImageContainer, Container} from './style';

export const ProductItemCard = () => {
  return (
    <Container>
      <ImageContainer source={mockImages.GadoOne} />
      <ProductItemHeader />
      <ContainerFoorterDescription>
        <ProductItemDescriptionFooter title="Sexo" description="Macho" />
        <ProductItemDescriptionFooter title="Idade" description="Garrote" />
        <ProductItemDescriptionFooter
          title="Classifi..."
          description="Genética"
        />
      </ContainerFoorterDescription>
    </Container>
  );
};
