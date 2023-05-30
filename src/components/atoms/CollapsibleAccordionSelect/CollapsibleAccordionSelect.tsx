import {useState} from 'react';
import {ScrollView} from 'react-native';
import {View} from 'react-native';
import {Select, IconComponent, Separator, Text} from '../..';

import {
  HeaderCollapsibleAccordionSelect,
  CollapsibleAccordionSelectListContainer,
  InputContainer,
  Input,
} from './style';

interface ICollapsibleAccordionSelect {
  title?: string;
  filters?: any[];
  getValueSelected?: (value: string) => void;
  icon?: string;
}

export const CollapsibleAccordionSelect = ({
  title = 'Example',
  filters = [],
  getValueSelected = () => {},
  icon = 'arrow-down',
}: ICollapsibleAccordionSelect) => {
  const [value, setValue] = useState('');
  const [openAccordion, setOpenAccordion] = useState(false);

  let filteredByValue =
    value.length > 0
      ? filters?.filter((item: string) =>
          item?.toLowerCase()?.includes(value?.toLowerCase()),
        )
      : filters;

  return (
    <View style={{display: 'flex', flexDirection: 'column'}}>
      <HeaderCollapsibleAccordionSelect
        onPress={() => setOpenAccordion(!openAccordion)}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconComponent icon={icon} />
          <Separator width={16} />
          <Text typography="h6" colorFamily={'gray'} colorVariant={'_02'}>
            {title}
          </Text>
        </View>
        <IconComponent icon="arrow-down" />
      </HeaderCollapsibleAccordionSelect>
      {openAccordion && (
        <>
          <InputContainer>
            <IconComponent icon="search-icon" />
            <Separator width={16} />
            <Input value={value} onChangeText={setValue} placeholder="Buscar" />
          </InputContainer>
          {filters.length >= 1 && (
            <CollapsibleAccordionSelectListContainer>
              <ScrollView>
                {filteredByValue.map((value: string, index: number) => {
                  return (
                    <Select
                      value={value}
                      setValue={getValueSelected}
                      key={`select-${value}-${index}`}
                    />
                  );
                })}
              </ScrollView>
            </CollapsibleAccordionSelectListContainer>
          )}
        </>
      )}
    </View>
  );
};
