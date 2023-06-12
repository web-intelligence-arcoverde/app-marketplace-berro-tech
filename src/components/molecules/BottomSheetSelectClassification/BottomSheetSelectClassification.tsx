import React, {useCallback, useMemo, useRef} from 'react';

import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';

import {useAppDispatch, useAppSelector} from '../../../hooks';
import {
  setClassification,
  setVisibleBottomSheetClassification,
} from '../../../store/reducer/product/actions';

import {BottomSheetSelectAnimalTypeItem} from '../..';

export const BottomSheetSelectClassification = ({defaultSize}: any) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleClosePress = () => bottomSheetRef?.current?.close();

  const {visibleClassifications, classifications} = useAppSelector(
    state => state.product,
  );

  const dispatch = useAppDispatch();

  const snapPoints = useMemo(() => [1, defaultSize], [defaultSize]);

  const data = useMemo(
    () => classifications.map(item => item.name),
    [classifications],
  );

  const handleSelectAnimalType = (item: string) => {
    dispatch(setClassification(item));
    dispatch(setVisibleBottomSheetClassification(0));
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
        dispatch(setVisibleBottomSheetClassification(0));
      }
    },
    [dispatch],
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={visibleClassifications}
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
