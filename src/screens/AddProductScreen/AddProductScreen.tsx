import {
  HeaderDashboard,
  StepsAddProduct,
  Text,
  SecondInput,
  Separator,
  Button,
  CustomDropDownPicker,
} from '../../components';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {useForm, SubmitHandler} from 'react-hook-form';

import {ErrorMessage} from '../../locale';

import {View, ScrollView} from 'react-native';
import {scale, getBottomSpaceHeight} from '../../utils';

const schema = yup.object({
  name: yup.string().required(ErrorMessage['email-required']),
});

export const AddProductScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderDashboard />
      <StepsAddProduct />

      <View
        style={{
          paddingHorizontal: scale(20),
          marginTop: scale(28),
        }}>
        <ScrollView style={{height: '70%'}}>
          <Text typography="h3">Sobre o produto</Text>
          <Separator height={20} />
          <SecondInput
            name="name"
            control={control}
            label="Nome"
            placeholder="Nome"
            errors={errors?.name?.message}
          />

          <Separator height={18} />
          <Text typography="h3">Sobre o produto</Text>
          <Separator height={18} />

          <CustomDropDownPicker />
          <Separator height={18} />

          <Button
            title="Próximo"
            variant="containedThirdy"
            onPress={handleSubmit(onSubmit)}
          />

          <Separator height={getBottomSpaceHeight()} />
        </ScrollView>
      </View>
    </View>
  );
};
