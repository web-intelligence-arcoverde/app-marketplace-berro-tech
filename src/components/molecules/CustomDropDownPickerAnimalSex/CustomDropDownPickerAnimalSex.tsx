import {CustomDropDownPicker} from '../..';
import {useCallback, useState} from 'react';
import {setVisibleBottomSheetAnimalSex} from '../../../store/reducer/product/actions';
import {useAppDispatch, useAppSelector} from '../../../hooks';

export const CustomDropDownPickerAnimalSex = () => {
  const dispatch = useAppDispatch();
  const [focus, setFocus] = useState(false);

  const {visible_animal_sex_select, animal_sex} = useAppSelector(
    state => state.product,
  );

  const handleOpenBottomSheetAnimalType = useCallback(() => {
    if (visible_animal_sex_select === 0) {
      dispatch(
        setVisibleBottomSheetAnimalSex({
          visible_animal_sex_select: 1,
        }),
      );
      setFocus(true);
    } else {
      dispatch(
        setVisibleBottomSheetAnimalSex({
          visible_animal_sex_select: 0,
        }),
      );
      setFocus(false);
    }
  }, [visible_animal_sex_select]);

  return (
    <CustomDropDownPicker
      onPress={handleOpenBottomSheetAnimalType}
      focus={focus}
      value={animal_sex}
      label="Sexo"
      placeholder="Selecione o sexo"
    />
  );
};
