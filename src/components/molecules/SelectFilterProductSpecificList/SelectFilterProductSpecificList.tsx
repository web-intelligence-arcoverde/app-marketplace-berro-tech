import {ScrollView, TouchableOpacity} from 'react-native';

import {Text} from '../../';
import {scale} from '../../../utils';

const dataOptionsSelect = [
  {id: 0, title: 'Principais buscas'},
  {id: 1, title: 'Classificação'},
  {id: 2, title: 'Genética'},
  {id: 3, title: 'Raça'},
  {id: 4, title: 'Sexo'},
];

export const SelectFilterProductSpecificList = () => {
  return (
    <ScrollView horizontal={true}>
      {dataOptionsSelect.map(item => {
        return (
          <TouchableOpacity
            style={{
              paddingVertical: scale(20),
              paddingHorizontal: scale(16),
            }}>
            <Text typography="h4">{item.title}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
