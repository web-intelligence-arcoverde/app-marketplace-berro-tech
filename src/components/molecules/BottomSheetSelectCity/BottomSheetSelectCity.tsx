/* eslint-disable react-hooks/exhaustive-deps */

import React, {useCallback, useMemo, useRef} from 'react';

import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {Separator} from '../..';
import {getStatusBarHeight} from '../../../utils';
import {useAppDispatch, useAppSelector} from '../../../hooks';

import {BottomSheetSelect} from '../BottomSheetSelect/BottomSheetSelect';
import {selectCity, setVisibleCity} from '../../../store/reducer/user/actions';

export const BottomSheetSelectCity = ({defaultSize}: any) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleClosePress = () => bottomSheetRef?.current?.close();

  const {cities, visible_bottom_sheet_cities} = useAppSelector(
    state => state.user,
  );

  const dispatch = useAppDispatch();

  const snapPoints = useMemo(() => [1, defaultSize], []);

  const data = useMemo(() => cities.map(item => item), [cities]);

  const handleSelectAnimalType = (item: {name: string; acronym: string}) => {
    dispatch(selectCity(item.name));
    dispatch(setVisibleCity(0));
  };

  const renderItem = useCallback(
    ({item}: any) => (
      <BottomSheetSelect item={item} selectOption={handleSelectAnimalType} />
    ),
    [],
  );

  const handleSheetChanges = useCallback((index: number) => {
    if (index === 0) {
      handleClosePress();
      dispatch(setVisibleCity(0));
    }
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={visible_bottom_sheet_cities}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      <BottomSheetFlatList
        data={data}
        keyExtractor={i => i.name}
        renderItem={renderItem}
      />
    </BottomSheet>
  );
};
