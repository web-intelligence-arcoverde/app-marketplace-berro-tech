import {Separator, Text} from '../../';

import {Container} from './style';

interface IProductItemDescriptionFooter {
  title: string;
  description: string;
}

export const ProductItemDescriptionFooter = ({
  title,
  description,
}: IProductItemDescriptionFooter) => {
  return (
    <Container>
      <Text typography="h4" colorFamily="gray" colorVariant="_02">
        {title}
      </Text>
      <Separator height={4} />
      <Text typography="h4" colorFamily="gray" colorVariant="_04">
        {description}
      </Text>
    </Container>
  );
};
