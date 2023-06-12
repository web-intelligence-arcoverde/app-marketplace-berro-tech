import React, {useCallback, useMemo, useRef} from 'react';

import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';

import {useAppDispatch, useAppSelector} from '../../../hooks';
import {
  setVisibleBottomSheetAnimal,
  setAnimal,
} from '../../../store/reducer/product/actions';

import {BottomSheetSelectAnimalTypeItem} from '../..';

export const BottomSheetSelectAnimalType = ({defaultSize}: any) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleClosePress = () => bottomSheetRef?.current?.close();

  const {visibleAnimal, animals} = useAppSelector(state => state.product);

  const dispatch = useAppDispatch();

  const snapPoints = useMemo(() => [1, defaultSize], [defaultSize]);

  const data = useMemo(() => animals.map(item => item.name), [animals]);

  const handleSelectAnimalType = (item: string) => {
    dispatch(setAnimal(item));
    dispatch(setVisibleBottomSheetAnimal(0));
  };

  const renderItem = useCallback(
    ({item}: any) => (
      <BottomSheetSelectAnimalTypeItem
        item={item}
        selectOption={handleSelectAnimalType}
      />
    ),
    [],
  );

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === 0) {
        handleClosePress();
        dispatch(setVisibleBottomSheetAnimal(0));
      }
    },
    [dispatch],
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={visibleAnimal}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      <BottomSheetFlatList
        data={data}
        keyExtractor={i => i}
        renderItem={renderItem}
      />
    </BottomSheet>
  );
};
