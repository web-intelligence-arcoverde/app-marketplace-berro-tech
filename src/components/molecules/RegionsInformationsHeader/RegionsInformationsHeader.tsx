import {View} from 'react-native';

import {Text, Separator, RegionInformationHeaderList} from '../..';

import {Container, TitleDescription} from './style';

export const RegionsInformationsHeader = () => {
  return (
    <Container>
      <TitleDescription>
        <Text typography="h2" colorFamily="brand_dark" colorVariant="_01">
          Nós temos compradores e vendores ativos nas 5 regiões do Brasil
        </Text>
      </TitleDescription>
      <Separator height={28} />
      <RegionInformationHeaderList />
    </Container>
  );
};
