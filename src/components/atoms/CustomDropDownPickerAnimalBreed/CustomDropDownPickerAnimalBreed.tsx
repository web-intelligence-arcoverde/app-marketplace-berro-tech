import React from 'react';

import {CustomDropDownPicker} from '../..';
import {useCallback, useEffect, useState} from 'react';
import {
  readAnimalRequest,
  setVisibleBottomSheetAnimalBreed,
} from '../../../store/reducer/product/actions';
import {useAppDispatch, useAppSelector} from '../../../hooks';

export const CustomDropDownPickerAnimalBreed = () => {
  const dispatch = useAppDispatch();
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    dispatch(readAnimalRequest());
  }, [dispatch]);

  const {visible_animal_breed_select, animal_breed} = useAppSelector(
    state => state.product,
  );

  const handleOpenBottomSheetAnimalType = useCallback(() => {
    if (visible_animal_breed_select === 0) {
      dispatch(
        setVisibleBottomSheetAnimalBreed({
          visible_animal_breed_select: 1,
        }),
      );
      setFocus(true);
    } else {
      dispatch(
        setVisibleBottomSheetAnimalBreed({
          visible_animal_breed_select: 0,
        }),
      );
      setFocus(false);
    }
  }, [visible_animal_breed_select]);

  return (
    <CustomDropDownPicker
      onPress={handleOpenBottomSheetAnimalType}
      focus={focus}
      value={animal_breed}
      label="Animal"
      placeholder="Selecione um animal"
    />
  );
};
