import React from 'react';

import {View} from 'react-native';

import {usePickFileHook} from '../../../hooks/usePickFileHook';
import {EmptyFiles} from '../EmptyFiles/EmptyFiles';
import {ListFiles} from '../ListFiles/ListFiles';
import {useAppSelector} from '../../../hooks';

export const StepUploadFiles = () => {
  const {onButtonPress} = usePickFileHook();

  const {files} = useAppSelector(state => state.product);

  let filesExist = files.length >= 1;

  return (
    <View
      style={{
        flex: 1,
      }}>
      {filesExist ? (
        <ListFiles />
      ) : (
        <EmptyFiles onButtonPress={onButtonPress} />
      )}
    </View>
  );
};
