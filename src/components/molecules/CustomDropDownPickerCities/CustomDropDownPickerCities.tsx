import {CustomDropDownPicker} from '../..';
import {useCallback, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {setVisibleCity} from '../../../store/reducer/user/actions';

export const CustomDropDownPickerCities = () => {
  const dispatch = useAppDispatch();
  const [focus, setFocus] = useState(false);

  const {visible_bottom_sheet_cities, city, states} = useAppSelector(
    state => state.user,
  );

  const handleOpenBottomSheetAnimalType = useCallback(() => {
    if (visible_bottom_sheet_cities === 0 && states.length >= 1) {
      dispatch(setVisibleCity(1));
      setFocus(true);
    } else {
      dispatch(setVisibleCity(0));
      setFocus(false);
    }
  }, [dispatch, visible_bottom_sheet_cities, states]);

  return (
    <CustomDropDownPicker
      onPress={handleOpenBottomSheetAnimalType}
      focus={focus}
      value={city}
      label="Cidade"
      placeholder="Selecione sua cidade"
    />
  );
};
