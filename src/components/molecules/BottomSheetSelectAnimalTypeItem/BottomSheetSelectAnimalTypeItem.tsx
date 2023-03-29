import {View, TouchableOpacity} from 'react-native';

import {Separator, Text} from '../..';
import {capitalize, scale} from '../../../utils';
import {useAppDispatch} from '../../../hooks';

export const BottomSheetSelectAnimalTypeItem = ({item, selectOption}: any) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: scale(50),
        paddingHorizontal: scale(20),
      }}
      onPress={() => selectOption(item)}>
      <View
        style={{
          height: scale(16),
          width: scale(16),
          borderWidth: scale(2),
          borderColor: '#9C99AD',
          borderRadius: scale(10),
        }}
      />
      <Separator width={14} />
      <Text typography="h4" colorVariant="_01" colorFamily="gray">
        {capitalize(item)}
      </Text>
    </TouchableOpacity>
  );
};
