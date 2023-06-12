import React, {useCallback, useMemo, useRef} from 'react';

import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';

import {useAppDispatch, useAppSelector} from '../../../hooks';
import {
  setVisibleBottomSheetAgeCategory,
  setAgeCategory,
} from '../../../store/reducer/product/actions';

import {BottomSheetSelectAnimalTypeItem} from '../..';

export const BottomSheetSelectAgeCategory = ({defaultSize}: any) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleClosePress = () => bottomSheetRef?.current?.close();

  const {visibleAgeCategory, age_categories} = useAppSelector(
    state => state.product,
  );

  const dispatch = useAppDispatch();

  const snapPoints = useMemo(() => [1, defaultSize], [defaultSize]);

  const data = useMemo(
    () => age_categories.map(item => item.name),
    [age_categories],
  );

  const handleSelectAnimalType = (item: string) => {
    dispatch(setAgeCategory(item));
    dispatch(setVisibleBottomSheetAgeCategory(0));
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
        dispatch(setVisibleBottomSheetAgeCategory(0));
      }
    },
    [dispatch],
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={visibleAgeCategory}
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
