import {ScrollView} from 'react-native';

import {Text} from '../../';

const dataOptionsSelect = [
  {id: 0, title: 'Principais buscas'},
  {id: 1, title: 'Classificação'},
  {id: 2, title: 'Genética'},
  {id: 3, title: 'Raça'},
  {id: 4, title: 'Sexo'},
];

import React, {useState} from 'react';

import {SelectFilterSpecific} from './style';
import {scale} from '../../../utils';

export const SelectFilterProductSpecificList = () => {
  const [indexSelect, setIndexSelected] = useState(0);

  return (
    <ScrollView horizontal={true} style={{paddingLeft: scale(20)}}>
      {dataOptionsSelect.map(item => {
        return (
          <SelectFilterSpecific
            selected={indexSelect === item.id}
            onPress={() => setIndexSelected(item.id)}>
            <Text typography="h4">{item.title}</Text>
          </SelectFilterSpecific>
        );
      })}
    </ScrollView>
  );
};
