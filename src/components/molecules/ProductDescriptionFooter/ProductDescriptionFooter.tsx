import {Separator, Text} from '../..';
import {View} from 'react-native';
import {Container} from './style';

interface IProductItemDescriptionFooter {
  title: string;
  description: string;
}

export const ProductDescriptionFooter = ({
  title,
  description,
}: IProductItemDescriptionFooter) => {
  return (
    <Container>
      <Text
        typography="h4"
        colorFamily="gray"
        colorVariant="_02"
        numberOfLines={1}>
        {title}
      </Text>
      <Separator height={4} />
      <Text
        typography="h4"
        colorFamily="gray"
        colorVariant="_04"
        numberOfLines={1}>
        {description}
      </Text>
    </Container>
  );
};
