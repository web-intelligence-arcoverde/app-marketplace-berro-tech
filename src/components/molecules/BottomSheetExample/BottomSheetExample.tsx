import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {changerIndexBottomSheetRecentSearch} from '../../../store/reducer/user/actions';
import {CollapsibleAccordionSelect, HeaderFilterProducts} from '../..';

import {businessFiltersMock} from '../../../mock/bussiness-filters';
import {ScrollView} from 'react-native';
import {filterByAllAttributes} from '../../../utils/filters';
import {
  addItemSelectedFilter,
  readFilterProduct,
} from '../../../store/reducer/product/actions';

export const BottomSheetExample = () => {
  const {bottom_sheet_index} = useAppSelector(state => state.user);

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleClosePress = () => bottomSheetRef?.current?.close();

  const dispatch = useAppDispatch();

  // variables
  const snapPoints = useMemo(() => ['1%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    dispatch(changerIndexBottomSheetRecentSearch({index}));
    if (index === 0) {
      handleClosePress();
    }
  }, []);

  const {produtcs, filterProdutcs, itemsSelectedFilter} = useAppSelector(
    state => state.product,
  );

  let isExistItemsSelectedFilter = itemsSelectedFilter.length >= 1;

  let isFilterProductExist = filterProdutcs.length >= 1;

  let product: any = isFilterProductExist ? filterProdutcs : produtcs;

  useEffect(() => {
    if (isExistItemsSelectedFilter) {
      itemsSelectedFilter.map((item: any, index: number) => {
        if (itemsSelectedFilter.length === 1) {
          let productsFiltred = filterByAllAttributes(product, item);

          dispatch(readFilterProduct(productsFiltred));
        } else if (index >= 1) {
          let productsFiltred = filterByAllAttributes(produtcs, item);
          let appendProducts = productsFiltred.concat(product);
          dispatch(readFilterProduct(appendProducts));
        }
      });
    } else {
      dispatch(readFilterProduct(produtcs));
    }
  }, [itemsSelectedFilter, isExistItemsSelectedFilter, produtcs]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={bottom_sheet_index}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      <ScrollView style={styles.contentContainer}>
        <HeaderFilterProducts />
        {businessFiltersMock.map((item: any, index: number) => {
          return (
            <CollapsibleAccordionSelect
              key={`index-${item.title}-${index}`}
              getValueSelected={(selected: string) =>
                dispatch(addItemSelectedFilter(selected))
              }
              filters={item.filters}
              title={item.title}
              icon={item.icon}
            />
          );
        })}
      </ScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {height: '100%'},
  contentContainer: {
    paddingHorizontal: 20,
  },
});
