import {View} from 'react-native';

import {Text} from '../..';

import {Container} from './style';

const regionInformationDescriptionData = [
  'Encontre',
  'Consulte',
  'Compre',
  'Venda',
];

export const RegionInformationHeaderList = () => {
  return (
    <Container>
      {regionInformationDescriptionData.map((item, index) => {
        return (
          <Text
            typography="h4"
            colorFamily="gray"
            colorVariant="_01"
            key={`${item}-${index}`}>
            {item}
          </Text>
        );
      })}
    </Container>
  );
};
