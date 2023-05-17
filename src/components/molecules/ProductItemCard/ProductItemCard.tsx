import { mockImages } from '../../../assets/images/mock';

import { ProductItemDescriptionFooter, ProductItemHeader } from '../..';

import { ContainerFoorterDescription, ImageContainer, Container } from './style';

export const ProductItemCard = (props: any) => {


  const { documents, gender, ageCategory, classification } = props

  let document = Array.isArray(documents) && documents[0]



  return (
    <Container>
      <ImageContainer source={{ uri: document.url }} />
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
