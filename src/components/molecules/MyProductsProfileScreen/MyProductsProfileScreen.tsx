import {View} from 'react-native';

import {EmptyContainerProduct, ProductListProfile} from '../../';

export const MyProductsProfileScreen = () => {
  const products = [];

  const isEmptyProduct = products.length >= 1;

  const renderContent = isEmptyProduct ? (
    <ProductListProfile />
  ) : (
    <EmptyContainerProduct />
  );

  return (
    <View
      style={{
        backgroundColor: '#FCFCFA',
        flex: 1,
      }}>
      {renderContent}
    </View>
  );
};
