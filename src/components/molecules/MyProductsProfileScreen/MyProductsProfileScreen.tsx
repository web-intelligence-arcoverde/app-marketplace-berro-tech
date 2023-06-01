import {ScrollView} from 'react-native';

import {EmptyContainerProduct, ProductListProfile} from '../../';
import {useAppSelector} from '../../../hooks';

export const MyProductsProfileScreen = () => {
  const {
    filterProducts,
    user: {products},
  } = useAppSelector(state => state.auth);

  const isEmptyProduct = products.length >= 1;

  const product = filterProducts.length >= 1 ? filterProducts : products;

  const renderContent = isEmptyProduct ? (
    <ProductListProfile products={product} />
  ) : (
    <EmptyContainerProduct />
  );

  return <>{renderContent}</>;
};
