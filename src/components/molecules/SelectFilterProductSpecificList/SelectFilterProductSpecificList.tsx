import {ScrollView} from 'react-native';

import {Text} from '../../';

const dataOptionsSelect = [
  {id: 0, title: 'Principais buscas', tag: 'top'},
  {id: 1, title: 'Classificação', tag: 'rank'},
  {id: 3, title: 'Raça', tag: 'breed'},
  {id: 4, title: 'Sexo', tag: 'sex'},
];

import React, {useEffect, useState} from 'react';

import {SelectFilterSpecific} from './style';
import {scale} from '../../../utils';
import {useAppDispatch} from '../../../hooks';
import {topSearchProductRequest} from '../../../store/reducer/product/actions';

export const SelectFilterProductSpecificList = () => {
  const [indexSelect, setIndexSelected] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(topSearchProductRequest('rank'));
  }, []);

  const searchByTag = (item: any) => {
    setIndexSelected(item.id);
    dispatch(topSearchProductRequest(item.tag));
  };

  return (
    <ScrollView horizontal={true} style={{paddingLeft: scale(20)}}>
      {dataOptionsSelect.map((item, index) => {
        return (
          <SelectFilterSpecific
            key={`${item.id}-${index}`}
            selected={indexSelect === item.id}
            onPress={() => searchByTag(item)}>
            <Text typography="h4">{item.title}</Text>
          </SelectFilterSpecific>
        );
      })}
    </ScrollView>
  );
};
