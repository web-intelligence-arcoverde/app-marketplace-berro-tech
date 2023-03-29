import React, {useCallback, useMemo, useRef} from 'react';

import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {Separator} from '../..';
import {getStatusBarHeight} from '../../../utils';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {
  setVisibleBottomSheetAnimalSex,
  setAnimalSex,
} from '../../../store/reducer/product/actions';

import {BottomSheetSelectAnimalTypeItem} from '../..';

export const BottomSheetSelectAnimalSex = ({defaultSize}: any) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleClosePress = () => bottomSheetRef?.current?.close();

  const {visible_animal_sex_select} = useAppSelector(state => state.product);

  const dispatch = useAppDispatch();

  const snapPoints = useMemo(() => [1, defaultSize], []);

  const data = useMemo(() => ['Macho', 'Fêmea'].map(item => item), []);

  const handleSelectAnimalSex = (item: string) => {
    dispatch(setAnimalSex({animal_sex: item}));
  };

  const renderItem = useCallback(
    ({item}: any) => (
      <BottomSheetSelectAnimalTypeItem
        item={item}
        selectOption={handleSelectAnimalSex}
      />
    ),
    [],
  );

  const handleSheetChanges = useCallback((index: number) => {
    if (index === 0) {
      handleClosePress();
      dispatch(setVisibleBottomSheetAnimalSex({visible_animal_sex_select: 0}));
    }
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={visible_animal_sex_select}
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
