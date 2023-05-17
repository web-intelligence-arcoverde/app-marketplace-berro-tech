import { Separator, ProductItemAddress, Text } from '../..';

import { Container, ContainerHeader } from './style';

export const ProductItemHeader = ({ name, breed, business, address }: any) => {

  return (
    <Container>
      <ContainerHeader>
        <Text typography="h4" colorFamily="gray" colorVariant="_02">
          {breed?.name}
        </Text>
        <Text typography="h4" colorFamily="gray" colorVariant="_02">
          {business?.amount} restantes
        </Text>
      </ContainerHeader>
      <Separator height={8} />
      <Text typography="h3" colorFamily="gray" colorVariant="_01">
        {name}
      </Text>
      <Separator height={8} />
      <ProductItemAddress {...address} />
    </Container>
  );
};
