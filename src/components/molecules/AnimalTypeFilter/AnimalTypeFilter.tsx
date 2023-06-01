import {useState} from 'react';

import {Text} from '../..';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {filterProductsByAnimalType} from '../../../store/reducer/auth/actions';
import {filterByAllAttributes} from '../../../utils/filters';

import {Container, StepItem} from './style';

export const AnimalTypeFilter = () => {
  const [step, setStep] = useState(3);
  const dispatch = useAppDispatch();
  const {products} = useAppSelector(state => state.auth.user);

  const handleClick = (value: number) => {
    let currentValueTab = step;
    let newValueTab = value;

    if (currentValueTab === newValueTab) {
      setStep(3);
      dispatch(filterProductsByAnimalType([]));
    } else {
      setStep(value);

      if (newValueTab === 0) {
        const filterByBreed = filterByAllAttributes(products, 'caprino');
        dispatch(filterProductsByAnimalType(filterByBreed));
      } else if (value === 1) {
        const filterByBreed = filterByAllAttributes(products, 'ovino');
        dispatch(filterProductsByAnimalType(filterByBreed));
      }
    }
  };

  return (
    <Container>
      <StepItem onPress={() => handleClick(0)} isActive={step === 0}>
        <Text
          typography="h4"
          colorFamily={step === 0 ? 'brand_dark' : 'gray'}
          colorVariant={'_03'}>
          Caprinos
        </Text>
      </StepItem>
      <StepItem onPress={() => handleClick(1)} isActive={step === 1}>
        <Text
          typography="h4"
          colorFamily={step === 1 ? 'brand_dark' : 'gray'}
          colorVariant={'_03'}>
          Ovinos
        </Text>
      </StepItem>
    </Container>
  );
};
