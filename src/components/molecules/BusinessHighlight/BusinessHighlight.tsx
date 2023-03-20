import {View, ScrollView} from 'react-native';

import {Text, BusinessHighlightProductList, Separator} from '../../';
import {Container, TitleContainer} from './style';

export const BusinessHighlight = () => {
  return (
    <Container>
      <TitleContainer>
        <Text typography="h2" colorFamily="brand_dark" colorVariant="_01">
          Negócios em destaque
        </Text>
      </TitleContainer>
      <Separator height={20} />
      <BusinessHighlightProductList />
    </Container>
  );
};
