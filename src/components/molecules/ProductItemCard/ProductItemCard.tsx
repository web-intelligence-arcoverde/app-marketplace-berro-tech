import React from 'react';

import {ProductItemHeader} from '../..';

import {ProductDescriptionFooter} from '../ProductDescriptionFooter/ProductDescriptionFooter';

import {ContainerFoorterDescription, ImageContainer, Container} from './style';

export const ProductItemCard = (props: any) => {
  const {documents, gender, ageCategory, classification, onPress, id} = props;
  let document = Array.isArray(documents) && documents[0];

  return (
    <Container onPress={() => onPress(id)}>
      <ImageContainer source={{uri: document?.url}} />
      <ProductItemHeader {...props} />
      <ContainerFoorterDescription>
        <ProductDescriptionFooter title="Sexo" description={gender} />
        <ProductDescriptionFooter
          title="Idade"
          description={ageCategory?.name}
        />
        <ProductDescriptionFooter
          title="Classificação"
          description={classification?.name}
        />
      </ContainerFoorterDescription>
    </Container>
  );
};
