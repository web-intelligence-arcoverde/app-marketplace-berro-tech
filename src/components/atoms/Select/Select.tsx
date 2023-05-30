import React, {useState} from 'react';

import {Separator, Text} from '../..';

import {Container, SelectBox} from './style';

interface ISelect {
  value?: string;
  setValue: (value: string, selected: boolean) => void;
}

export const Select = ({
  value = 'Example',
  setValue = (value: string) => console.log(value),
}: ISelect) => {
  const [selectBox, setSelectBox] = useState(false);

  return (
    <Container>
      <SelectBox
        select={selectBox}
        onPress={() => {
          setSelectBox(!selectBox);
          setValue(value, selectBox);
        }}
      />
      <Separator width={12} />
      <Text
        typography="h6"
        colorFamily={selectBox ? 'sub_brand' : 'gray'}
        colorVariant={selectBox ? '_02' : '_04'}>
        {value}
      </Text>
    </Container>
  );
};
