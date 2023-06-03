import {Button} from '../../';

import {useAppSelector, useNavigationHook} from '../../../hooks';

export const CreateNewProductButton = () => {
  const {products} = useAppSelector(state => state.auth.user);

  const {goToRouter} = useNavigationHook();

  const isExistProducts = products.length >= 1;

  const addNewProductLabel = !isExistProducts
    ? 'Adicionar meu primeiro negócio'
    : 'Adicionar novo negócio';

  return (
    <Button
      title={addNewProductLabel}
      variant="containedNotIcon"
      onPress={() => goToRouter('AddProductScreen')}
    />
  );
};
