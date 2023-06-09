import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../../../hooks';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {useForm} from 'react-hook-form';
import {
  changerStepProduct,
  readAnimalRequest,
  readBreedRequest,
  setVisibleBottomSheetAnimal,
  setVisibleBottomSheetAnimalBreed,
  setVisibleBottomSheetAnimalSex,
} from '../../../store/reducer/product/actions';

import {
  Text,
  SecondInput,
  CustomInput,
  CustomDropDownPicker,
  Button,
} from '../../';

import {Container, CustomContainer} from './style';

const schema = yup.object({
  name: yup.string().required(),
  weight: yup.number().required(),
  description: yup.string().required(),
});

export const StepBasicInformationProduct = () => {
  const dispatch = useAppDispatch();
  const {selectAnimal, animal_breed, animal_sex} = useAppSelector(
    state => state.product,
  );

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      weight: '',
      description: '',
      birthDate: new Date(),
    },
  });

  useEffect(() => {
    dispatch(readAnimalRequest());
  }, [dispatch]);

  useEffect(() => {
    if (selectAnimal) {
      dispatch(readBreedRequest(selectAnimal));
    }
  }, [dispatch, selectAnimal]);

  //@ts-ignore
  const onSubmit = data => console.log(data);

  return (
    <Container>
      <CustomContainer>
        <Text typography="h3" colorFamily="gray" colorVariant="_01">
          Sobre o produto
        </Text>

        <SecondInput
          name="name"
          control={control}
          label="Nome"
          placeholder="Informe o nome do animal"
          errors={errors?.name?.message}
        />

        <CustomDropDownPicker
          label={'Animal'}
          placeholder={'Selecione um animal'}
          onPress={() => dispatch(setVisibleBottomSheetAnimal(1))}
          value={selectAnimal}
        />

        <CustomDropDownPicker
          label={'Raça'}
          placeholder={'Selecione uma raça'}
          onPress={() =>
            dispatch(
              setVisibleBottomSheetAnimalBreed({
                visible_animal_breed_select: 1,
              }),
            )
          }
          value={animal_breed}
        />

        <CustomDropDownPicker
          label={'Sexo'}
          placeholder={'Selecione o sexo do animal'}
          onPress={() =>
            dispatch(
              setVisibleBottomSheetAnimalSex({visible_animal_sex_select: 1}),
            )
          }
          value={animal_sex}
        />

        <CustomDropDownPicker
          label={'Idade'}
          placeholder={'Selecione a idade do animal'}
          onPress={() => console.log('log')}
          value={''}
        />

        <SecondInput
          name="weight"
          control={control}
          label="Peso"
          placeholder="Informe o peso do seu animal"
          errors={errors?.name?.message}
        />

        <CustomInput
          control={control}
          label="Data de nascimento"
          name="birth_date"
          type={'datetime'}
          options={{
            format: 'DD/MM/YYYY',
          }}
          placeholder="Digite a data de nascimento do seu animal"
        />

        <SecondInput
          name="description"
          control={control}
          label="Descrição"
          placeholder="Nós dê uma descrição detalhada"
          errors={errors?.name?.message}
        />

        <Text typography="h3" colorFamily="gray" colorVariant="_01">
          Sobre o produto
        </Text>

        <CustomDropDownPicker
          label={'Tipo de venda'}
          placeholder={'Selecione o tipo de venda'}
          onPress={() => console.log('log')}
          value={''}
        />

        <SecondInput
          name="parcelas"
          control={control}
          label="Parcelas"
          placeholder="Informe a quantidade de parcelas"
          errors={errors?.name?.message}
        />

        <CustomInput
          control={control}
          label="Preço"
          name="price"
          type="money"
          placeholder="Digite o valor do animal"
        />

        <SecondInput
          name="parcelas"
          control={control}
          label="Quantidade de animais"
          placeholder="Quantidade de animais"
          errors={errors?.name?.message}
        />

        <Button
          title="Próximo"
          variant="containedThirdy"
          //onPress={handleSubmit(onSubmit)}
          onPress={() => dispatch(changerStepProduct(1))}
        />
      </CustomContainer>
    </Container>
  );
};
