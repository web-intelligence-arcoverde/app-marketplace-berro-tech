import {
  HeaderDashboard,
  Separator,
  BusinessProductCardList,
  FiltersProfileScreen,
} from '../../components';

import {ScrollView, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {readProductRequest} from '../../store/reducer/product/actions';

export const BusinessScreen = () => {
  const {loadingProducts} = useAppSelector(state => state.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(readProductRequest());
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderDashboard />
      <Separator height={28} />
      <ScrollView>
        <FiltersProfileScreen />
        <Separator height={28} />
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
          }}>
          {!loadingProducts && <BusinessProductCardList />}
        </View>
      </ScrollView>
    </View>
  );
};
