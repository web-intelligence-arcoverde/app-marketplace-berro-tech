import React, {useCallback, useMemo, useRef} from 'react';

import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {Separator} from '../..';
import {getStatusBarHeight} from '../../../utils';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {setVisibleBottomSheetAnimalType} from '../../../store/reducer/product/actions';

import {BottomSheetSelectAnimalTypeItem} from '../../';

export const BottomSheetSelectAnimalType = ({defaultSize}: any) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleClosePress = () => bottomSheetRef?.current?.close();

  const {visible_animal_type_select, types_animals} = useAppSelector(
    state => state.product,
  );

  const dispatch = useAppDispatch();

  const snapPoints = useMemo(() => [1, defaultSize], []);

  const data = useMemo(() => types_animals.map(item => item), [types_animals]);

  const renderItem = useCallback(
    ({item}: any) => <BottomSheetSelectAnimalTypeItem item={item} />,
    [],
  );

  const handleSheetChanges = useCallback((index: number) => {
    if (index === 0) {
      handleClosePress();
      dispatch(
        setVisibleBottomSheetAnimalType({visible_animal_type_select: 0}),
      );
    }
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={visible_animal_type_select}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      <BottomSheetFlatList
        data={data}
        keyExtractor={i => i}
        renderItem={renderItem}
      />
      <Separator height={getStatusBarHeight()} />
    </BottomSheet>
  );
};
