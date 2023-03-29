import {CustomDropDownPicker} from '../../';
import {useCallback, useEffect, useState} from 'react';
import {
  readTypesAnimalsRequest,
  setVisibleBottomSheetAnimalType,
} from '../../../store/reducer/product/actions';
import {useAppDispatch, useAppSelector} from '../../../hooks';

export const CustomDropDownPickerAnimalType = () => {
  const dispatch = useAppDispatch();
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    dispatch(readTypesAnimalsRequest());
  }, []);

  const {visible_animal_type_select, animal_type} = useAppSelector(
    state => state.product,
  );

  const handleOpenBottomSheetAnimalType = useCallback(() => {
    if (visible_animal_type_select === 0) {
      dispatch(
        setVisibleBottomSheetAnimalType({
          visible_animal_type_select: 1,
        }),
      );
      setFocus(true);
    } else {
      dispatch(
        setVisibleBottomSheetAnimalType({
          visible_animal_type_select: 0,
        }),
      );
      setFocus(false);
    }
  }, [visible_animal_type_select]);

  return (
    <CustomDropDownPicker
      onPress={handleOpenBottomSheetAnimalType}
      focus={focus}
      value={animal_type}
      label="Animal"
      placeholder="Selecione um tipo de animal"
    />
  );
};
