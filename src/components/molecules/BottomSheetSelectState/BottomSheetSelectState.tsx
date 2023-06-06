/* eslint-disable react-hooks/exhaustive-deps */

import React, {useCallback, useEffect, useMemo, useRef} from 'react';

import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {useAppDispatch, useAppSelector} from '../../../hooks';

import {
  readCityByStateRequest,
  readStateRequest,
  selectState,
  setVisibleStates,
} from '../../../store/reducer/user/actions';
import {BottomSheetSelect} from '../BottomSheetSelect/BottomSheetSelect';

export const BottomSheetSelectState = ({defaultSize}: any) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(readStateRequest());
  }, []);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleClosePress = () => bottomSheetRef?.current?.close();

  const {states, visible_bottom_sheet_states} = useAppSelector(
    state => state.user,
  );

  const snapPoints = useMemo(() => [1, defaultSize], []);

  const data = useMemo(() => states.map(item => item), [states]);

  const handleSelectAnimalType = (item: {name: string; acronym: string}) => {
    dispatch(selectState(item.name));
    dispatch(setVisibleStates(0));
    dispatch(readCityByStateRequest(item.acronym));
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
      dispatch(setVisibleStates(0));
    }
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={visible_bottom_sheet_states}
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
