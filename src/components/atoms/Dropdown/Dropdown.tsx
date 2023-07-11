import React, {useState} from 'react';

import {ButtonIcon, Text} from '../..';
import {ItemDropdown, DropdownContainer, Container} from './style';

interface IOption {
  text: string;
  value: string;
}

interface IDropdown {
  options: Array<IOption>;
  icon?: string;
  setOption?: any;
}

export const Dropdown = ({
  options,
  icon = 'ordened-icon',
  setOption,
}: IDropdown) => {
  const [visible, setVisible] = useState<string>('none');

  const setVisibleDropdown = () => {
    if (visible === 'flex') {
      setVisible('none');
    } else {
      setVisible('flex');
    }
  };

  return (
    <Container>
      <ButtonIcon icon={icon} onPress={() => setVisibleDropdown()} />
      <DropdownContainer display={visible}>
        {options.map((item: IOption) => {
          return (
            <ItemDropdown
              key={`#-${item.text}-${item.value}`}
              onPress={() => {
                setOption(item.value);
                setVisible('none');
              }}>
              <Text typography="h5">{item.text}</Text>
            </ItemDropdown>
          );
        })}
      </DropdownContainer>
    </Container>
  );
};
