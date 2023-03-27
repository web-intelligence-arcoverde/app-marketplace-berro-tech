import React, {useCallback, useMemo, useRef} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {Separator, Text} from '../..';
import {getStatusBarHeight} from '../../../utils';

export const DefaultBottomSheetExample = ({defaultSize}: any) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleClosePress = () => bottomSheetRef?.current?.close();

  const snapPoints = useMemo(() => [100, defaultSize], []);

  const data = useMemo(
    () =>
      Array(2)
        .fill(0)
        .map((_, index) => `index-${index}`),
    [],
  );

  const renderItem = useCallback(({item}) => <ItemList />, []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    if (index === 0) {
      handleClosePress();
    }
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
  },
});

const ItemList = () => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          height: 16,
          width: 16,
          borderWidth: 2,
          borderColor: '#9C99AD',
          borderRadius: 10,
        }}
      />
      <Separator width={14} />
      <Text typography="h4" colorVariant="_01" colorFamily="gray">
        Ovino
      </Text>
    </TouchableOpacity>
  );
};
