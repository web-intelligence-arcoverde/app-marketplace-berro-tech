import {Separator, ProductItemAddress, Text} from '../..';

import {Container, ContainerHeader} from './style';

export const ProductItemHeader = () => {
  return (
    <Container>
      <ContainerHeader>
        <Text typography="h4" colorFamily="gray" colorVariant="_02">
          Senepol
        </Text>
        <Text typography="h4" colorFamily="gray" colorVariant="_02">
          3 restantes
        </Text>
      </ContainerHeader>
      <Separator height={8} />
      <Text typography="h3" colorFamily="gray" colorVariant="_01">
        Garrote Senepol
      </Text>
      <Separator height={8} />
      <ProductItemAddress />
    </Container>
  );
};
