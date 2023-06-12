import React, {useCallback, useMemo, useRef} from 'react';

import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';

import {useAppDispatch, useAppSelector} from '../../../hooks';
import {
  setVisibleBottomSheetSellType,
  setSellType,
} from '../../../store/reducer/product/actions';

import {BottomSheetSelectAnimalTypeItem} from '../..';

export const BottomSheetSelectSellType = ({defaultSize}: any) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleClosePress = () => bottomSheetRef?.current?.close();

  const {visibleSellType, sellTypes} = useAppSelector(state => state.product);

  const dispatch = useAppDispatch();

  const snapPoints = useMemo(() => [1, defaultSize], [defaultSize]);

  const data = useMemo(() => sellTypes.map(item => item.name), [sellTypes]);

  const handleSelectAnimalType = (item: string) => {
    dispatch(setSellType(item));
    dispatch(setVisibleBottomSheetSellType(0));
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
        dispatch(setVisibleBottomSheetSellType(0));
      }
    },
    [dispatch],
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={visibleSellType}
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
