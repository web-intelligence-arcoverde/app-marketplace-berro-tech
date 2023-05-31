import {Text, Separator} from '../../';

import {LayoutContainer} from './style';

interface IDescriptionProductDetailScreen {
  description?: string;
}

export const DescriptionProductDetailScreen = ({
  description = '',
}: IDescriptionProductDetailScreen) => {
  return (
    <LayoutContainer>
      <Text typography="h3" colorFamily="gray" colorVariant="_02">
        Descrição
      </Text>
      <Separator height={10} />
      <Text typography="h3" colorFamily="gray" colorVariant="_04">
        {description}
      </Text>
    </LayoutContainer>
  );
};
