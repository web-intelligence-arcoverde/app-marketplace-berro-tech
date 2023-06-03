import {TouchableOpacity} from 'react-native';

import {IconComponent} from '../../';

import {useAppDispatch} from '../../../hooks';
import {
  readFilterProduct,
  searchProduct,
} from '../../../store/reducer/product/actions';

interface IClearSearchIcon {
  setFocus: (focus: boolean) => void;
}

export const ClearSearchIcon = ({setFocus}: IClearSearchIcon) => {
  const dispatch = useAppDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        setFocus(false);
        dispatch(readFilterProduct([]));
        dispatch(searchProduct(''));
      }}>
      <IconComponent icon="close-icon" />
    </TouchableOpacity>
  );
};
