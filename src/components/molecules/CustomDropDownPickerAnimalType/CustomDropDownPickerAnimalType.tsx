import React from 'react';

import {CustomDropDownPicker} from '../../';
import {useCallback, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {setVisibleStates} from '../../../store/reducer/user/actions';

export const CustomDropDownPickerStates = () => {
  const dispatch = useAppDispatch();
  const [focus, setFocus] = useState(false);

  const {state, visible_bottom_sheet_states} = useAppSelector(
    state => state.user,
  );

  const handleOpenBottomSheetAnimalType = useCallback(() => {
    if (visible_bottom_sheet_states === 0) {
      dispatch(setVisibleStates(1));
      setFocus(true);
    } else {
      dispatch(setVisibleStates(0));
      setFocus(false);
    }
  }, [dispatch, visible_bottom_sheet_states]);

  return (
    <CustomDropDownPicker
      onPress={handleOpenBottomSheetAnimalType}
      focus={focus}
      value={state}
      label="Estado"
      placeholder="Selecione seu estado"
    />
  );
};
