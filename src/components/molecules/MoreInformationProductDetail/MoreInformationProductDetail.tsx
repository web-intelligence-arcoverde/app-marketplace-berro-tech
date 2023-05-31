import React from 'react';
import {View} from 'react-native';

import {Text, Separator} from '../..';
import {formatDate} from '../../../utils';
import {setWeightMask} from '../../../utils/formatWeight';

interface IMoreInformationProductDetail {
  breed?: any;
  weight?: any;
  date_birth?: any;
}

export const MoreInformationProductDetail = ({
  breed,
  weight,
  date_birth,
}: IMoreInformationProductDetail) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      <View style={{width: '50%'}}>
        <Text typography="h4" colorFamily="gray" colorVariant="_04">
          Genetica
        </Text>
        <Text typography="h3" colorFamily="gray" colorVariant="_02">
          {breed.name}
        </Text>
      </View>
      <View style={{width: '50%'}}>
        <Text typography="h4" colorFamily="gray" colorVariant="_04">
          Peso
        </Text>
        <Text typography="h3" colorFamily="gray" colorVariant="_02">
          {setWeightMask(weight.toString())}
        </Text>
      </View>
      <View style={{marginTop: 32}}>
        <Text typography="h4" colorFamily="gray" colorVariant="_04">
          Data de nascimento
        </Text>
        <Text typography="h3" colorFamily="gray" colorVariant="_02">
          {formatDate(new Date(date_birth))}
        </Text>
      </View>
    </View>
  );
};
