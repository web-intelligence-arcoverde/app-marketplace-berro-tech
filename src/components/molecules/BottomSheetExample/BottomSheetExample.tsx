import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {changerIndexBottomSheetRecentSearch} from '../../../store/reducer/user/actions';

export const BottomSheetExample = () => {
  const {bottom_sheet_index} = useAppSelector(state => state.user);

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleClosePress = () => bottomSheetRef?.current?.close();

  const dispatch = useAppDispatch();

  // variables
  const snapPoints = useMemo(() => ['1%', '84%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    dispatch(changerIndexBottomSheetRecentSearch({index}));
    if (index === 0) {
      handleClosePress();
    }
  }, []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.();
  }, []);

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={bottom_sheet_index}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      <View style={styles.contentContainer}>
        <Text>Recentes</Text>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
});
