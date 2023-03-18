import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {useFocusEffect} from '@react-navigation/native';
import {changerIndexBottomSheetRecentSearch} from '../../../store/reducer/user/actions';

export const BottomSheetExample = () => {
  const {bottom_sheet_index} = useAppSelector(state => state.user);

  console.log(bottom_sheet_index);

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  const dispatch = useAppDispatch();

  // variables
  const snapPoints = useMemo(() => ['1%', '84%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    dispatch(changerIndexBottomSheetRecentSearch({index}));
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      return () => bottomSheetRef.current?.close();
    }, []),
  );

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present();
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
