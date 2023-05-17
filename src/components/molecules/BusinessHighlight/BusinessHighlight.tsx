import { useEffect } from 'react';
import { View, ScrollView } from 'react-native';

import { Text, BusinessHighlightProductList, Separator } from '../../';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { readBusinessHighlightProductRequest } from '../../../store/reducer/product/actions';
import { Container, TitleContainer } from './style';

export const BusinessHighlight = () => {

  const dispatch = useAppDispatch()

  const { loadingBusinessHighlightProduct } = useAppSelector(state => state.product)


  useEffect(() => {
    dispatch(readBusinessHighlightProductRequest())
  }, [])

  return (
    <Container>
      <TitleContainer>
        <Text typography="h2" colorFamily="brand_dark" colorVariant="_01">
          Negócios em destaque
        </Text>
      </TitleContainer>
      <Separator height={20} />
      {!loadingBusinessHighlightProduct &&
        <BusinessHighlightProductList />
      }
    </Container>
  );
};
