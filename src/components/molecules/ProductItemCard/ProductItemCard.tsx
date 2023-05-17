import { mockImages } from '../../../assets/images/mock';

import { ProductItemDescriptionFooter, ProductItemHeader } from '../..';

import { ContainerFoorterDescription, ImageContainer, Container } from './style';

export const ProductItemCard = (props: any) => {


  const { documents, gender, ageCategory, classification } = props

  console.log(documents[0])

  return (
    <Container>
      <ImageContainer source={mockImages.GadoOne} />
      <ProductItemHeader {...props} />
      <ContainerFoorterDescription>
        <ProductItemDescriptionFooter title="Sexo" description={gender} />
        <ProductItemDescriptionFooter title="Idade" description={ageCategory?.name} />
        <ProductItemDescriptionFooter
          title="Classificação"
          description={classification?.name}
        />
      </ContainerFoorterDescription>
    </Container>
  );
};
