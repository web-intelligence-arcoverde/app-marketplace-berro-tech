import React, {useCallback, useMemo, useRef} from 'react';

import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {Separator} from '../..';
import {getStatusBarHeight} from '../../../utils';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {
  setVisibleBottomSheetAnimalBreed,
  setAnimalBreed,
} from '../../../store/reducer/product/actions';

import {BottomSheetSelectAnimalTypeItem} from '../..';

export const BottomSheetSelectAnimalBreed = ({defaultSize}: any) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleClosePress = () => bottomSheetRef?.current?.close();

  const {visible_animal_breed_select, breeds} = useAppSelector(
    state => state.product,
  );

  const dispatch = useAppDispatch();

  const snapPoints = useMemo(() => [1, defaultSize], []);

  const data = useMemo(() => breeds.map(item => item.name), [breeds]);

  const handleSelectAnimalBreed = (item: string) => {
    dispatch(setAnimalBreed({animal_breed: item}));
  };

  const renderItem = useCallback(
    ({item}: any) => (
      <BottomSheetSelectAnimalTypeItem
        item={item}
        selectOption={handleSelectAnimalBreed}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleSheetChanges = useCallback((index: number) => {
    if (index === 0) {
      handleClosePress();
      dispatch(
        setVisibleBottomSheetAnimalBreed({visible_animal_breed_select: 0}),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={visible_animal_breed_select}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      <BottomSheetFlatList
        data={data}
        keyExtractor={(i, index) => `${index}-${i}-breed`}
        renderItem={renderItem}
      />
    </BottomSheet>
  );
};
